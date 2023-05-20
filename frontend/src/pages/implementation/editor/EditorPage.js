import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {EditorToolbar} from "./toolbar/EditorToolbar.js";
import {Details} from "./details/Details.js";
import {EditorGrid} from "./grid/EditorGrid.js";

export class EditorPage extends Page {


    fillElements(props) {
        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const grid = new EditorGrid({widget: props.structure});
        grid.fillGridWithElement(props.structure.getElements());
        document.grid = grid;

        const toolbar = new EditorToolbar({widget: props.structure});
        const details = new Details({widget: props.structure});

        const panel = new Div({
            elements: [
                toolbar,
                document.grid,
                details,
            ]
        }).setStyle("container");

        this.elements.push(panel);
    }

}