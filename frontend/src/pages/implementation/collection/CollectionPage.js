import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div, DOM} from "../../../elements/dom/DOM.js";
import {EditorToolbar} from "../editor/toolbar/EditorToolbar.js";
import {Details} from "../editor/details/Details.js";
import {CollectionToolbar} from "./toolbar/CollectionToolbar.js";

export class CollectionPage extends Page {

    /**
     * @param {CollectionStructure} collection
     */
    constructor(collection) {
        super(collection);
    }

    fillElements(collection) {
        const header = new Header();
        this.elements.push(header);

        const toolbar = new CollectionToolbar();

        const panel = new Div([
            toolbar
        ]).setStyle("container");

        this.elements.push(panel);
    }

}