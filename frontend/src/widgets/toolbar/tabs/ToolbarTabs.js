import {DOM} from "../../../elements/dom/DOM.js";
import {Tabs} from "../../../elements/default/Tabs.js";
import {CollectionTab} from "./implementation/CollectionTab.js";
import {DesignTab} from "./implementation/DesignTab.js";
import {AddToolButton} from "../inputs/AddToolButton.js";
import {EditorPageStructure} from "../../../objects/EditorPageStructure.js";
import {CollectionStructure} from "../../../objects/CollectionStructure.js";

export class ToolbarTabs extends DOM {
    createElement() {
        super.createElement()

        const parent = this

        this.designTab = new DesignTab()
        this.collectionTab = new CollectionTab()

        this.tabs = new Tabs([this.designTab, this.collectionTab])
        this.setStyle("toolbar-tabs")
        this.append(this.tabs)

        this.addButton = new AddToolButton("./../resources/icons/ic_add_24x24.svg").setAttribute("height", "24px")
        this.addButton.setAttribute("width", "24px").setAttribute("margin-left", "auto")
        this.addButton.setAttribute("margin-right", "8px")
        this.addButton.setClickEvent(action => {
            if (parent.tabs.getSelectedTab().getName() === "Collections") {
                const collection = new CollectionStructure()
                document.createCollection(collection)
            } else {
                const page = new EditorPageStructure()
                document.createPage(page)
            }
        })

        this.tabs.tabs.append(this.addButton)
    }
}