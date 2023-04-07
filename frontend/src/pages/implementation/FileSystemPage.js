import {Page} from "../Page.js";
import {Header} from "../../widgets/header/Header.js";
import {Div, DOM} from "../../elements/dom/DOM.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */
    fillElements(directory) {
        const header = new Header();
        this.elements.push(header);

        const panel = new Div().setStyle("container");

        this.elements.push(panel);
    }
}