import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {ScriptsToolbar} from "./toolbar/ScriptsToolbar.js";
import {ScriptsContainer} from "./container/ScriptsContainer.js";

export class ScriptsPage extends Page {


    fillElements(props) {
        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const toolbar = new ScriptsToolbar({script: props.structure});
        const container = new ScriptsContainer({script: props.structure});

        const panel = new Div({
            elements: [
                toolbar,
                container
            ]
        }).setStyle("container");

        this.elements.push(panel);
    }

}