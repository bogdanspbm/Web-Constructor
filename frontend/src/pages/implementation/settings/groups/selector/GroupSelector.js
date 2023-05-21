import {Option, Select} from "../../../../../elements/default/Select.js";

export class GroupSelector extends Select {
    createElement(props) {
        super.createElement(props);

        this.setStyle("selector-borderless");

        const noneOption = new Option("None");
        this.append(noneOption);

        Object.entries(document.groupsStructures).forEach(([key, groupStructure]) => {
            const vector = document.groupsStructures[key];
            const option = new Option(vector);
            this.append(option);
        });
    }
}