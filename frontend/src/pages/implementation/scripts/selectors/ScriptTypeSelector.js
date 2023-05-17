import {Option, Select} from "../../../../elements/default/Select.js";

export class ScriptTypeSelector extends Select {
    createElement() {
        super.createElement();
        this.setStyle("selector-borderless");

        const functionsLibrary = new Option("Functions Library");
        this.append(functionsLibrary);

        const collectionAdapterScript = new Option("Collection Adapter");
        this.append(collectionAdapterScript);
    }
}