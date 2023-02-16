import {DOM} from "../dom/DOM.js";
import {Clickable} from "../interface/Clickable.js";

export class Collapse extends DOM {

    createElement() {
        this.element = document.createElement("div");
        this.details = document.createElement("details");
        this.summary = document.createElement("summary");
        this.content = document.createElement("div");

        this.content.setAttribute("class", "collapse");
        this.summary.setAttribute("class", "unselectable");

        this.element.appendChild(this.details);
        this.details.appendChild(this.summary);
        this.details.appendChild(this.content);
    }

    setText(text) {
        this.summary.textContent = text;
        return this;
    }

    getElementToAppend() {
        return this.content
    }

    canAppend() {
        return true
    }
}

export class CollapseItem extends Clickable {
    createElement() {
        super.createElement();
        this.setStyle("collapse-item");
    }
}