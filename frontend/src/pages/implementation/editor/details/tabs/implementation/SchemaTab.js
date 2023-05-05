import {Tab} from "../../../../../../elements/default/Tabs.js";
import {Div} from "../../../../../../elements/dom/DOM.js";
import {CollectionSelector} from "../../inputs/CollectionSelector.js";

export class SchemaTab extends Tab {
    constructor() {
        super("Schema");
    }

    createElement() {
        super.createElement();
        this.setAttribute("padding", "15px");
    }

    /**
     * @param {WidgetStructure} structure
     */
    setStructure(structure) {
        this.generateEditors(structure);
        return this;
    }

    /**
     * @param {WidgetStructure} structure
     */
    generateEditors(structure) {
        const collectionHeader = new Div().setText("Collection").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const collectionInput = new CollectionSelector(structure);
        this.append(collectionHeader);
        this.append(collectionInput);
    }
}