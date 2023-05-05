import {Option, Select} from "../../../../../elements/default/Select.js";

export class AttributeSelector extends Select {

    constructor(args) {
        super(args);
    }

    createElement() {
        super.createElement();
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        const collection = document.collections[key];

        Object.entries(collection.getAttributes()).forEach(([key, attribute]) => {
            const option = new Option(collection.getName());
            this.append(option);
        });
    }
}