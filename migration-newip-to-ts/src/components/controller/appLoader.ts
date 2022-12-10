import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '4654b2068797429a88561ee29a5a890e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
