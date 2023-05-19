import {Tab} from "../../../../../../elements/default/Tabs.js";
import {Div} from "../../../../../../elements/dom/DOM.js";
import {CollectionSelector} from "../../inputs/CollectionSelector.js";

export class SchemaTab extends Tab {
    constructor(widget) {
        super("Schema", widget);
    }

    /**
     * @param {String} name
     * @param {WidgetStructure} widget
     */
    createElement(name, widget) {
        super.createElement(name, widget);
        this.generateEditors(widget);
        this.setAttribute("padding", "15px");
    }

    /**
     * @param {WidgetStructure} widget
     */
    generateEditors(widget) {
        const collectionHeader = new Div().setText("Collection").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const collectionInput = new CollectionSelector(widget, "collection");
        this.append(collectionHeader);
        this.append(collectionInput);
    }
}