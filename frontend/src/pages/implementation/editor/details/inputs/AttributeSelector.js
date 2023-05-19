import {Option, Select} from "../../../../../elements/default/Select.js";

export class AttributeSelector extends Select {

    constructor(structure, field, widget) {
        super(structure, field, widget);
    }

    /**
     * @param {WidgetStructure} widget
     * @param {string} field
     * @param {ComponentStructure} structure
     */
    createElement(structure, field, widget) {
        super.createElement();
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        if (!widget) {
            return;
        }

        const collection = widget.getCollection();

        if (!collection) {
            return;
        }

        Object.entries(collection.getAttributes()).forEach(([key, attribute]) => {
            const option = new Option(attribute);
            this.append(option);
        });
    }
}