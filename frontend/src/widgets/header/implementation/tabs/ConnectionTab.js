import {Tab} from "../../../../elements/default/Tabs.js";
import {Select} from "../../../../elements/default/Select.js";
import {Div} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../common/Input.js";

export class ConnectionTab extends Tab {
    constructor() {
        super("Connect");
    }

    createElement() {
        super.createElement();
        this.setStyle("header-connection-tab")

        this.nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("padding-bottom", "2px")
        this.nameInput = new Input().setTag("placeholder", "Input Name").clearAttribute("height").setStyle("input-bar")

        this.append(this.nameHeader)
        this.append(this.nameInput)
    }
}