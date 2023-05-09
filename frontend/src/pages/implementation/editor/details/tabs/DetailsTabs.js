import {DOM} from "../../../../../elements/dom/DOM.js";
import {Tabs} from "../../../../../elements/default/Tabs.js";
import {SchemaTab} from "./implementation/SchemaTab.js";
import {DetailsTab} from "./implementation/DetailsTab.js";

export class DetailsTabs extends DOM {
    /**
     * @param {WidgetStructure} widget
     */
    createElement(widget) {
        super.createElement(widget)

        this.detailsTab = new DetailsTab(widget);
        this.schemaTab = new SchemaTab(widget);

        this.tabs = new Tabs([this.detailsTab, this.schemaTab]);
        this.setStyle("details-tabs")
        this.append(this.tabs)
    }
}