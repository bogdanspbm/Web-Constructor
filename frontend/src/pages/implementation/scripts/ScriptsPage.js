import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {ScriptsToolbar} from "./toolbar/ScriptsToolbar.js";
import {ScriptsContainer} from "./container/ScriptsContainer.js";

export class ScriptsPage extends Page {

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script);
    }

    /**
     * @param {CollectionStructure} script
     */
    fillElements(script) {
        const header = new Header(false);
        this.elements.push(header);

        const toolbar = new ScriptsToolbar(script);
        const container = new ScriptsContainer(script);

        const panel = new Div([
            toolbar,
            container
        ]).setStyle("container");

        this.elements.push(panel);
    }

}