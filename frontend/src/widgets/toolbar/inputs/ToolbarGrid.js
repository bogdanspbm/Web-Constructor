import { Div } from "../../../elements/dom/DOM.js";

export class ToolbarGrid extends Div {
  createElement() {
    super.createElement();
    this.setStyle("toolbar-grid");
  }
}
