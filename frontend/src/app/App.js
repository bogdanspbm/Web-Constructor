import {Canvas, Div} from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";
import {CanvasComponent} from "../canvas/objects/canvas/Canvas.js";

export class App {
    constructor() {
        this.root = document.getElementById("root");
        this.generateConstructor();
        this.createCanvasComponent();
    }

    createCanvasComponent() {
        document.canvas = new CanvasComponent();
    }

    generateConstructor() {
        this.header = new Div().setStyle("header").setText("Constructor").getDOM();
        this.root.append(this.header);

        this.toolbar = new Toolbar().getDOM();
        this.canvas = new Canvas().setStyle("canvas").setID("canvas").getDOM();

        this.panel = new Div([this.toolbar, this.canvas])
            .setStyle("container")
            .getDOM();
        this.root.append(this.panel);
    }
}
