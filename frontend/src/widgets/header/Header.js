import {Div} from "../../elements/dom/DOM.js";
import {HeaderControls} from "./inputs/HeaderControls.js";
import {HeaderTabs} from "./inputs/HeaderTabs.js";
import {HeaderFiles} from "./inputs/HeaderFiles.js";
import {HeaderProjectName} from "./inputs/HeaderProjectName.js";
import {HeaderSettings} from "./inputs/HeaderSettings.js";

export class Header extends Div {

    createElement(props) {
        super.createElement();
        this.setStyle("header");

        const parent = this;

        const files = new HeaderFiles({parent: parent, type: props.pageType});
        const controls = new HeaderControls({parent: parent, type: props.pageType});
        const projName = new HeaderProjectName({parent: parent, type: props.pageType});
        const settings = new HeaderSettings({parent: parent, type: props.pageType});
        const tabs = new HeaderTabs({parent: parent, type: props.pageType});

    }
}
