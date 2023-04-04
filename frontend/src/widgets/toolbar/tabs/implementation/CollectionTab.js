import {Tab} from "../../../../elements/default/Tabs.js";
import {Collections} from "../../collections/Collections.js";

export class CollectionTab extends Tab {
    constructor() {
        super("Collections");
    }

    createElement() {
        super.createElement();

        this.collections = new Collections()
        this.append(this.collections)
    }
}