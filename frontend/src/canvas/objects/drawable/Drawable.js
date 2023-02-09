import {Interactable} from "../Interactable/Interactable.js";

export class Drawable extends Interactable {

    position = {x: 0, y: 0}
    size = {width: 100, height: 100}

    backgroundColor = "green"

    getContext() {
        var canvas = document.getElementById("canvas")
        return canvas.getContext("2d");
    }

    enableDrawSettings() {
        this.getContext().fillStyle = this.backgroundColor
    }

    draw() {
        this.enableDrawSettings()
        this.drawOverride()
    }

    drawOverride() {
        this.getContext().fillRect(this.getPosition().x, this.getPosition().y, this.size.width, this.size.height)
    }

    clear() {
        this.clearOverride()
    }

    clearOverride() {
        this.getContext().clearRect(this.getPosition().x, this.getPosition().y, this.size.width, this.size.height)
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
}