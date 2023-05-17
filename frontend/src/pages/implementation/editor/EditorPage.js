import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {EditorToolbar} from "./toolbar/EditorToolbar.js";
import {Details} from "./details/Details.js";
import {EditorGrid} from "./grid/EditorGrid.js";
import {EPageType} from "../../../enums/EPageType.js";

export class EditorPage extends Page {

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget, EPageType.EDITOR);
    }

    /**
     * @param {WidgetStructure} widget
     */
    fillElements(widget) {
        const header = new Header(this.getType());
        this.elements.push(header);

        const grid = new EditorGrid(widget);
        grid.fillGridWithElement(widget.getElements());
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

}