import {Component} from "../component/Component.js";

export class CanvasComponent extends Component {
    idCounter = 0

    getLastID() {
        this.idCounter += 1
        return this.idCounter
    }

}