import {DOM} from "../../../../elements/dom/DOM.js";
import {TextDetail} from "./inputs/TextDetail.js";
import {DetailsTabs} from "./tabs/DetailsTabs.js";

export class Details extends DOM {

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget);
    }

    /**
     * @param {WidgetStructure} widget
     */
    createElement(widget) {
        super.createElement();
        this.setStyle("details");

        this.tabs = new DetailsTabs(widget);
        this.append(this.tabs);
    }


}