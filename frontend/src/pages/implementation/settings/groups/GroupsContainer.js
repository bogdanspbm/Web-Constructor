import {DOM} from "../../../../elements/dom/DOM.js";
import {CreateGroupButton} from "./widgets/CreateGroupButton.js";
import {GroupWidget} from "./widgets/GroupWidget.js";

export class GroupsContainer extends DOM {

    constructor(props) {
        super(props);
        document.addGroupListener(this);
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("group-container");

        const addButton = new CreateGroupButton();
        this.append(addButton);
    }

    groupCreateNotify(group) {
        const groupWidget = new GroupWidget({group: group});
        this.append(groupWidget, this.children.length - 1);
    }
}