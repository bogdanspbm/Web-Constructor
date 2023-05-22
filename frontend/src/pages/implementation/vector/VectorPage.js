import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {VectorToolbar} from "./toolbar/VectorToolbar.js";
import {VectorContainer} from "./container/VectorContainer.js";

export class VectorPage extends Page {
    fillElements(props) {
        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const toolbar = new VectorToolbar({vector: props.structure});
        const container = new VectorContainer({vector: props.structure});

        const panel = new Div({
            elements: [
                toolbar,
                container
            ]
        }).setStyle("container");

        this.elements.push(panel);
    }
}