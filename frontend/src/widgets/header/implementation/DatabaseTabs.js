import {Tab, Tabs} from "../../../elements/default/Tabs.js";
import {DOM} from "../../../elements/dom/DOM.js";
import {SelectionTab} from "./tabs/SelectionTab.js";

export class DatabaseTabs extends DOM {

    createElement() {
        super.createElement()

        this.selectTab = new SelectionTab()
        this.createTab = new Tab("Create").setText("Back").setAttribute("height", "600px")
        this.connectTab = new Tab("Connect").setText("Asdasd").setAttribute("height", "150px")

        this.tabs = new Tabs([this.selectTab, this.createTab, this.connectTab])
        this.setStyle("database-tabs")
        this.append(this.tabs)
    }
}