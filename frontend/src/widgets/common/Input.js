import {DOM} from "../../elements/dom/DOM.js";

export class Input extends DOM {

    constructor(structure, field) {
        super(structure, field);
        this.bindStructure(structure, field);
    }

    setOnChangeEvent(event) {
        this.onChangeEvent = event
    }

    bindStructure(structure, field) {
        if (!structure || !field) {
            return;
        }
        const parent = this;

        this.setTag("value", structure[field]);

        this.setOnChangeEvent(() => {
            structure[field] = parent.element.value;
        })
    }

    createElement() {
        this.element = document.createElement("input")
        this.setStyle("input-component")
        this.setAttribute("height", "28px")
        this.bindEvents()
    }

    bindEvents() {
        const parent = this
        this.element.addEventListener("input", function (event) {
            if (typeof parent.onChangeEvent !== "function") {
                return
            }
            parent.onChangeEvent(event)
        })
    }

    /**
     * @param {String} hint
     */
    setHint(hint) {
        this.setTag("placeholder", hint)
    }
}