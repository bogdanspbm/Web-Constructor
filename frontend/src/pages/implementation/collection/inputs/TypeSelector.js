import {Option, Select} from "../../../../elements/default/Select.js";

export class TypeSelector extends Select {
    createElement() {
        super.createElement();

        const intOption = new Option("Integer");
        this.append(intOption);

        const stringOption = new Option("String");
        this.append(stringOption);

        const floatOption = new Option("Float");
        this.append(floatOption);

        const boolOption = new Option("Boolean");
        this.append(boolOption);

        const imageOption = new Option("Image");
        this.append(imageOption);
    }
}