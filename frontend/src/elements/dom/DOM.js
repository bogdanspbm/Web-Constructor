import {attributeFromMap} from "../../utils/Utils.js";

export class DOM {
    element;

    type = "dom"

    id = document.getID()

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
            return this
        }

        if (this.children[0].type === "dom") {
            return this
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

        this.columns = 12

        for (let i = 0; i < this.columns * 18; i++) {
            const block = new GridBlock()
            block.setGridPosition({x: i % this.columns, y: i / this.columns})
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

    getBlockRows() {
        return this.blocks.length / this.columns
    }

    getBlockByPosition(position) {
        const index = position.x + position.y * this.columns;
        return this.blocks[index]
    }

    clearOverlappedBlocks() {
        if (this.overlappedBlocks === undefined) {
            this.overlappedBlocks = []
            return
        }

        for (let i = 0; i < this.overlappedBlocks.length; i++) {
            const block = this.overlappedBlocks[i]

            if (block === undefined) {
                continue
            }

            block.onDragLeave()
        }

        this.overlappedBlocks = []
    }

    overlapBlocks(startPosition, endPosition, flag) {

        this.clearOverlappedBlocks()

        for (let x = startPosition.x; x < endPosition.x; x++) {
            for (let y = startPosition.y; y < endPosition.y; y++) {
                const block = this.getBlockByPosition({x: x, y: y})

                if (flag) {
                    block.onDragEnter()
                    this.overlappedBlocks.push(block)
                } else {
                    block.onDragLeave()
                }
            }
        }
    }
}

export class GridBlock extends DOM {
    childLimit = 1

    gridPosition = {x: 0, y: 0}

    createElement() {
        this.element = document.createElement("div");
        this.bindEvents()
        this.setStyle("grid-block");
    }

    setGridPosition(position) {
        this.gridPosition = position
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
            parent.onDragEnter()
        })

        this.element.addEventListener("dragover", function (event) {
            event.preventDefault()
        })

        this.element.addEventListener('dragleave', function (event) {
            parent.onDragLeave()
        })
    }

    onDragEnter() {
        this.setAttribute("background", "#F7F7F7")
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
