import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {FileButton} from "./file/FileButton.js";
import {FilePopup} from "../../../popups/implementation/FilePopup.js";

export class FileSystemPage extends Page {

    /**
     * @param {DirectoryStructure} directory
     */


    fillElements(directory) {
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

        this.drawFiles();

        this.elements.push(panel);
    }

    drawFiles() {
        const parent = this;
        document.addFileListener(this);
        const files = document.files;
        Object.entries(files).forEach(([key, value]) => {
            parent.fileCreateNotify(value);
        });
    }

    fileCreateNotify(file) {
        const fileButton = new FileButton(file);
        this.buttons[file.getUID()] = fileButton;
        this.panel.append(fileButton);
    }

    fileUpdateNotify(file) {
        this.buttons[file.getUID()].updateFile(file);
    }

}