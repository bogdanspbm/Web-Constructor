import {DOM, Input, Label} from "../dom/DOM.js";

export class Tabs extends DOM {

    constructor(elements) {
        super();

        for (let i = 0; i < elements.length; i++) {
            const element = elements[0]
            this.append(element.getTabButton(i))
            this.append(element.getTabLabel(i))
            this.append(element)
        }
    }

    createElement() {
        super.createElement();
        this.element.setStyle("tabs")
    }

}

export class Tab extends DOM {
    constructor(name) {
        super();
        this.tabName = name
    }

    createElement() {
        super.createElement();
    }

    getTabButton(index) {
        let button = new Input()
        button.setAttribute("name", "tab-btn")
        button.setAttribute("id", "tab-btn-" + index)
        button.setAttribute("value", "")
        return button
    }

    getTabLabel(index) {
        let label = new Label()
        label.setAttribute("name", "tab-btn")
        label.setAttribute("for", "tab-btn-" + index)
        label.setText(this.tabName)
        return label
    }
}