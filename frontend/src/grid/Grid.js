import {DOM} from "../elements/dom/DOM.js";
import {equalsArrays} from "../utils/Utils.js";

export class Grid extends DOM {

    lastOverlappedBlocks = []

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

    overlapBlocks(overlappedBlocks) {
        if (!equalsArrays(this.lastOverlappedBlocks, overlappedBlocks)) {
            this.lastOverlappedBlocks.forEach((block) => {
                block.onDragLeave()
            })
        }

        overlappedBlocks.forEach((block) => {
            block.onDragEnter()
        })

        this.lastOverlappedBlocks = overlappedBlocks
    }

    getBlockByPosition(position) {

        if (position.x < 0 || position.y < 0) {
            return undefined
        }

        const index = position.x + position.y * this.columns
        return this.blocks[index]
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

    getBlockSize() {
        const width = parseFloat(getComputedStyle(this.element, null).getPropertyValue('width').replace('px', ''))
        const height = parseFloat(getComputedStyle(this.element, null).getPropertyValue('height').replace('px', ''))

        return {width: width, height: height}
    }


    bindEvents() {
        const parent = this
        this.element.addEventListener('dragenter', function (event) {
            document.dragTarget = parent
            const dragging = document.dragging

            if (dragging === undefined) {
                return
            }

            const blocks = dragging.getOverlappedBlocks()

            blocks.forEach((block) => {
                block.onDragEnter()
            })
        })

        this.element.addEventListener("dragover", function (event) {
            event.preventDefault()
        })

        this.element.addEventListener('dragleave', function (event) {
            const dragging = document.dragging

            if (dragging === undefined) {
                return
            }

            const blocks = dragging.getOverlappedBlocks(parent)
            blocks.forEach((block) => {
                block.onDragLeave()
            })
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