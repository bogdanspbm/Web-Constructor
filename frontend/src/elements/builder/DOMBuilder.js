import {DraggableDOM, ResizableDOM} from "../dom/DecoratorsDOM.js";
import {Button} from "../dom/DOM.js";

export class DOMBuilder {

    element = undefined
    decorators = []

    constructor() {
    }


    /**
     * @param {DOM} dom
     * @returns {DOMBuilder}
     */
    setMainDOM(dom) {
        this.element = dom
    }

    /**
     * @param {DecoratorDOM} decorator
     * @returns {DOMBuilder}
     */
    addDecorator(decorator) {
        this.decorators.push(decorator)
    }

    /**
     * @returns {DOM}
     */
    buildDOM() {
        if (this.decorators.length === 0 || this.element === undefined) {
            return this.element
        }

        const decorator = this.decorators[0]
        decorator.setParentDOM(this.element)

        for (let i = 0; i < this.decorators.length - 1; i++) {
            const prevDecorator = this.decorators[i]
            const nextDecorator = this.decorators[i + 1]

            nextDecorator.setParentDOM(prevDecorator)
        }

        return this.decorators[this.decorators.length - 1]
    }
}

export class ComponentDOMBuilder extends DOMBuilder {
    decorators = [new ResizableDOM(), new DraggableDOM()]
}

/**
 * @returns {DOMBuilder}
 */
export function createButtonBuilder() {
    const builder = new ComponentDOMBuilder()
    const button = new Button()
    button.setAttribute("width", "calc(100% - 10px)").setAttribute("height", "calc(100% - 10px)").setAttribute("margin", "5px")
    button.setStyle("button-component")
    builder.setMainDOM(button)
    return builder
}