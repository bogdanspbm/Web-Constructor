import {Option, Select} from "../../../../elements/default/Select.js";
import {EAttributeType} from "../../../../enums/EAttributeType.js";

export class TypeSelector extends Select {
    createElement() {
        super.createElement();

        const intOption = new Option(EAttributeType.INTEGER);
        this.append(intOption);

        const stringOption = new Option(EAttributeType.STRING);
        this.append(stringOption);

        const floatOption = new Option(EAttributeType.FLOAT);
        this.append(floatOption);

        const boolOption = new Option(EAttributeType.BOOLEAN);
        this.append(boolOption);

        const imageOption = new Option(EAttributeType.IMAGE);
        this.append(imageOption);
    }
}