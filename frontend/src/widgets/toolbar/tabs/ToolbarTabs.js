import {DOM} from "../../../elements/dom/DOM.js";
import {Tabs} from "../../../elements/default/Tabs.js";
import {CollectionTab} from "./implementation/CollectionTab.js";
import {DesignTab} from "./implementation/DesignTab.js";
import {AddToolButton} from "../inputs/AddToolButton.js";
import {Page} from "../../../objects/Page.js";

export class ToolbarTabs extends DOM {
    createElement() {
        super.createElement()

        this.designTab = new DesignTab()
        this.collectionTab = new CollectionTab()

        this.tabs = new Tabs([this.designTab, this.collectionTab])
        this.setStyle("toolbar-tabs")
        this.append(this.tabs)

        this.addButton = new AddToolButton("./../resources/icons/ic_add_24x24.svg").setAttribute("height", "24px").setAttribute("width", "24px").setAttribute("margin-left", "auto")
        this.addButton.addClickEvent(action => {
            const page = new Page()
            document.createPage(page)
        })

        this.tabs.tabs.append(this.addButton)
    }
}