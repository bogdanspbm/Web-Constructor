import {attributeFromMap} from "../../utils/Utils.js";

export class DOM {
    element;

    type = "dom"

    id = document.getID()

    childLimit = -1

    children = []
    styles = {};

    parent = undefined

    savedText = ""

    /**
     * @param {DOM[]} elements
     */
    constructor(elements) {
        this.createElement(elements);

        if (!elements) {
            return;
        }

        if (Object.prototype.toString.call(elements) !== '[object Array]') {
            return;
        }

        elements.forEach((element) => this.append(element));
    }

    createElement() {
        this.element = document.createElement("div");
    }

    /**
     * @param {string} id
     */
    setID(id) {
        this.element.setAttribute("id", id);

        return this;
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {string} element
     */
    setAttribute(key, value, element) {
        this.styles[key] = value;

        if (!element) {
            element = "element";
        }

        this[element].setAttribute("style", attributeFromMap(this.styles));
        return this;
    }

    /**
     * @param {string} key
     * @param {string} element
     */
    removeAttribute(key, element) {
        delete this.styles[key];

        if (!element) {
            element = "element";
        }

        this[element].setAttribute("style", attributeFromMap(this.styles));
    }

    clearAttribute(key, value, element) {
        this.styles[key] = undefined;

        if (!element) {
            element = "element";
        }

        this[element].setAttribute("style", attributeFromMap(this.styles));
        return this;
    }

    setTag(key, value, element) {

        if (!element) {
            element = "element";
        }

        this[element].setAttribute(key, value);
        return this;
    }

    /**
     * @param {string} text
     */
    setText(text) {
        this.savedText = text
        this.element.textContent = text;
        return this;
    }

    /**
     * @param {string} style
     * @param {string} key
     */
    setStyle(style, key) {
        if (!key) {
            key = "element";
        }
        this[key].setAttribute("class", style);
        return this;
    }

    /**
     * @returns {HTMLElementTagNameMap}
     */
    getElementToAppend() {
        return this.element
    }

    /**
     * @returns {boolean}
     */
    canAppend() {
        return !(this.children.length >= this.childLimit && this.childLimit != -1)
    }

    /**
     * @param {DOM} parent
     * @returns {DOM}
     */
    setParent(parent) {
        this.removeParent()
        this.parent = parent
        return this
    }

    removeParent() {
        if (this.parent === undefined) {
            return this
        }

        if (!this.parent.children.includes(this)) {
            this.parent = undefined
            return this
        }

        this.parent.getElementToAppend().removeChild(this.getDOM());

        const index = this.parent.children.indexOf(this);
        if (index > -1) { // only splice array when item is found
            this.parent.children.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.parent = undefined
        return this
    }

    addEvent(eventName, event, key) {

        if (!key) {
            key = "element";
        }

        this[key].addEventListener(
            eventName,
            event,
            false
        );
    }


    /**
     * @param {DOM} element
     * @param {Number} index
     */
    append(element, index) {


        if (!this.canAppend()) {
            return this
        }

        element.setParent(this);
        this.children.push(element)

        const parent = this.getElementToAppend()

        if (index === undefined || this.children.length === 0) {
            parent.appendChild(element.getDOM());
        } else {
            parent.insertBefore(element.getDOM(), parent.children[index]);
        }

        return this;
    }


    /**
     * @returns {HTMLElementTagNameMap}
     */
    getDOM() {
        return this.element;
    }
}

export class Div extends DOM {
}

export class Input extends DOM {
    createElement() {
        this.element = document.createElement("input");
    }
}

export class Label extends DOM {
    createElement() {
        this.element = document.createElement("label");
    }
}