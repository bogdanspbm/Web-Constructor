import {Option, Select} from "../../../../../elements/default/Select.js";

export class CollectionSelector extends Select {

    createElement(props) {
        super.createElement(props);
        this.setStyle("selector-borderless");

        console.log(props);

        const noneOption = new Option("None");
        this.append(noneOption);

        Object.entries(document.collections).forEach(([key, attribute]) => {
            const collection = document.collections[key];
            const option = new Option(collection);
            this.append(option);
        });
    }
}