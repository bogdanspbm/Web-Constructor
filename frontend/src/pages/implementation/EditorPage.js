import {Page} from "../Page.js";
import {Header} from "../../widgets/header/Header.js";
import {Div, DOM} from "../../elements/dom/DOM.js";
import {Toolbar} from "../../widgets/toolbar/Toolbar.js";
import {Details} from "../../widgets/details/Details.js";

export class EditorPage extends Page {


    /**
     * @param {EditorPageStructure} page
     */
    fillElements(page) {
        const header = new Header();
        this.elements.push(header);

        if (page === undefined) {
            document.grid = new DOM().setStyle("grid").setID("canvas");
        } else {
            document.grid = page.getGrid()
        }

        const toolbar = new Toolbar();
        const details = new Details();

        const panel = new Div([
            toolbar,
            document.grid,
            details,
        ]).setStyle("container");

        this.elements.push(panel);
    }
}