import {Tab} from "../../../../elements/default/Tabs.js";
import {ControlsTool} from "../../inputs/implementations/ControlsTool.js";
import {Pages} from "../../pages/Pages.js";

export class DesignTab extends Tab {
    constructor() {
        super("Design");
    }

    createElement() {
        super.createElement();

        this.pages = new Pages()
        this.append(this.pages)

        this.inputsTool = new ControlsTool();
        this.append(this.inputsTool);
    }
}