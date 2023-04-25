import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div, DOM} from "../../../elements/dom/DOM.js";
import {EditorToolbar} from "./toolbar/EditorToolbar.js";
import {Details} from "./details/Details.js";
import {Grid} from "../../../grid/Grid.js";

export class EditorPage extends Page {

    /**
     * @param {WidgetStructure} widget
     */
    fillElements(widget) {
        const header = new Header();
        this.elements.push(header);

        const grid = new Grid().setStyle("grid").setID("canvas");
        this.fillGridWithElement(grid, widget.getElements());
        document.grid = grid;

        const toolbar = new EditorToolbar(widget);
        const details = new Details(widget);

        const panel = new Div([
            toolbar,
            document.grid,
            details,
        ]).setStyle("container");

        this.elements.push(panel);
    }


    /**
     * @param {Grid} grid
     * @param {Map} elements
     */
    fillGridWithElement(grid, elements) {

    }
}