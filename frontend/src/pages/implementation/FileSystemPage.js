import {Page} from "../Page.js";
import {Header} from "../../widgets/header/Header.js";
import {Div} from "../../elements/dom/DOM.js";
import {FileButton} from "../../widgets/file/FileButton.js";
import {EFile} from "../../enums/EFile.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */
    fillElements(directory) {
        const header = new Header();
        this.elements.push(header);

        const panel = new Div().setStyle("container").setAttribute("margin", "8px");

        const tmpFile = new FileButton(EFile.WIDGET)
        panel.append(tmpFile)
        const tmpFolder = new FileButton(EFile.DIRECTORY)
        panel.append(tmpFolder)

        this.elements.push(panel);
    }
}