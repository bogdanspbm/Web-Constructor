import { Button } from "../../../elements/default/Button.js";

export class ToolbarButton extends Button {
  createElement() {
    super.createElement();
    this.setStyle("toolbar-button");
  }
}
