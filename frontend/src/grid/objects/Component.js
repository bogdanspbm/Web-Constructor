import {Transformable} from "../interfaces/Transformable.js";

export class Component extends Transformable {
}

export class ButtonComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("width", "calc(100% - 10px)")
        this.setAttribute("height", "calc(100% - 10px)")
        this.setAttribute("margin-bottom", "6px")
        this.setAttribute("margin-top", "5px")
        this.setAttribute("margin-left", "5px")
        this.setAttribute("margin-right", "5px")
        this.setStyle("button-component")
    }
}

export class InputComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("width", "calc(100% - 12px)")
        this.setAttribute("height", "calc(100% - 12px)")
        this.setAttribute("margin-bottom", "7px")
        this.setAttribute("margin-top", "5px")
        this.setAttribute("margin-left", "6px")
        this.setAttribute("margin-right", "6px")
        this.setStyle("input-component")
    }
}
