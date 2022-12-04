import './sources.css';
import { ISourcesStructure } from '../../interfaces/interfaces';

class Sources {
    public draw(data: ISourcesStructure[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                let itemName;
                let itemEl;
                if (sourceClone instanceof DocumentFragment) {
                    itemName = sourceClone.querySelector('.source__item-name');
                    itemEl = sourceClone.querySelector('.source__item');
                }

                if (itemName instanceof HTMLElement) {
                    itemName.textContent = item.name;
                }

                if (itemEl instanceof HTMLElement) {
                    itemEl.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });
        }

        const sources = document.querySelector('.sources');
        if (sources instanceof HTMLElement) {
            sources.append(fragment);
        }
    }
}

export default Sources;
