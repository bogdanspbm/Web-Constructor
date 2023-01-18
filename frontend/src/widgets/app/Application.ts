import {ToolsPanel} from "../tools/ToolsPanel";

export class Application {

    root: HTMLElement

    constructor(root: HTMLElement) {
        this.root = root
        this.draw()
    }

    draw() {
        this.drawTools()
    }

    drawTools() {
        this.root.appendChild(ToolsPanel.prototype.getDOM())
    }
}
