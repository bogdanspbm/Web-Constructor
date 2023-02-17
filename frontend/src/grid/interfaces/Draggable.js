import {GridContent} from "../objects/GridContent.js";
import {GridBlock} from "../Grid.js";

export class Draggable extends GridContent {

    constructor(elements) {
        super(elements);
        this.createDragElement()
        this.bindDragEvents()
    }

    createDragElement() {
        this.draggable = document.createElement("div")
        this.draggable.setAttribute("draggable", "true")
        this.draggable.setAttribute("class", "draggable")
        this.draggable.appendChild(this.clickElement)
    }


    getDOM() {
        return this.draggable;
    }

    bindDragEvents() {
        const parent = this

        this.draggable.addEventListener("dragstart", function (event) {
            document.dragging = parent
        })

        this.draggable.addEventListener("dragend", function (event) {
            parent.attachToLastDragTarget()
            document.dragging = undefined
        })
    }

    setDragEnabled(flag) {
        this.draggable.setAttribute("draggable", flag.toString())
    }

    getOverlappedBlocks(target) {
        const blocks = []
        const grid = document.grid

        if (target === undefined) {
            target = document.dragTarget
        }

        if (grid === undefined || target === undefined || !(target instanceof GridBlock)) {
            return []
        }

        const startPosition = target.gridPosition

        for (let x = startPosition.x; x < startPosition.x + this.gridSize.x; x++) {
            for (let y = startPosition.y; y < startPosition.y + this.gridSize.y; y++) {
                const block = grid.getBlockByPosition({x: x, y: y})
                if (block === undefined) {
                    return []
                }
                blocks.push(block)
            }
        }

        return blocks
    }


    attachToLastDragTarget(target) {
        if (target === undefined) {
            target = document.dragTarget
        }

        if (target === undefined || !(target instanceof GridBlock)) {
            return false;
        }

        target.append(this)
        return true
    }

}