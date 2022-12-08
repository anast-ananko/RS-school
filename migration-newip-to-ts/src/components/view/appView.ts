import News from './news/news';
import Sources from './sources/sources';
import Categories from './categories/categories';
import { INews } from '../interfaces/interfaces';

export type NewsData = Pick<INews, 'status' | 'totalResults' | 'articles'>;
export type SourcesData = Pick<INews, 'status' | 'sources'>;

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;
    private readonly categories: Categories;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.categories = new Categories();
    }

    public drawNews(data: NewsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawCategories(): void {
        this.categories.draw();
    }
}

export default AppView;
