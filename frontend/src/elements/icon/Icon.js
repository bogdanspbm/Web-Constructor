import {DOM} from "../dom/DOM.js";

export class Icon extends DOM {
  constructor(path) {
    super();
    this.setIcon(path);
  }

  createElement() {
    this.element = document.createElement("img");
  }

  setIcon(path) {
    this.element.setAttribute("src", path);
  }
}
