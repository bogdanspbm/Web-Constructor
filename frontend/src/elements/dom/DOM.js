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

    setText(text) {
        this.element.textContent = text;
        return this;
    }

    setStyle(style) {
        this.element.setAttribute("class", style);
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
