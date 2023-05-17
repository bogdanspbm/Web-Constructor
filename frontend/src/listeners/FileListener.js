import {WidgetFile} from "../objects/files/implementation/WidgetFile.js";
import {DirectoryFile} from "../objects/files/implementation/DirectoryFile.js";
import {CollectionFile} from "../objects/files/implementation/CollectionFile.js";
import {EFileType} from "../enums/EFileType.js";
import {ScriptFile} from "../objects/files/implementation/ScriptFile.js";

export function bindFileListener() {
    document.files = {};

    document.findStructureByUID = function (uid) {
        if (uid in document.widgets) {
            return document.widgets[uid];
        }

        if (uid in document.collections) {
            return document.collections[uid];
        }

        if (uid in document.scriptsStructures) {
            return document.scriptsStructures[uid];
        }

        return undefined;
    }


    document.createFile = function (type) {
        const file = createFileFromType(type);
        document.files[file.getUID()] = file;
        notifyFileCreateListener(file);
        return file;
    }

    document.updateFile = function (file) {
        document.files[file.getUID()] = file;
        notifyFileUpdateListener(file);
    }

    document.fileListeners = [];
    document.addFileListener = addFileListener
}

function addFileListener(listener) {
    document.fileListeners.push(listener)
}

function notifyFileCreateListener(file) {
    for (let i = 0; i < document.fileListeners.length; i++) {
        const listener = document.fileListeners[i];
        if (typeof listener.fileCreateNotify === "function") {
            listener.fileCreateNotify(file);
        }
    }
}

function notifyFileUpdateListener(file) {
    for (let i = 0; i < document.fileListeners.length; i++) {
        const listener = document.fileListeners[i];
        if (typeof listener.fileUpdateNotify === "function") {
            listener.fileUpdateNotify(file);
        }
    }
}

/**
 * @param {EFileType} fileType
 * @returns {FileStructure}
 */
function createFileFromType(fileType) {
    switch (fileType) {
        case EFileType.WIDGET: {
            const widget = document.createWidget();
            return new WidgetFile(widget);
        }
        case EFileType.DIRECTORY: {
            return new DirectoryFile();
        }
        case EFileType.COLLECTION: {
            const collection = document.createCollection();
            return new CollectionFile(collection);
        }

        case EFileType.SCRIPT: {
            const script = document.createScript();
            return new ScriptFile(script);
        }

    }
}