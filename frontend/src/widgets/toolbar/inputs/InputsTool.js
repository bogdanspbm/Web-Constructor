import {Button, Collapse} from "../../../elements/dom/DOM.js";

export class InputsTool extends Collapse {
    createElement() {
        super.createElement();
        this.button = new Button().setText("Button");
        this.input = new Button().setText("Input");
        this.selector = new Button().setText("Selector");

        this.append(this.button.getDOM());
        this.append(this.input.getDOM());
        this.append(this.selector.getDOM());
    }
}