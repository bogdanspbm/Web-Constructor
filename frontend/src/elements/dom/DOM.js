import {attributeFromMap} from "../../utils/Utils.js";

export class DOM {
    element;

    type = "dom"

    id = document.getID()

    childLimit = -1

    children = []
    styles = {};

    parent = undefined

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

        if (this.getParentDOM().select) {
            parent.setSelect(true)
        }

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
        this.parent.setSelect(false);

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
            block.setGridPosition({x: i % this.columns, y: Math.floor(i / this.columns)})
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

        if (element.select) {
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

    clearOverlappedBlocks(startPosition, endPosition, force) {

        if (force === false && this.lastStartOverlap !== undefined && this.lastEndOverlap !== undefined) {
            if (startPosition === this.lastStartOverlap && endPosition === this.lastEndOverlap) {
                return
            }
        }

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

        this.lastStartOverlap = startPosition
        this.lastEndOverlap = endPosition

        this.overlappedBlocks = []
    }

    getBlocks(startPosition, endPosition) {
        let result = []

        for (let x = startPosition.x; x < startPosition.x + endPosition.x; x++) {
            for (let y = startPosition.y; y < startPosition.y + endPosition.y; y++) {
                const block = this.getBlockByPosition({x: x, y: y})
                result.push(block)
            }
        }

        return result
    }

    getComponentsInBlocks(blocks) {
        let result = 0

        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i]

            if (block === undefined || block.children.length == 0) {
                continue
            }

            result += 1
        }

        return result
    }

    overlapBlocks(startPosition, endPosition) {
        this.clearOverlappedBlocks(startPosition, endPosition, false)
        const blocks = this.getBlocks(startPosition, endPosition)
        const overlappingComponentsCount = this.getComponentsInBlocks(blocks)
        const success = overlappingComponentsCount < 2

        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i]
            block.onDragEnter(success ? undefined : "#fff1f0")
            this.overlappedBlocks.push(block)
        }

        return success
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
            document.grid.overlapBlocks(parent.gridPosition, document.dragging.getResizeDecorator().gridSize)
        })

        this.element.addEventListener("dragover", function (event) {
            event.preventDefault()
        })
    }

    onDragEnter(color) {
        if (color === undefined) {
            color = "#F7F7F7"
        }
        this.setAttribute("background", color)
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
