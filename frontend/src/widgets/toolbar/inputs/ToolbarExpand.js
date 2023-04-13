import {Collapse, CollapseItem} from "../../../elements/default/Collapse.js";
import {ToolbarGrid} from "./ToolbarGrid.js";

export class ToolbarExpand extends Collapse {
  createElement() {
    super.createElement();
    this.setAttribute("margin", "10px");
    this.toolbarGrid = new ToolbarGrid();
    this.collapsedContent = new CollapseItem([this.toolbarGrid]);

    this.collapsedContent.setParent(this);
    this.children.push(this.collapsedContent);
    this.getElementToAppend().appendChild(this.collapsedContent.getDOM());
  }

  append(element) {
    if (!this.toolbarGrid.canAppend()) {
      return this.toolbarGrid;
    }

    element.setParent(this.toolbarGrid);
    this.toolbarGrid.children.push(element);
    this.toolbarGrid.getElementToAppend().appendChild(element.getDOM());
    return this.toolbarGrid;
  }
}
