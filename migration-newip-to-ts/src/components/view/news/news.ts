import './news.css';
import { INewsStructure } from '../../interfaces/interfaces';

class News {
    public draw(data: INewsStructure[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true);

                let newsItem;

                if (newsClone instanceof DocumentFragment) {
                    newsItem = newsClone.querySelector('.news__item');
                }

                if (newsItem instanceof HTMLElement) {
                    if (idx % 2) newsItem.classList.add('alt');
                }

                let photo;
                let author;
                let date;
                let title;
                let source;
                let content;
                let more;

                if (newsClone instanceof DocumentFragment) {
                    photo = newsClone.querySelector('.news__meta-photo');
                    author = newsClone.querySelector('.news__meta-author');
                    date = newsClone.querySelector('.news__meta-date');
                    title = newsClone.querySelector('.news__description-title');
                    source = newsClone.querySelector('.news__description-source');
                    content = newsClone.querySelector('.news__description-content');
                    more = newsClone.querySelector('.news__read-more a');
                }

                if (photo instanceof HTMLElement) {
                    photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                if (author instanceof HTMLElement) {
                    author.textContent = item.author || item.source.name;
                }

                if (date instanceof HTMLElement) {
                    date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                if (title instanceof HTMLElement) {
                    title.textContent = item.title;
                }

                if (source instanceof HTMLElement) {
                    source.textContent = item.source.name;
                }

                if (content instanceof HTMLElement) {
                    content.textContent = item.description;
                }

                if (more instanceof HTMLElement) {
                    more.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            });
        }

        const el = document.querySelector('.news');

        if (el instanceof HTMLElement) {
            el.innerHTML = '';
            el.appendChild(fragment);
        }
    }
}

export default News;
