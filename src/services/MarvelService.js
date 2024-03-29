import {useHttp} from '../hooks/http.hook';

// Создаём обычный джаваскриптовый класс, поэтому не наследуем и не импортируем компоненты
const useMarvelService = () => {
    const { request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=0f63933eef0210b8256f2966cbc48725';
    const _baseOffset = 210;



    // метод получения данных всех персонажей
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }
    
    // метод получения данных одного персонажа
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]); // в _transformCharacter передаём конкретный объект (персонаж)
    }

    // метод формирования объекта с нужными нам данными персонажа, вытягиваем с ответа по гет запросу что нам нужно
    const _transformCharacter = (char) => {
        let descriptionChar = '';
        if (char.description) {
            if (char.description.length > 190) {
                descriptionChar = `${char.description.slice(0, 190)} ...`;
            } else {
                descriptionChar = char.description;
            }
        } else {
            descriptionChar = 'There is no description for this character';
        } 
        return {
            name: char.name,
            id: char.id,
            description: descriptionChar,
            // thumbnail - маленькая картинка, превьюха
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    // запрос комиксов
    const getAllComicses = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics); 
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            url: comics.urls[0].url,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            name: comics.series.name,
            price: comics.prices[0].price,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {
        process,
        setProcess, 
        clearError, 
        getAllCharacters, 
        getCharacter, 
        getAllComicses, 
        getComics
    }
}

export default useMarvelService;