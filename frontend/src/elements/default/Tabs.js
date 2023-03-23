import {Div, DOM} from "../dom/DOM.js";
import {Button} from "./Button.js";

export class Tabs extends DOM {

    constructor(elements) {
        super();

        if (elements === undefined) {
            return
        }

        const parent = this

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i]
            this.tabs.append(element.getTabButton())
            this.content.append(element)
        }
    }

    hideContent() {
        this.content.children.forEach(child => {
            child.setAttribute("display", "none")
        })
    }

    createElement() {
        super.createElement();
        this.setStyle("tabs-container")
        this.tabs = new Div().setStyle("tabs")
        this.append(this.tabs)
        this.content = new Div().setStyle("tab-content-container")
        this.append(this.content)
    }

}

export class Tab extends DOM {
    constructor(name) {
        super();
        this.tabName = name
    }

    createElement() {
        super.createElement();
        this.setStyle("tab-content")
        this.setAttribute("display", "none")
    }

    getTabButton() {
        const parent = this
        let button = new Button().setText(this.tabName).setStyle("tab")
        button.addClickEvent(action => {
            parent.parent.children.forEach(tab => tab.setAttribute("display", "none"))
            parent.setAttribute("display", "block")
        })
        return button
    }

}