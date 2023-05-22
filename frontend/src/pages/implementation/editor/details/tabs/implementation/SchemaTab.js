import {Tab} from "../../../../../../elements/default/Tabs.js";
import {Div} from "../../../../../../elements/dom/DOM.js";
import {CollectionSelector} from "../../inputs/CollectionSelector.js";
import {GroupSelector} from "../../../../settings/groups/selector/GroupSelector.js";
import {VectorSelector} from "../../../../vector/selector/VectorSelector.js";

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
        const collectionHeader = new Div().setText("Collection").setStyle("small-header").setAttribute("margin-bottom", "5px");
        const collectionInput = new CollectionSelector({structure: widget, field: "collection"});
        this.append(collectionHeader);
        this.append(collectionInput);

        const groupHeader = new Div().setText("Group").setStyle("small-header").setAttribute("margin-bottom", "5px").setAttribute("margin-top", "16px");
        const groupInput = new GroupSelector({structure: widget, field: "group"});
        this.append(groupHeader);
        this.append(groupInput);

        const vectorHeader = new Div().setText("Vector").setStyle("small-header").setAttribute("margin-bottom", "5px").setAttribute("margin-top", "16px");
        const vectorInput = new VectorSelector({structure: widget, field: "vector"});
        this.append(vectorHeader);
        this.append(vectorInput);
    }
}