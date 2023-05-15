import {EElementType} from "../enums/EElementType.js";
import {ButtonComponent, InputComponent, TextComponent} from "../grid/objects/Component.js";

/**
 * @param {WidgetStructure} parent
 * @param {JSON} json
 */
export function createComponentFromJSON(parent, json) {
    const component = new ComponentStructure(parent, json.type);
    component.buildFromJSON(json);
    return component;
}

export class ComponentStructure {

    #parent;
    #type;
    #name;
    #tooltip;
    #uid;
    #value;
    #position;
    #properties = {};
    #component;
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

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.#type = json.type;
        this.#name = json.name;
        this.#tooltip = json.tooltip;
        this.#value = json.value;
        this.#uid = json.uid;
        this.#size = json.size;
        this.#position = json.position;
        this.#properties = json.properties;
    }

    toJSON() {
        return {
            name: this.#name,
            type: this.#type,
            uid: this.#uid,
            position: this.#position,
            size: this.#size,
            properties: this.#properties,
        }
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
        switch (this.#type.name) {
            case EElementType.BUTTON.name: {
                this.#component = new ButtonComponent();
                break;
            }
            case EElementType.INPUT.name: {
                this.#component = new InputComponent();
                break;
            }
            case EElementType.TEXT.name: {
                this.#component = new TextComponent();
                break;
            }
        }
        this.#component.setParentStructure(this);
        this.#component.setGridSize(this.#size, false);
        this.#component.setOriginalGridSize(this.#size);

        return this.#component;
    }


    /**
     * @param {String} key
     */
    getProperty(key) {
        return this.#properties[key];
    }


    /**
     * @param {String} key
     * @param {String} value
     */
    setProperty(key, value) {
        this.#properties[key] = value;
        this.#component.setProperty(key, value);
        return this;
    }

}