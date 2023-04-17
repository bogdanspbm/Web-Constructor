import {DOM} from "../../../../elements/dom/DOM.js";

export class RowInput extends DOM {

    constructor(hint) {
        super(hint);
    }

    createElement(hint) {
        super.createElement();
        this.setStyle("table-row-input")
        this.setText(hint)
    }
}