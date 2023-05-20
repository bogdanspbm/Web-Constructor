import {Transformable} from "../interfaces/Transformable.js";
import {Div} from "../../elements/dom/DOM.js";

export class Component extends Transformable {
    #parentStructure

    /**
     * @param {ComponentStructure} structure
     */
    setParentStructure(structure) {
        this.#parentStructure = structure;
        this.syncAttributes();
        return this;
    }

    getParentStructure() {
        return this.#parentStructure;
    }

    syncAttributes() {
        if (!this.#parentStructure) {
            return;
        }

        this.syncTextAttribute();
    }

    syncTextAttribute() {
        const textAttr = this.#parentStructure.getProperty("text")
        if (!textAttr) {
            return;
        }
        this.setText(textAttr);
    }

    setGridSize(size, replicate) {
        super.setGridSize(size, replicate);

        if (replicate) {
            this.#parentStructure.setSize(size);
        }

        return this;
    }

    /**
     * @param {String} key
     * @param {String} value
     */
    setProperty(key, value) {

        switch (key) {
            case "text": {
                this.setText(value);
                break;
            }
        }

        return this;
    }
}

export class ButtonComponent extends Component {
    constructor(props) {
        super(props);
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
    constructor(props) {
        super(props);
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
    constructor(props) {
        super(props);
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
