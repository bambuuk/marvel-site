import { Component } from 'react';
import PropTypes from 'prop-types';
import './charList.scss';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        chars: [],
        loading: true,
        error: false,
        newItemLoading: false, // необходим для блокироки кнопки добавления новых персонажей
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newChars) => {
        let ended = false;
        if (newChars.length < 9) {
            ended = true;
        }

        this.setState(({chars, offset}) => ({
                // здесь мы объеденили массив текущих данных со стейта с новыми данными от запроса на сервер
                chars: [...chars, ...newChars], 
                loading: false,
                newItemLoading: false,
                offset: offset + 9,
                charEnded: ended
        }))
    }

    render() {
        const { chars, loading, error, offset, newItemLoading, charEnded } = this.state;
        const elem = chars.map(item => {
            const { thumbnail, name, id } = item;

            return (
                <ListChars
                    src={thumbnail}
                    name={name}
                    key={id}
                    onCharSelected={() => {this.props.onCharSelected(id)}}
                />
            );
        });

        if (loading) {
            return <Spinner />
        } else if (error) {
            return <ErrorMessage />
        } else {
            return (
                <div className="char__list">
                    <ul className="char__grid">
                        {elem}
                    </ul>
                    <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}>
                        <div className="inner">load more</div>
                    </button>
                </div>
            )
        }
    }
}

const ListChars = ({ src, name, onCharSelected }) => {
    let style = { objectFit: 'cover' };
    if (src.includes('image_not_available')) {
        style = { objectFit: 'fill' }
    }
    return (
        <li className="char__item" onClick={onCharSelected}>
            <img src={src} alt={name} style={style} />
            <div className="char__name">{name}</div>
        </li>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;