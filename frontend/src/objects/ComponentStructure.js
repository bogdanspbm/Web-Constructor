import {EElementType} from "../enums/EElementType.js";
import {ButtonComponent, InputComponent, TextComponent} from "../grid/objects/Component.js";

export class ComponentStructure {

    #parent;
    #type;
    #name;
    #tooltip;
    #uid;
    #value;
    #position;
    #size = {x: 1, y: 1};


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

    getPosition() {
        return this.#position;
    }

    getSize() {
        this.#size;
    }

    setPosition(position) {
        this.#position = position;
    }

    setSize(size) {
        this.#size = size;
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
        var element;
        switch (this.#type) {
            case EElementType.BUTTON: {
                element = new ButtonComponent();
                break;
            }
            case EElementType.INPUT: {
                element = new InputComponent();
                break;
            }
            case EElementType.TEXT: {
                element = new TextComponent();
                break;
            }
        }
        element.setParentStructure(this);
        element.setGridSize(this.#size, false);
        element.setOriginalGridSize(this.#size);
        return element;
    }

}