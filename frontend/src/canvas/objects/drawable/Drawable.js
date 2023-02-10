import {Interactable} from "../Interactable/Interactable.js";

export class Drawable extends Interactable {

    position = {x: 100, y: 100}
    size = {width: 10, height: 10}

    path = new Path2D()

    backgroundColor = "green"

    strokeColor = "blue"

    constructor() {
        super();
        this.setPath();
    }

    getContext() {
        var canvas = document.getElementById("canvas")
        return canvas.getContext("2d");
    }

    getCanvas() {
        return document.getElementById("canvas")
    }

    enableDrawSettings() {
        this.getContext().fillStyle = this.backgroundColor
        this.getContext().strokeStyle = this.strokeColor
    }

    draw() {
        this.drawOverride();
    }

    drawOverride() {
        this.enableDrawSettings()
        this.getContext().fill(this.path);

        if (document.selected === this) {
            this.getContext().stroke(this.path)
        }
    }

    setPath() {
        this.path.arc(this.position.x, this.position.y, this.size.width, 0, 2 * Math.PI);
    }

    clear() {
        // TODO: Clear Path
    }

    getPosition() {
        return this.position
    }

    getSize() {
        return this.size
    }

    setPosition(position) {
        this.position = position
    }

    setSize(size) {
        this.size = size
    }

    redraw() {
        this.clear()
        this.draw()
    }

    isOverlapped(event) {
        return this.getContext().isPointInPath(this.path, event.offsetX, event.offsetY)
    }
}