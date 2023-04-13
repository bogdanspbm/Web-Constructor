import {Button} from "../../../elements/default/Button.js";
import {Icon} from "../../../elements/icon/Icon.js";

export class HeaderButton extends Button {
  constructor(path) {
    super();
    this.icon = new Icon(path);
    this.icon.setStyle("white-filter");
    this.append(this.icon);
  }

  createElement() {
    super.createElement();
    this.setStyle("button-header");
  }

  onActiveEvent() {
    if (this.icon === undefined) {
      return;
    }
    this.icon.setStyle("white-filter");
  }

  onDeactivateEvent() {
    if (this.icon === undefined) {
      return;
    }
    this.icon.setStyle("gray-filter");
  }
}
