import './sources.css';
import { ISourcesStructure } from '../../interfaces/interfaces';

class Sources {
    public draw(data: ISourcesStructure[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                if (sourceClone instanceof DocumentFragment) {
                    const itemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
                    const itemEl: HTMLDivElement | null = sourceClone.querySelector('.source__item');

                    if (itemName) {
                        itemName.textContent = item.name;
                    }

                    if (itemEl) {
                        itemEl.setAttribute('data-source-id', item.id);
                    }
                }

                fragment.append(sourceClone);
            });
        }

        const sources: HTMLDivElement | null = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
