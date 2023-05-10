import {WidgetFile} from "../pages/implementation/filesystem/file/implementations/WidgetFile.js";
import {DirectoryFile} from "../pages/implementation/filesystem/file/implementations/DirectoryFile.js";
import {CollectionFile} from "../pages/implementation/filesystem/file/implementations/CollectionFile.js";
import {EFileType} from "../enums/EFileType.js";

export function bindFileListener() {
    document.files = {};


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

    }
}