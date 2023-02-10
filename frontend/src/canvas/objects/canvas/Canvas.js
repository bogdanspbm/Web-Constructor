import {Component} from "../component/Component.js";

export class CanvasComponent extends Component {
    idCounter = 0

    lastOverlapped = undefined

    constructor() {
        super();
        this.bindEvents()
    }

    getLastID() {
        this.idCounter += 1
        return this.idCounter
    }

    bindEvents() {
        const parent = this
        this.getCanvas().addEventListener('mousemove', function (event) {
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

}