import { Div } from "../elements/dom/DOM.js";

export class App {
  constructor() {
    this.root = document.getElementById("root");
    this.generateConstructor();
  }

  generateConstructor() {
    this.header = new Div().setStyle("header").getDOM();
    this.root.append(this.header);
  }
}
