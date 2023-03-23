import {Tabs} from "../../../elements/default/Tabs.js";

export class DatabaseTabs extends Tabs {
    createElement() {
        super.createElement();
        console.log(this.element)
        this.setStyle("database-tabs")
    }
}