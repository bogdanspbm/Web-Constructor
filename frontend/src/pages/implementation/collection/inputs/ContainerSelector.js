import {Option, Select} from "../../../../elements/default/Select.js";

export class ContainerSelector extends Select {
    createElement() {
        super.createElement();

        const singleOption = new Option("Single");
        this.append(singleOption);

        const arrayOption = new Option("Array");
        this.append(arrayOption);

        const setOption = new Option("Set");
        this.append(setOption);

        const mapOption = new Option("Map");
        this.append(mapOption);
    }
}