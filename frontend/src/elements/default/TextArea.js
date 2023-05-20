import {DOM} from "../dom/DOM.js";

export class TextArea extends DOM {

    constructor(props) {
        super(props);

        if (!props) {
            return;
        }

        this.bindStructure(props.structure, props.field);
    }

    setOnChangeEvent(event) {
        this.onChangeEvent = event
    }

    createElement(props) {
        this.element = document.createElement("textarea");
        this.bindEvents();
    }

    bindStructure(structure, field) {
        if (!structure || !field) {
            return;
        }
        const parent = this;

        parent.element.value = structure[field];

        this.setOnChangeEvent(() => {
            structure[field] = parent.element.value;
        })
    }

    bindEvents() {
        const parent = this
        this.element.addEventListener("input", function (event) {
            if (typeof parent.onChangeEvent !== "function") {
                return
            }
            parent.onChangeEvent(event);
        })
    }

    /**
     * @param {String} hint
     */
    setHint(hint) {
        this.setTag("placeholder", hint);
    }
}
