import {Tab} from "../../../../elements/default/Tabs.js";
import {Div} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../common/Input.js";
import {Button} from "../../../../elements/default/Button.js";

export class ConnectionTab extends Tab {
    constructor() {
        super("Connect");
    }

    createElement() {
        super.createElement();
        this.setStyle("header-connection-tab")

        this.nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("margin-bottom", "2px")
        this.nameInput = new Input().setTag("placeholder", "Input Name").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        this.append(this.nameHeader)
        this.append(this.nameInput)

        this.ipHeader = new Div().setText("IP").setStyle("small-header").setAttribute("margin-bottom", "2px")
        this.ipInput = new Input().setTag("placeholder", "Input IP").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        this.append(this.ipHeader)
        this.append(this.ipInput)

        this.lineContainer = new Div().setStyle("container-horizontal").setAttribute("width", "calc(100%)")

        const vertContainerA = new Div().setStyle("container-vertical").setAttribute("width", "calc(50% - 10px)").setAttribute("margin-right", "20px")
        this.loginHeader = new Div().setText("Login").setStyle("small-header").setAttribute("margin-bottom", "6px")
        this.loginInput = new Input().setTag("placeholder", "Input Login").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        vertContainerA.append(this.loginHeader)
        vertContainerA.append(this.loginInput)

        const vertContainerB = new Div().setStyle("container-vertical").setAttribute("width", "calc(50% - 10px)")
        this.portHeader = new Div().setText("Port").setStyle("small-header").setAttribute("margin-bottom", "6px")
        this.portInput = new Input().setTag("placeholder", "Input Port").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        vertContainerB.append(this.portHeader)
        vertContainerB.append(this.portInput)

        this.lineContainer.append(vertContainerA)
        this.lineContainer.append(vertContainerB)
        this.append(this.lineContainer)

        this.passwordHeader = new Div().setText("Password").setStyle("small-header").setAttribute("margin-bottom", "2px")
        this.passwordInput = new Input().setTag("placeholder", "Input Password").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        this.append(this.passwordHeader)
        this.append(this.passwordInput)

        this.buttonSave = new Button().setText("Connect").setAttribute("margin-left", "auto").setStyle("blue-button")
        this.append(this.buttonSave)
    }
}