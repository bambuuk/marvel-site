import {useState, useEffect} from 'react';

import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {

    const [comicses, setComicses] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComicses} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComicses(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newComicses) => {
        let ended = false;
        if (newComicses.length < 8) {
            ended = true;
        }

        setComicses(comicses => [...comicses, ...newComicses]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8)
        setComicsEnded(comicsEnded => ended)
    }

    function renderItem(arr) {
        const items = arr.map((item, i) => {
            const {url, thumbnail, name, price} = item;
            return (
                <li className="comics__item" key={i} tabIndex={0}>
                    <a href={url}>
                        <img src={thumbnail} alt={name} className="comics__item-img"/>
                        <div className="comics__item-name">{name}</div>
                        <div className="comics__item-price">{price}</div>
                    </a>
                </li>
            )
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const listItems = renderItem(comicses);
    const errorMessage = error ? <ErrorMessage /> : null;
    // спинер показываем когда стоит загрузка и незагрузка новых персонажей
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {spinner}
            {errorMessage}
            {listItems}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}>
                    <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;