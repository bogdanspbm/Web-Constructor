import {Component} from "../component/Component.js";

export class CanvasComponent extends Component {
    idCounter = 0

    lastOverlapped = undefined

    dragElement = undefined

    dragStartPosition = undefined

    constructor() {
        super();
        this.bindEvents()
    }

    getLastID() {
        this.idCounter += 1
        return this.idCounter
    }

    clear() {
        this.getContext().clearRect(0, 0, 1920, 1080)
    }

    bindEvents() {
        this.setClickEvent()
        this.setOverlapEvent()
        this.setDragEvent()
    }

    setOverlapEvent() {
        const parent = this
        this.getCanvas().addEventListener('mouseover', function (event) {
            let element = parent.getOverlappedComponent(event)

            if (parent.lastOverlapped !== undefined && parent.lastOverlapped === element) {
                return
            }

            if (parent.lastOverlapped !== undefined && parent.lastOverlapped.overlapEndEvent !== undefined) {
                parent.lastOverlapped.overlapEndEvent()
            }

            parent.lastOverlapped = element

            if (parent.lastOverlapped !== undefined && parent.lastOverlapped.overlapEvent !== undefined) {
                parent.lastOverlapped.overlapEvent()
            }
        });
    }

    setClickEvent() {
        const parent = this
        this.getCanvas().addEventListener('click', function (event) {
            let element = parent.getOverlappedComponent(event)
            if (element !== undefined && element.clickEvent !== undefined) {
                element.clickEvent()
                parent.draw()
            }
        });
    }

    setDragEvent() {
        const parent = this
        this.getCanvas().addEventListener('mousedown', function (event) {
            let element = parent.getOverlappedComponent(event)

            if (parent.dragElement !== undefined && parent.dragElement === element) {
                return
            }

            if (parent.dragElement === undefined && parent.dragElement !== element) {
                parent.dragElement = element
                parent.dragStartPosition = element.getPosition()
                console.log("[Drag Event] Start")
            }
        });

        this.getCanvas().addEventListener('mouseup', function (event) {
            let element = parent.getOverlappedComponent(event)

            if (element === undefined) {
                return
            }

            if (parent.dragElement !== undefined && parent.dragElement === element) {
                parent.dragElement = undefined
                console.log("[Drag Event] End")
            }
        });

        this.getCanvas().addEventListener('mousemove', function (event) {
            if (parent.dragElement === undefined) {
                return
            }

            if (parent.dragElement !== document.selected) {
                parent.dragElement.select()
            }

            parent.dragElement.setPosition({x: event.offsetX, y: event.offsetY})
            parent.clear()
            parent.draw()
        });
    }

}