import { Div } from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";

export class App {
  constructor() {
    this.root = document.getElementById("root");
    this.generateConstructor();
  }

  generateConstructor() {
    this.header = new Div().setStyle("header").setText("Constructor").getDOM();
    this.root.append(this.header);

    this.toolbar = new Toolbar().getDOM();

    this.panel = new Div([this.toolbar]).setStyle("container").getDOM();
    this.root.append(this.panel);
  }
}
