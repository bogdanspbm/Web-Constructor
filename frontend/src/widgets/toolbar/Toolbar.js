import { DOM } from "../../elements/dom/DOM.js";
import {ToolbarTabs} from "./tabs/ToolbarTabs.js";

export class Toolbar extends DOM {
  createElement() {
    super.createElement();
    this.setStyle("toolbar");

    this.toolbarTabs = new ToolbarTabs()
    this.append(this.toolbarTabs);
  }
}
