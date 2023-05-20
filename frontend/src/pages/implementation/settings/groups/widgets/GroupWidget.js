import {DOM} from "../../../../../elements/dom/DOM.js";

export class GroupWidget extends DOM {

    createElement(props) {
        super.createElement(props);
        this.setStyle("group-widget");
    }
}