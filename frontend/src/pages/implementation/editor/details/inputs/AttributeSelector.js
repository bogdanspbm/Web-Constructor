import {Option, Select} from "../../../../../elements/default/Select.js";

export class AttributeSelector extends Select {


    /**
     * @param {WidgetStructure} widget
     * @param {ComponentStructure} structure
     */
    createElement(structure, widget) {
        super.createElement();
        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);


        const collection = widget.getCollection();

        if (!collection) {
            return;
        }

        Object.entries(collection.getAttributes()).forEach(([key, attribute]) => {
            const option = new Option(attribute.getName());
            this.append(option);
        });

        this.setSelectEvent(value => {
            structure.setProperty("attribute", value);
        })


        if (!structure.getProperty("attribute")) {
            return;
        }

        this.element.value = structure.getProperty("attribute");
    }
}