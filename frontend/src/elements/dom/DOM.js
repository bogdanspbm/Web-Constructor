import {attributeFromMap} from "../../utils/Utils.js";

export class DOM {
    element;

    styles = {};

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

    setID(id) {
        this.element.setAttribute("id", id);

        return this;
    }

    setAttribute(key, value, element) {
        this.styles[key] = value;

        if (!element) {
            element = "element";
        }

        this[element].setAttribute("style", attributeFromMap(this.styles));
        return this;
    }

    setText(text) {
        this.element.textContent = text;
        return this;
    }

    setStyle(style, key) {
        if (!key) {
            key = "element";
        }
        this[key].setAttribute("class", style);
        return this;
    }

    addClickEvent(action) {
        this.element.addEventListener("click", action, false);
        return this;
    }

    append(element) {
        if (element.classList.contains(DOM)) {
            this.element.appendChild(element.getDOM());
        } else {
            this.element.appendChild(element);
        }
        return this;
    }

    getDOM() {
        return this.element;
    }
}

export class Div extends DOM {
}

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

    append(element) {
        if (element.classList.contains(DOM)) {
            this.content.appendChild(element.getDOM());
        } else {
            this.content.appendChild(element);
        }
        return this;
    }
}

export class Button extends DOM {
    createElement() {
        super.createElement();

        this.text = document.createElement("div");
        this.text.setAttribute("class", "button-text");

        this.element.appendChild(this.text);

        this.setStyle("button");
    }

    setText(text) {
        this.text.textContent = text;
        return this;
    }
}

export class CollapseItem extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("collapse-item");
    }
}

export class Grid extends DOM {

    createElement() {
        this.element = document.createElement("div");

        for (let i = 0; i < 12 * 9; i++) {
            let block = new GridBlock().getDOM()
            this.element.append(block);
        }
    }
}

export class GridBlock extends DOM {
    createElement() {
        this.element = document.createElement("div");
        this.setStyle("grid-block");
    }
}

export class Canvas extends DOM {
    createElement() {
        this.element = document.createElement("canvas");

        //TODO: AutoCalc
        this.element.setAttribute("width", "1122-128")
        this.element.setAttribute("height", "561-128")
    }
}
