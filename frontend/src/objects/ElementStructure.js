import {EElementType} from "../enums/EElementType.js";
import {ButtonComponent, InputComponent, TextComponent} from "../grid/objects/Component.js";

export class ElementStructure {

    #parent;
    #type;
    #name;
    #tooltip;
    #uid;
    #value;

    /**
     * @param {WidgetStructure} parent
     * @param {EElementType} type
     */
    constructor(parent, type) {
        this.#parent = parent;
        this.#type = type;
        this.#name = type.name;
        this.#tooltip = "";
        this.#value = "";
        this.#uid = Math.random().toString().replace("0.", "");
    }

    getType() {
        return this.#type;
    }

    getName() {
        return this.#name;
    }

    getTooltip() {
        return this.#tooltip;
    }

    getUID() {
        return this.#uid;
    }

    generateElement() {
        switch (this.#type) {
            case EElementType.BUTTON: {
                return new ButtonComponent();
            }
            case EElementType.INPUT: {
                return new InputComponent();
            }
            case EElementType.TEXT: {
                return new TextComponent();
            }
        }
        return new TextComponent();
    }

}