import {Option, Select} from "../../../../elements/default/Select.js";

export class ScriptTypeSelector extends Select {
    createElement() {
        super.createElement();
        this.setStyle("selector-borderless");

        const emptyScript = new Option("Empty");
        this.append(emptyScript);

        const collectionAdapterScript = new Option("Collection Adapter");
        this.append(collectionAdapterScript);
    }
}