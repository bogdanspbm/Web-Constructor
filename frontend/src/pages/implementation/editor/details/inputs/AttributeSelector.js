import {Option, Select} from "../../../../../elements/default/Select.js";

export class AttributeSelector extends Select {

    constructor(props) {
        super(props);
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        if (!props.widget) {
            return;
        }

        const collection = props.widget.getCollection();

        if (!collection) {
            return;
        }

        Object.entries(collection.getAttributes()).forEach(([key, attribute]) => {
            const option = new Option(attribute);
            this.append(option);
        });
    }
}