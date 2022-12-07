import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4654b2068797429a88561ee29a5a890e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
