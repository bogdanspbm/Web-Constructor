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
            element.setParentTabs(parent)
            this.tabs.append(element.getTabButton())
            this.content.append(element)
        }

        if (elements.length > 0) {
            this.setSelectedTab(elements[0])
            elements[0].setSelect()
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

    setSelectedTab(tab) {
        this.selectedTab = tab
    }

    getSelectedTab() {
        return this.selectedTab
    }

}

export class Tab extends DOM {
    constructor(name) {
        super();
        this.tabName = name
    }

    getName() {
        return this.tabName
    }


    setParentTabs(tabs) {
        this.parentTabs = tabs
    }

    createElement() {
        super.createElement();
        this.setStyle("tab-content")
        this.setAttribute("display", "none")
    }

    getTabButton() {
        const parent = this
        this.button = new Button().setText(this.tabName).setStyle("tab")
        this.button.setClickEvent(action => {
            parent.parent.children.forEach(tab => tab.setUnselect())
            parent.setSelect()
        })
        return this.button
    }

    setUnselect() {
        this.setAttribute("display", "none")
        this.button.setStyle("tab")
    }

    setSelect() {
        this.setAttribute("display", "block")
        this.button.setStyle("tab-selected")

        if (this.parentTabs === undefined) {
            return
        }
        this.parentTabs.setSelectedTab(this)
    }
}