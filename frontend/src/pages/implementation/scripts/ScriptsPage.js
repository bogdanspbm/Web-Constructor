import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {ScriptsToolbar} from "./toolbar/ScriptsToolbar.js";
import {ScriptsContainer} from "./container/ScriptsContainer.js";
import {EPageType} from "../../../enums/EPageType.js";

export class ScriptsPage extends Page {


    /**
     * @param {CollectionStructure} script
     */
    fillElements(props) {
        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const toolbar = new ScriptsToolbar(props.structure);
        const container = new ScriptsContainer(props.structure);

        const panel = new Div([
            toolbar,
            container
        ]).setStyle("container");

        this.elements.push(panel);
    }

}