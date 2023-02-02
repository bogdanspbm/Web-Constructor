import { Button, Collapse } from "../../../elements/dom/DOM.js";

export class InputsTool extends Collapse {
  createElement() {
    const buttonLeftPadding = "12px";

    super.createElement();
    this.button = new Button()
      .setText("Button")
      .setAttribute("margin-left", buttonLeftPadding);
    this.input = new Button()
      .setText("Input")
      .setAttribute("margin-left", buttonLeftPadding);
    this.selector = new Button()
      .setText("Selector")
      .setAttribute("margin-left", buttonLeftPadding);

    this.append(this.button.getDOM());
    this.append(this.input.getDOM());
    this.append(this.selector.getDOM());
  }
}
