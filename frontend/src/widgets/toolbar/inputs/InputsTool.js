import { Button, Collapse, CollapseItem } from "../../../elements/dom/DOM.js";

export class InputsTool extends Collapse {
  createElement() {
    const buttonLeftPadding = "0px";

    super.createElement();
    this.button = new CollapseItem([
      new Button()
        .setText("Button")
        .setAttribute("margin-left", buttonLeftPadding)
        .getDOM(),
    ]);
    this.input = new CollapseItem([
      new Button()
        .setText("Input")
        .setAttribute("margin-left", buttonLeftPadding)
        .getDOM(),
    ]);
    this.selector = new CollapseItem([
      new Button()
        .setText("Selector")
        .setAttribute("margin-left", buttonLeftPadding)
        .getDOM(),
    ]);

    this.append(this.button.getDOM());
    this.append(this.input.getDOM());
    this.append(this.selector.getDOM());
  }
}
