import {Option, Select} from "../../../../../elements/default/Select.js";

export class CollectionSelector extends Select {


    /**
     * @param {WidgetStructure} structure
     */
    createElement(structure) {
        super.createElement();
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        Object.entries(document.collections).forEach(([key, attribute]) => {
            const collection = document.collections[key];
            const option = new Option(collection.getName());
            this.append(option);
        });

        this.setSelectEvent(value => {
            structure.setCollection(document.findCollectionByName(value));
            console.log(structure);
        })


        if (!structure.getCollection()) {
            return;
        }

        this.element.value = structure.getCollection().getName();

    }
}