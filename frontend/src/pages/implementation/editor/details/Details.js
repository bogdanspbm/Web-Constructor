import {DOM} from "../../../../elements/dom/DOM.js";
import {DetailsTabs} from "./tabs/DetailsTabs.js";

export class Details extends DOM {

    createElement(props) {
        super.createElement(props);
        this.setStyle("details");

        this.tabs = new DetailsTabs({widget: props.widget});
        this.append(this.tabs);
    }


}