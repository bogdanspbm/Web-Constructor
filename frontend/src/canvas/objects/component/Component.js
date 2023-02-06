import {Drawable} from "../drawable/Drawable.js";

export class Component extends Drawable {

    children = []
    parent = null

    setParent(parent) {
        this.parent = parent
    }

    getParent() {
        return this.parent
    }

    getPosition() {
        if (parent === null) {
            return this.position
        } else {
            return {x: parent.getPosition().x + this.position.x, y: parent.getPosition().y + this.position.y}
        }
    }

    draw() {
        this.drawOverride();
        this.children.forEach(child => child.draw())
    }

    clear() {
        this.clearOverride();
        this.children.forEach(child => child.clear())
    }

    addChild(child) {
        this.children.push(child)
    }

    getChildren() {
        return this.children
    }

}