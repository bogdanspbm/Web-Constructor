import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {CollectionToolbar} from "./toolbar/CollectionToolbar.js";
import {CollectionContainer} from "./container/CollectionContainer.js";

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
        const container = new CollectionContainer();

        const panel = new Div([
            toolbar,
            container

        ]).setStyle("container");

        this.elements.push(panel);
    }

}