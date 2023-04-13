import {Tab} from "../../../../elements/default/Tabs.js";
import {Option, Select} from "../../../../elements/default/Select.js";

export class SelectionTab extends Tab {
    constructor() {
        super("Select");
    }

    createElement() {
        super.createElement();
        this.setStyle("header-selection-tab")

        this.hint = new Option("Select Database").setAttribute("display", "none")
        this.optionA = new Option("Option A")
        this.optionB = new Option("Option B")

        this.selector = new Select([this.hint, this.optionA, this.optionB])
        this.append(this.selector)
    }
}