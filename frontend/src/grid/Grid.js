import {DOM} from "../elements/dom/DOM.js";

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

        return this;
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


    bindEvents() {
        const parent = this
        this.element.addEventListener('dragenter', function (event) {
            document.dragTarget = parent
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