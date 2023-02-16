import {Transformable} from "../interfaces/Transformable.js";

export class Component extends Transformable {
}

export class ButtonComponent extends Component {
    constructor(elements) {
        super(elements);
        this.setAttribute("width", "calc(100% - 10px)")
        this.setAttribute("height", "calc(100% - 10px)")
        this.setAttribute("margin", "5px")
        this.setStyle("button-component")
    }
}