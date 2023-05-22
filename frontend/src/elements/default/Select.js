import {DOM} from "../dom/DOM.js";
import {getComplexField, setComplexField} from "../../utils/Utils.js";

export class Select extends DOM {

    constructor(props) {
        super(props);
        this.bindChangeEvent(() => {
        });
        this.bindStructure(props.structure, props.field);
    }

    createElement(props) {
        this.element = document.createElement("select");
        this.setStyle("selector")
    }

    bindChangeEvent(event) {
        const parent = this;
        this.element.addEventListener("change", function () {
            if (!event) {
                return;
            }
            const index = parent.getIndexByOption(this.value);
            const value = parent.children[index].getValue();
            event(value);
        });
    }

    bindStructure(structure, field) {
        if (!structure || !field) {
            return;
        }

        let optionName = getComplexField(structure, field);

        if (optionName && optionName.name) {
            optionName = optionName.name;
        }

        this.element.selectedIndex = this.getIndexByOption(optionName);

        this.bindChangeEvent((value) => {
            setComplexField(structure, field, value);
        })
    }

    getIndexByOption(optionName) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.element.textContent === optionName) {
                return i;
            }
        }

        return 0;
    }


    setSelectEvent(event) {
        this.bindChangeEvent(event);
    }
}

export class Option extends DOM {

    #structure

    constructor(structure) {
        super();

        this.#structure = structure;

        if (!structure.name) {
            this.setText(structure);
        } else {
            this.setText(structure.name);
        }
    }

    createElement() {
        this.element = document.createElement("option");
        this.setStyle("option")
    }

    getValue() {
        if (typeof this.#structure.getName === "function") {
            return this.#structure;
        } else if (this.#structure.name) {
            return this.#structure;
        } else {
            return this.element.textContent;
        }
    }
}
