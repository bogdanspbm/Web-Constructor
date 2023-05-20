import {GroupStructure} from "../objects/GroupStructure.js";


export function bindGroupListener() {
    document.groupsStructures = {};

    document.createGroup = function () {
        const group = new GroupStructure();
        document.groupsStructures[group.getUID()] = group;
        notifyGroupCreateListener(group);
        return group;
    }

    document.updateGroup = function (update) {
        const group = update.getElement();
        document.groupsStructures[group.getUID()] = group;
        notifyGroupUpdateListener(update);
    }

    document.groupListeners = [];
    document.addGroupListener = addGroupListener;
}

function addGroupListener(listener) {
    document.groupListeners.push(listener)
}

function notifyGroupCreateListener(group) {
    for (let i = 0; i < document.groupListeners.length; i++) {
        const listener = document.groupListeners[i];
        if (typeof listener.groupCreateNotify === "function") {
            listener.groupCreateNotify(group);
        }
    }
}

function notifyGroupUpdateListener(update) {
    for (let i = 0; i < document.groupListeners.length; i++) {
        const listener = document.groupListeners[i];
        if (typeof listener.groupUpdateNotify === "function") {
            listener.groupUpdateNotify(update);
        }
    }
}