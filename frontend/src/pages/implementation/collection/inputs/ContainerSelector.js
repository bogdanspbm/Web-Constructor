import {Option, Select} from "../../../../elements/default/Select.js";
import {EContainerType} from "../../../../enums/EContainerType.js";

export class ContainerSelector extends Select {
    createElement() {
        super.createElement();

        const singleOption = new Option(EContainerType.SINGLE);
        this.append(singleOption);

        const arrayOption = new Option(EContainerType.ARRAY);
        this.append(arrayOption);

        const setOption = new Option(EContainerType.SET);
        this.append(setOption);

        const mapOption = new Option(EContainerType.MAP);
        this.append(mapOption);
    }
}