import {Page} from "../Page.js";
import {Header} from "../../widgets/header/Header.js";
import {Div} from "../../elements/dom/DOM.js";
import {FileButton} from "../../widgets/file/FileButton.js";
import {WidgetFile} from "../../widgets/file/implementations/WidgetFile.js";
import {DirectoryFile} from "../../widgets/file/implementations/DirectoryFile.js";
import {EditorPageStructure} from "../../objects/EditorPageStructure.js";
import {FilePopup} from "../../popups/implementation/FilePopup.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */


    fillElements(directory) {

        const header = new Header();
        this.elements.push(header);
        this.buttons = []

        const panel = new Div().setStyle("container").setAttribute("margin", "8px");
        panel.addEvent("click", function (event) {
            if (event.which === 3) {
                console.log("Right Mouse Button")
            }


            const popup = new FilePopup().setAttribute("top", (event.pageY - 16) + "px");
            popup.setAttribute("left", (event.pageX - 16) + "px");
            document.createPopup(popup, panel);
        })

        this.panel = panel;

        document.addFileListener(this)

        document.addFile(new WidgetFile(new EditorPageStructure()))
        document.addFile(new DirectoryFile())

        this.elements.push(panel);
    }

    fileCreateNotify(file) {
        const fileButton = new FileButton(file)
        this.buttons[file.uid] = fileButton
        this.panel.append(fileButton)
        console.log(fileButton)
    }

    fileUpdateNotify(file) {
        this.buttons[file.uid].updateFile(file)
    }

}