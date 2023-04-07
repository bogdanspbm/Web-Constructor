import {DOM} from "../../../../elements/dom/DOM.js";
import {Icon} from "../../../../elements/icon/Icon.js";
import {Button} from "../../../../elements/default/Button.js";
import {EditorPageStructure} from "../../../../objects/EditorPageStructure.js";

export class PageButton extends Button {

    /**
     * @param {EditorPageStructure} page
     */
    constructor(page) {
        super();

        if (page === undefined) {
            page = new EditorPageStructure()
        }

        this.page = page
        this.setText(page.getName())

        this.registerPage()

        const parent = this
        this.addClickEvent(() => {
            console.log(parent.page.getUID())
            document.openPage(parent.page)
        })


        // Rename on Double Click
        this.element.addEventListener("dblclick", function (e) {
                if (parent.header.element.innerHTML === "Untitled") {
                    parent.header.element.innerHTML = ""
                }

                parent.header.setTag("contenteditable", "true")
                parent.header.element.focus()


                parent.header.element.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        const newName = parent.header.element.innerHTML
                        parent.page.name = newName
                        parent.header.setTag("contenteditable", "false")
                        document.updatePage(parent.page)
                    }
                });

                parent.header.element.addEventListener("focusout", (event) => {
                    const newName = parent.header.element.innerHTML
                    parent.page.name = newName
                    parent.header.setTag("contenteditable", "false")
                    document.updatePage(parent.page)
                });
            }
        )
    }

    registerPage() {
        document.addPageListener(this)

        if (document.page !== undefined) {
            return
        }

        document.openPage(this.page)
    }

    createElement() {
        super.createElement();
        this.setStyle("toolbar-list-button")

        this.logo = new Icon("./../resources/icons/ic_check_16x16.svg").setAttribute("margin-right", "10px").setAttribute("visibility", "hidden")
        this.append(this.logo)

        this.header = new DOM().setStyle("small-header")
        this.append(this.header)
    }

    setText(text) {
        this.header.setText(text)
        return this
    }

    pageChangeNotify(event) {
        if (event.getUID() === this.page.uid) {
            this.logo.setAttribute("visibility", "visible")
        } else {
            this.logo.setAttribute("visibility", "hidden")
        }
    }
}