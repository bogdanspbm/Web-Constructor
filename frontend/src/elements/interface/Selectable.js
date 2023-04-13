import {Clickable} from "./Clickable.js";

export class Selectable extends Clickable {
  isSelected = false;
  clickElement = undefined;

  constructor(elements) {
    super(elements);

    this.setClickElement(document.createElement("div"));
    this.setStyle("selectable-off", "clickElement");
    this.clickElement.appendChild(this.element);
  }

  getDOM() {
    return this.clickElement;
  }

  setClickElement(element) {
    this.clickElement = element;
    element.setAttribute("clickable", "true");
    this.bindClickEvent();
  }

  bindClickEvent() {
    const parent = this;
    this.element.addEventListener(
      "click",
      function () {
        document.select(parent);

        if (parent.clickAction === undefined) {
          return;
        }

        parent.clickAction();
      },
      false
    );
  }

  setSelected(select) {
    if (select === this.isSelected) {
      return this;
    }

    this.isSelected = select;

    if (select) {
      this.selectEvent();
    } else {
      this.unSelectEvent();
    }

    return this;
  }

  setOutlineVisibility(visibility) {
    if (visibility) {
      this.setStyle("selectable-on", "clickElement");
    } else {
      this.setStyle("selectable-off", "clickElement");
    }
  }

  selectEvent() {
    if (this.clickElement === undefined) {
      return false;
    }

    this.setStyle("selectable-on", "clickElement");
    return true;
  }

  unSelectEvent() {
    if (this.clickElement === undefined) {
      return false;
    }

    this.setStyle("selectable-off", "clickElement");
    return true;
  }
}
