import {Tab} from "../../../../../../elements/default/Tabs.js";
import {Div} from "../../../../../../elements/dom/DOM.js";
import {CollectionSelector} from "../../inputs/CollectionSelector.js";

export class SchemaTab extends Tab {
    constructor(props) {
        super({name: "Schema", widget: props.widget});
    }

    createElement(props) {
        super.createElement(props);
        this.generateEditors(props.widget);
        this.setAttribute("padding", "15px");
    }

    /**
     * @param {WidgetStructure} widget
     */
    generateEditors(widget) {
        const collectionHeader = new Div().setText("Collection").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const collectionInput = new CollectionSelector({structure: widget, field: "collection"});
        this.append(collectionHeader);
        this.append(collectionInput);
    }
}