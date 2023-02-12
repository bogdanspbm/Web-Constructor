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

    }
}