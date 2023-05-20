import {DOM} from "../dom/DOM.js";

export class Icon extends DOM {
  constructor(props) {
    super(props);
    this.setIcon(props.path);
  }

  createElement() {
    this.element = document.createElement("img");
  }

  setIcon(path) {
    this.element.setAttribute("src", path);
  }
}
