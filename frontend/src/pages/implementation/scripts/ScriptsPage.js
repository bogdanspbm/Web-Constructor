import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {ScriptsToolbar} from "./toolbar/ScriptsToolbar.js";
import {ScriptsContainer} from "./container/ScriptsContainer.js";
import {EPageType} from "../../../enums/EPageType.js";

export class ScriptsPage extends Page {

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script, EPageType.SCRIPT);
    }

    /**
     * @param {CollectionStructure} script
     */
    fillElements(script) {
        const header = new Header(this.getType());
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