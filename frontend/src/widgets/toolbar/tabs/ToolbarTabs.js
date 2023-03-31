import {DOM} from "../../../elements/dom/DOM.js";
import {Tab, Tabs} from "../../../elements/default/Tabs.js";
import {CollectionTab} from "./implementation/CollectionTab.js";
import {DesignTab} from "./implementation/DesignTab.js";

export class ToolbarTabs extends DOM {
    createElement() {
        super.createElement()

        this.designTab = new DesignTab()
        this.collectionTab = new CollectionTab()

        this.tabs = new Tabs([this.designTab, this.collectionTab])
        this.setStyle("toolbar-tabs")
        this.append(this.tabs)
    }
}