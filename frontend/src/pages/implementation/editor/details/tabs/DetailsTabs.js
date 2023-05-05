import {DOM} from "../../../../../elements/dom/DOM.js";
import {Tabs} from "../../../../../elements/default/Tabs.js";
import {SchemaTab} from "./implementation/SchemaTab.js";
import {DetailsTab} from "./implementation/DetailsTab.js";

export class DetailsTabs extends DOM {
    /**
     * @param {WidgetStructure} structure
     */
    createElement(structure) {
        super.createElement()

        this.detailsTab = new DetailsTab();
        this.schemaTab = new SchemaTab().setStructure(structure);

        this.tabs = new Tabs([this.detailsTab, this.schemaTab]);
        this.setStyle("details-tabs")
        this.append(this.tabs)
    }
}