import {DOM} from "../dom/DOM.js";
import {Button} from "./Button.js";

export class Modal extends Button {

    constructor(props) {
        super(props);
        const parent = this;
        this.setClickEvent((event) => {
            if (event.srcElement !== parent.getDOM()) {
                return;
            }
            parent.close();
        })
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("modal-background");


        this.container = new DOM().setStyle("modal-container");
        this.append(this.container);
    }

    show() {
        const root = document.getElementById("root");
        root.append(this.getDOM());
    }

    close() {
        const root = document.getElementById("root");
        root.removeChild(root.children[root.children.length - 1]);
    }
}