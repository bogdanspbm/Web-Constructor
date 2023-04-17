import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {FileButton} from "./file/FileButton.js";
import {WidgetFile} from "./file/implementations/WidgetFile.js";
import {EditorPageStructure} from "../../../objects/EditorPageStructure.js";
import {FilePopup} from "../../../popups/implementation/FilePopup.js";
import {CollectionFile} from "./file/implementations/CollectionFile.js";
import {CollectionStructure} from "../../../objects/CollectionStructure.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */


    fillElements(directory) {

        const parent = this;

        const header = new Header();
        this.elements.push(header);
        this.buttons = []

        const panel = new Div().setStyle("container-files");
        panel.addEvent("click", function (event) {
            if (event.which === 3) {
                console.log("Right Mouse Button")
            }

            if (event.srcElement !== panel.getDOM()) {
                return
            }

            const popup = new FilePopup().setAttribute("top", (event.pageY - 16) + "px");
            popup.setAttribute("left", (event.pageX - 16) + "px");
            document.createPopup(popup, panel);
        })

        this.panel = panel;
        document.addFileListener(this)

        const files = document.files

        Object.entries(files).forEach(([key, value]) => {
           parent.fileCreateNotify(value);
        });

        this.elements.push(panel);
    }

    fileCreateNotify(file) {
        const fileButton = new FileButton(file)
        this.buttons[file.uid] = fileButton
        this.panel.append(fileButton)
    }

    fileUpdateNotify(file) {
        this.buttons[file.uid].updateFile(file)
    }

}