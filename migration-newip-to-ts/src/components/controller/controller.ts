import AppLoader from './appLoader';
import { NewsData, SourcesData } from '../view/appView';

export enum Endpoints {
    everything = 'everything',
    sources = 'sources',
}

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesData) => void): void {
        super.getResp<SourcesData>(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: NewsData) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');

                    if (newsContainer instanceof HTMLElement) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            if (typeof sourceId === 'string') {
                                newsContainer.setAttribute('data-source', sourceId);
                                super.getResp<NewsData>(
                                    {
                                        endpoint: Endpoints.everything,
                                        options: {
                                            sources: sourceId,
                                        },
                                    },
                                    callback
                                );
                            }
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
