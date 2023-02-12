import {Button, Collapse, CollapseItem} from "../../../elements/dom/DOM.js";

export class InputsTool extends Collapse {
    createElement() {
        const buttonLeftPadding = "0px";

        super.createElement();
        this.button = new CollapseItem([new Button()
            .setText("Button")
            .setAttribute("margin-left", buttonLeftPadding)
            .addClickEvent(() => {
                var component = new Button();
                document.grid.append(component);
            }),]);
        this.input = new CollapseItem([new Button()
            .setText("Input")
            .setAttribute("margin-left", buttonLeftPadding),]);
        this.selector = new CollapseItem([new Button()
            .setText("Selector")
            .setAttribute("margin-left", buttonLeftPadding),]);

        this.append(this.button);
        this.append(this.input);
        this.append(this.selector);
    }
}
