export class DOM {
  element;

  constructor(elements) {
    this.createElement();

    if (!elements) {
      return;
    }

    elements.forEach((element) => this.append(element));
  }

  createElement() {
    this.element = document.createElement("div");
  }

  setStyle(style) {
    this.element.setAttribute("class", style);
    return this;
  }

  append(element) {
    this.element.appendChild(element);
    return this;
  }

  getDOM() {
    return this.element;
  }
}

export class Div extends DOM {}
