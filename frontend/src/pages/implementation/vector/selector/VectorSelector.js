import {Option, Select} from "../../../../elements/default/Select.js";

export class VectorSelector extends Select {

    createElement(props) {
        super.createElement(props);

        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        Object.entries(document.vectorsStructures).forEach(([key, vectorStructure]) => {
            const vector = document.vectorsStructures[key];
            const option = new Option(vector);
            this.append(option);
        });
    }
}