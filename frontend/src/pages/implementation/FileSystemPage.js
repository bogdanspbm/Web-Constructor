import {Page} from "../Page.js";
import {Header} from "../../widgets/header/Header.js";
import {Div} from "../../elements/dom/DOM.js";
import {FileButton} from "../../widgets/file/FileButton.js";
import {EFile} from "../../enums/EFile.js";
import {FileStructure} from "../../objects/FileStructure.js";
import {WidgetFile} from "../../widgets/file/implementations/WidgetFile.js";
import {DirectoryFile} from "../../widgets/file/implementations/DirectoryFile.js";
import {EditorPageStructure} from "../../objects/EditorPageStructure.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */
    fillElements(directory) {
        const header = new Header();
        this.elements.push(header);

        const panel = new Div().setStyle("container").setAttribute("margin", "8px");

        const tmpFile = new FileButton(new WidgetFile(new EditorPageStructure()))
        panel.append(tmpFile)

        const tmpFolder = new FileButton(new DirectoryFile())
        panel.append(tmpFolder)

        this.elements.push(panel);
    }
}