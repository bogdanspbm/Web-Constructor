import {Option, Select} from "../../../../elements/default/Select.js";

export class TypeSelector extends Select {
    createElement() {
        super.createElement();

        const intOption = new Option("Integer");
        this.append(intOption);

        const boolOption = new Option("Boolean");
        this.append(boolOption);
    }
}