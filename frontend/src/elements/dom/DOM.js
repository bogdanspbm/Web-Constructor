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


    setStyle(style, key) {
        if (!key) {
            key = 'element'
        }
        this[key].setAttribute("class", style);
        return this;
    }

    addClickEvent(action) {
        this.element.addEventListener('click', action, false);
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
        this.details = document.createElement("details")
        this.summary = document.createElement("summary")
        this.content = document.createElement("div")

        this.content.setAttribute("class", "collapse")

        this.element.appendChild(this.details)
        this.details.appendChild(this.summary)
        this.details.appendChild(this.content)
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
        this.setStyle("button")
    }
}