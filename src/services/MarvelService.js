// Создаём обычный джаваскриптовый класс, поэтому не наследуем и не импортируем компоненты
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=0f63933eef0210b8256f2966cbc48725';

    getResource = async (url) => {

        // В переменной res мы получаем промис
        let res = await fetch(url);

        /** Здесь мы создаём ошибку если статус запроса неудачный */
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); // возвращаем промис в формате json
    }

    // метод получения данных всех персонажей
    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }
    
    // метод получения данных одного персонажа
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]); // в _transformCharacter передаём конкретный объект (персонаж)
    }

    // метод формирования объекта с нужными нам данными персонажа, вытягиваем с ответа по гет запросу что нам нужно
    _transformCharacter = (char) => {
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
            description: descriptionChar,
            // thumbnail - маленькая картинка, превьюха
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;