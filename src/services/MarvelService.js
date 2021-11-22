// Создаём обычный джаваскриптовый класс, поэтому не наследуем и не импортируем компоненты
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=0f63933eef0210b8256f2966cbc48725';

    getResource = async (url) => {

        // В переменной res мы получаем промис
        let res = await fetch(url);

        /** Здесь мы создаём ошибкуб если статус запроса неудачный */
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); // возвращаем промис в формате json
    }

    // метод получения всех персонажей
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    
    // метод получения одного персонажа
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;