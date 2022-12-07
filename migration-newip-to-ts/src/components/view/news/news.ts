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
                if (newsClone instanceof DocumentFragment) {
                    if (idx % 2) {
                        const newsItem: HTMLDivElement | null = newsClone.querySelector('.news__item');
                        if (newsItem) {
                            newsItem.classList.add('alt');
                        }
                    }

                    const photo: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
                    if (photo) {
                        photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                    }

                    const author: HTMLLIElement | null = newsClone.querySelector('.news__meta-author');
                    if (author) {
                        author.textContent = item.author || item.source.name;
                    }

                    const date: HTMLLIElement | null = newsClone.querySelector('.news__meta-date');
                    if (date) {
                        date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    }

                    const title: HTMLHeadingElement | null = newsClone.querySelector('.news__description-title');
                    if (title) {
                        title.textContent = item.title;
                    }

                    const source: HTMLHeadingElement | null = newsClone.querySelector('.news__description-source');
                    if (source) {
                        source.textContent = item.source.name;
                    }

                    const content: HTMLParagraphElement | null = newsClone.querySelector('.news__description-content');
                    if (content) {
                        content.textContent = item.description;
                    }

                    const more: HTMLAnchorElement | null = newsClone.querySelector('.news__read-more a');
                    if (more) {
                        more.setAttribute('href', item.url);
                    }
                }

                fragment.append(newsClone);
            });
        }

        const el: HTMLDivElement | null = document.querySelector('.news');
        if (el) {
            el.innerHTML = '';
            el.appendChild(fragment);
        }
    }
}

export default News;
