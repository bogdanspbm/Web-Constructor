import {Transformable} from "../interfaces/Transformable.js";
import {Div} from "../../elements/dom/DOM.js";

export class Component extends Transformable {
    #parentStructure

    /**
     * @param {ComponentStructure} structure
     */
    setParentStructure(structure) {
        this.#parentStructure = structure;
    }

    getParentStructure() {
        return this.#parentStructure;
    }
}

export class ButtonComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("width", "calc(100% - 10px)")
        this.setAttribute("height", "calc(100% - 10px)")
        this.setAttribute("margin-bottom", "6px")
        this.setAttribute("margin-top", "5px")
        this.setAttribute("margin-left", "5px")
        this.setAttribute("margin-right", "5px")
        this.setStyle("button-component")

        this.text = new Div().setStyle("button-component-text")

        this.append(this.text)
    }

    setText(text) {
        this.text.setText(text)
        return this;
    }
}

export class InputComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("width", "calc(100% - 12px)")
        this.setAttribute("height", "calc(100% - 12px)")
        this.setAttribute("margin-bottom", "7px")
        this.setAttribute("margin-top", "5px")
        this.setAttribute("margin-left", "6px")
        this.setAttribute("margin-right", "6px")
        this.setStyle("input-component")
    }
}

export class TextComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("")
        this.setAttribute("width", "calc(100% - 10px)")
        this.setAttribute("height", "calc(100% - 10px)")
        this.setAttribute("margin-bottom", "6px")
        this.setAttribute("margin-top", "5px")
        this.setAttribute("margin-left", "9px")
        this.setAttribute("margin-right", "5px")
        this.setText("Text")
        this.setStyle("text-component")
    }
}
