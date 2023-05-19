import {DOM} from "../dom/DOM.js";
import {getComplexField, setComplexField} from "../../utils/Utils.js";

export class Input extends DOM {

    constructor(props) {
        super(props);

        if (!props) {
            props = {};
        }

        this.bindStructure(props.structure, props.field);
    }

    setOnChangeEvent(event) {
        this.onChangeEvent = event
    }

    bindStructure(structure, field) {
        if (!structure || !field) {
            return;
        }
        const parent = this;

        this.setTag("value", getComplexField(structure, field));

        this.setOnChangeEvent(() => {
            setComplexField(structure, field, parent.element.value);
        })
    }

    createElement(props) {
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