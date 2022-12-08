import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const buttonsSources: HTMLDivElement | null = document.querySelector('.sources');
        if (buttonsSources) {
            buttonsSources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data))
            );
            this.controller.getSources((data) => this.view.drawSources(data));
        }

        this.view.drawCategories();
        const buttonsCategories: HTMLDivElement | null = document.querySelector('.categories');
        if (buttonsCategories) {
            buttonsCategories.addEventListener('click', (e) =>
                this.controller.getNewsByCategories(e, (data) => this.view.drawNews(data))
            );
        }
    }
}

export default App;
