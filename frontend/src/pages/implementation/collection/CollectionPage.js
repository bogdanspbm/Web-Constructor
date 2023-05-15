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

    /**
     * @param {CollectionStructure} collection
     */
    fillElements(collection) {
        const header = new Header(false);
        this.elements.push(header);

        const toolbar = new CollectionToolbar(collection);
        const container = new CollectionContainer(collection);

        const panel = new Div([
            toolbar,
            container

        ]).setStyle("container");

        this.elements.push(panel);
    }

}