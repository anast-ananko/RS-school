import './categories.css';

class Categories {
    public draw(): void {
        const fragment = document.createDocumentFragment();
        const categoryItemTemp = document.querySelector('#categoryItemTemp');
        const cat: string[] = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

        if (categoryItemTemp instanceof HTMLTemplateElement) {
            cat.forEach((item) => {
                const categoryClone = categoryItemTemp.content.cloneNode(true);

                if (categoryClone instanceof DocumentFragment) {
                    const itemName: HTMLSpanElement | null = categoryClone.querySelector('.category__item-name');
                    const itemEl: HTMLDivElement | null = categoryClone.querySelector('.category__item');

                    if (itemName) {
                        itemName.textContent = item;
                    }

                    if (itemEl) {
                        itemEl.setAttribute('data-category-id', item);
                    }
                }

                fragment.append(categoryClone);
            });
        }

        const categories: HTMLDivElement | null = document.querySelector('.categories');
        if (categories) {
            categories.append(fragment);
        }
    }
}

export default Categories;
