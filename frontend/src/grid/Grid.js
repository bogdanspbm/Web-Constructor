import {DOM} from "../elements/dom/DOM.js";
import {equalsArrays} from "../utils/Utils.js";

export class Grid extends DOM {
    lastOverlappedBlocks = [];

    createElement() {
        this.element = document.createElement("div");
        this.blocks = [];
        this.columns = 12;

        for (let i = 0; i < this.columns * 18; i++) {
            const block = new GridBlock();
            block.setGridPosition({
                x: i % this.columns,
                y: Math.floor(i / this.columns),
            });
            this.blocks.push(block);
            this.element.append(block.getDOM());
        }
    }

    overlapBlocks(overlappedBlocks, color) {
        if (!equalsArrays(this.lastOverlappedBlocks, overlappedBlocks)) {
            this.lastOverlappedBlocks.forEach((block) => {
                block.onDragLeave();
            });
        }

        overlappedBlocks.forEach((block) => {
            block.onDragEnter(color);
        });

        this.lastOverlappedBlocks = overlappedBlocks;
    }

    getBlockByPosition(position) {
        if (position.x < 0 || position.y < 0) {
            return undefined;
        }

        const index = position.x + position.y * this.columns;
        return this.blocks[index];
    }

    getBlockedBlocks() {
        let blockedBlocks = [];

        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i];
            if (block.canAppend() || block.children.length === 0) {
                continue;
            }

            console.log(block.children[0]);

            const smallBlockedBlocks = block.children[0].getOverlappedBlocks(block);
            smallBlockedBlocks.forEach((smallBlock) =>
                blockedBlocks.push(smallBlock)
            );
        }

        return blockedBlocks;
    }

    canAppend() {
        let blockedBlocks = this.getBlockedBlocks();

        if (blockedBlocks.length !== this.blocks.length) {
            return true;
        }

        return false;
    }

    getElementToAppend() {
        let blockedBlocks = this.getBlockedBlocks();

        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i];

            if (blockedBlocks.indexOf(block) === -1) {
                return block;
            }
        }

        return undefined;
    }

    append(element) {
        if (!this.canAppend()) {
            return this;
        }

        this.children.push(element);
        this.getElementToAppend().append(element);

        return this;
    }
}

export class GridBlock extends DOM {
    childLimit = 1;

    gridPosition = {x: 0, y: 0};

    createElement() {
        this.element = document.createElement("div");
        this.bindEvents();
        this.setStyle("grid-block");
    }

    setGridPosition(position) {
        this.gridPosition = position;
    }

    getBlockSize() {
        const width = parseFloat(
            getComputedStyle(this.element, null)
                .getPropertyValue("width")
                .replace("px", "")
        );
        const height = parseFloat(
            getComputedStyle(this.element, null)
                .getPropertyValue("height")
                .replace("px", "")
        );

        return {width: width + 1, height: height + 1};
    }

    bindEvents() {
        const parent = this;
        this.element.addEventListener("dragenter", function (event) {
            if (parent.children.length !== 0) {
                return;
            }

            parent.dragEnterEvent(event, parent);
        });

        this.element.addEventListener("dragover", function (event) {
            event.preventDefault();
        });
    }

    dragEnterEvent(event, parent) {
        if (parent === undefined) {
            parent = this;
        }

        document.dragTarget = parent;
        const dragging = document.dragging;

        if (dragging === undefined) {
            return;
        }

        const blocks = dragging.getOverlappedBlocks();

        const color = dragging.getOverlapCondition() ? undefined : "#fff1f0";

        document.grid.overlapBlocks(blocks, color);
    }

    onDragEnter(color) {
        if (color === undefined) {
            color = "#F7F7F7";
        }
        this.setAttribute("background", color);
    }

    onDragLeave() {
        this.setAttribute("background", "#FFFFFF");
    }
}
