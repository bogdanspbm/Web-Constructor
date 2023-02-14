import {attributeFromMap} from "../../utils/Utils.js";

export class DOM {
    element;

    type = "dom"

    childLimit = -1

    children = []
    styles = {};

    parent = undefined

    selected = false

    /**
     * @param {DOM[]} elements
     */
    constructor(elements) {
        this.createElement();

        if (!elements) {
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
     * @returns {DOM}
     */
    getParentDOM() {
        return this
    }

    getRootDOM() {
        if (this.children.length === 0) {
            return this.parent
        }

        if (this.children[0].type === "dom") {
            return this.children[0]
        }

        return this.children[0].getRootDOM()
    }

    /**
     * @param {string} text
     */
    setText(text) {
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

    addClickEvent(action) {
        this.element.addEventListener("click", action, false);
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

        this.parent.getElementToAppend().removeChild(this.getDOM())


        if (this.selected) {
            this.parent.setSelect(false);
        }

        const index = this.parent.children.indexOf(this);
        if (index > -1) { // only splice array when item is found
            this.parent.children.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.parent = undefined
        return this
    }


    /**
     * @param {boolean} flag
     */
    setSelect(flag) {
        this.select = flag
        if (flag) {
            this.onSelect()
        } else {
            this.onUnselect()
        }
    }

    onSelect() {
    }

    onUnselect() {
    }


    /**
     * @param {DOM} element
     */
    append(element) {

        if (!this.canAppend()) {
            return this
        }

        element.setParent(this);

        this.children.push(element)
        this.getElementToAppend().appendChild(element.getDOM());

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

export class Collapse extends DOM {

    createElement() {
        this.element = document.createElement("div");
        this.details = document.createElement("details");
        this.summary = document.createElement("summary");
        this.content = document.createElement("div");

        this.content.setAttribute("class", "collapse");
        this.summary.setAttribute("class", "unselectable");

        this.element.appendChild(this.details);
        this.details.appendChild(this.summary);
        this.details.appendChild(this.content);
    }

    setText(text) {
        this.summary.textContent = text;
        return this;
    }

    getElementToAppend() {
        return this.content
    }

    canAppend() {
        return true
    }
}

export class Button extends DOM {
    createElement() {
        super.createElement();

        this.text = document.createElement("div");
        this.text.setAttribute("class", "button-text");

        this.element.appendChild(this.text);

        this.setStyle("button");
    }

    setText(text) {
        this.text.textContent = text;
        return this;
    }
}

export class CollapseItem extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("collapse-item");
    }
}

export class Grid extends DOM {

    createElement() {
        this.element = document.createElement("div");

        this.blocks = []

        for (let i = 0; i < 12 * 18; i++) {
            const block = new GridBlock()
            this.blocks.push(block)
            this.element.append(block.getDOM());
        }
    }

    canAppend() {
        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i]
            if (block.canAppend()) {
                return true
            }
        }

        return false
    }

    getElementToAppend() {
        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i]
            if (block.canAppend()) {
                return block;
            }
        }

        return undefined;
    }

    append(element) {

        if (!this.canAppend()) {
            return this
        }

        this.children.push(element)
        this.getElementToAppend().append(element);

        if (element.selected) {
            this.setSelect(element.select)
        }

        return this;
    }
}

export class GridBlock extends DOM {
    childLimit = 1

    createElement() {
        this.element = document.createElement("div");
        this.bindEvents()
        this.setStyle("grid-block");
    }

    onSelect() {
        this.setAttribute("z-index", 100)
    }

    onUnselect() {
        this.setAttribute("z-index", 0)
    }

    bindEvents() {
        const parent = this
        this.element.addEventListener('dragenter', function (event) {
            document.dragTarget = parent
            parent.setAttribute("background", "#F7F7F7")
        })

        this.element.addEventListener("dragover", function (event) {
            event.preventDefault()
        })

        this.element.addEventListener('dragleave', function (event) {
            parent.onDragLeave()
        })
    }

    onDragLeave() {
        this.setAttribute("background", "#FFFFFF")
    }
}

export class Canvas extends DOM {
    createElement() {
        this.element = document.createElement("canvas");

        //TODO: AutoCalc
        this.element.setAttribute("width", "1122-128")
        this.element.setAttribute("height", "561-128")
    }
}
