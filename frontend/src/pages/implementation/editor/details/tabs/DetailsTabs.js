import {DOM} from "../../../../../elements/dom/DOM.js";
import {Tabs} from "../../../../../elements/default/Tabs.js";
import {SchemaTab} from "./implementation/SchemaTab.js";
import {DetailsTab} from "./implementation/DetailsTab.js";

export class DetailsTabs extends DOM {

    createElement(props) {
        super.createElement(props)

        this.detailsTab = new DetailsTab({widget: props.widget});
        this.schemaTab = new SchemaTab({widget: props.widget});

        this.tabs = new Tabs({elements: [this.detailsTab, this.schemaTab]});
        this.setStyle("details-tabs")
        this.append(this.tabs)
    }
}