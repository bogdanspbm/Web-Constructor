import {Tab} from "../../../../elements/default/Tabs.js";
import {Select, Option} from "../../../../elements/default/Select.js";

export class SelectionTab extends Tab {
    constructor() {
        super("Select");
    }

    createElement() {
        super.createElement();
        this.setStyle("header-selection-tab")

        this.optionA = new Option("Option A")
        this.optionB = new Option("Option B")

        this.selector = new Select([this.optionA, this.optionB])
        this.append(this.selector)
    }
}