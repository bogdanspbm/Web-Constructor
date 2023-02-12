import {DOM} from "./DOM";

export class DecoratorDOM extends DOM {

    parentDOM = undefined
    childLimit = 0


    /**
     * @param {DOM} dom
     */

    constructor(dom) {
        super();
        this.parentDOM = dom
        this.element.appendChild(dom.getDOM())
    }
}

export class DraggableDOM extends DecoratorDOM {

}