import {Transformable} from "../drawable/Transformable.js";

export class Component extends Transformable {
    id = document.canvas !== undefined ? document.canvas.getLastID() : 0
    children = []
    parent = undefined

    constructor() {
        super();
    }

    setParent(parent) {
        this.parent = parent
        parent.children.push(this)
    }

    getParent() {
        return this.parent
    }

    getPosition() {
        if (this.getParent() === undefined) {
            return this.position
        } else {
            return {
                x: this.getParent().getPosition().x + this.position.x,
                y: this.getParent().getPosition().y + this.position.y
            }
        }
    }

    draw() {
        this.updatePath();
        this.drawOverride();
        this.children.forEach(child => child.draw())
    }

    clear() {
        this.children.forEach(child => child.clear())
    }

    addChild(child) {
        this.children.push(child)
        child.parent = this
        this.redraw()
    }

    getChildren() {
        return this.children
    }

    getOverlappedComponent(event) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i]
            const element = child.getOverlappedComponent(event)

            if (element !== undefined) {
                return element
            }
        }

        if (this.isOverlapped(event)) {
            return this
        }

        return undefined
    }

}