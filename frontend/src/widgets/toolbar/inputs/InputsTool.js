import {Collapse, CollapseItem} from "../../../elements/default/Collapse.js";
import {Button} from "../../../elements/default/Button.js";
import {ButtonComponent, InputComponent, TextComponent} from "../../../grid/objects/Component.js";

export class InputsTool extends Collapse {
    createElement() {
        const buttonLeftPadding = "0px";

        super.createElement();
        this.button = new CollapseItem([new Button()
            .setText("Button")
            .setAttribute("margin-left", buttonLeftPadding)
            .addClickEvent(() => {
                document.grid.append(new ButtonComponent());
            })]);
        this.input = new CollapseItem([new Button()
            .setText("Input")
            .setAttribute("margin-left", buttonLeftPadding)
            .addClickEvent(() => {
                document.grid.append(new InputComponent());
            })]);
        this.textInput = new CollapseItem([new Button()
            .setText("Text")
            .setAttribute("margin-left", buttonLeftPadding)
            .addClickEvent(() => {
                document.grid.append(new TextComponent());
            })]);
        this.selector = new CollapseItem([new Button()
            .setText("Selector")
            .setAttribute("margin-left", buttonLeftPadding)]);

        this.append(this.button);
        this.append(this.input);
        this.append(this.textInput)
        this.append(this.selector);
    }
}
