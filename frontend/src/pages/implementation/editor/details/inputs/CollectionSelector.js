import {Option, Select} from "../../../../../elements/default/Select.js";

export class CollectionSelector extends Select {

    constructor(args) {
        super(args);
    }

    createElement() {
        super.createElement();
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        Object.entries(document.collections).forEach(([key, attribute]) => {
            const collection = document.collections[key];
            const option = new Option(collection.getName());
            this.append(option);
        });
    }
}