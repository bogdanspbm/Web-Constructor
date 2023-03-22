import { Button } from "../../../elements/default/Button.js";
import { Icon } from "../../../elements/icon/Icon.js";

export class ToolbarButton extends Button {
  createElement() {
    super.createElement();
    this.setStyle("toolbar-button");
    this.text.setAttribute("class", "toolbar-button-text");
  }

  addIcon(path) {
    this.icon = new Icon(path);
    this.icon.setStyle("toolbar-button-icon");
    this.append(this.icon);
    return this;
  }
}
