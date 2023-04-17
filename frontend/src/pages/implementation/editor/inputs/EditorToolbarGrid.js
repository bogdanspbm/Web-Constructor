import {Div} from "../../../../elements/dom/DOM.js";

export class EditorToolbarGrid extends Div {
  createElement() {
    super.createElement();
    this.setStyle("toolbar-grid");
  }
}
