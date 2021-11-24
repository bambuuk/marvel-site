import { Component } from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        chars: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChars();
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    charsLoaded = (chars) => {
        this.setState({
            chars: chars,
            loading: false
        })
    }

    updateChars = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.charsLoaded)
            .catch(this.onError)
    }

    render() {
        const { chars, loading, error } = this.state;
        const elem = chars.map(item => {
            const { thumbnail, name, id } = item;

            return (
                <ListChars
                    src={thumbnail}
                    name={name}
                    key={id}
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
                    <button className="button button__main button__long">
                        <div className="inner">load more</div>
                    </button>
                </div>
            )
        }
    }
}

const ListChars = ({ src, name }) => {
    let style = { objectFit: 'cover' };
    if (src.includes('image_not_available')) {
        style = { objectFit: 'fill' }
    }
    return (
        <li className="char__item">
            <img src={src} alt={name} style={style} />
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;