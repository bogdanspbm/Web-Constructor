import {WidgetFile} from "../objects/files/implementation/WidgetFile.js";
import {DirectoryFile} from "../objects/files/implementation/DirectoryFile.js";
import {CollectionFile} from "../objects/files/implementation/CollectionFile.js";
import {EFileType} from "../enums/EFileType.js";
import {ScriptFile} from "../objects/files/implementation/ScriptFile.js";
import {VectorStructure} from "../objects/VectorStructure.js";
import {VectorFile} from "../objects/files/implementation/VectorFile.js";

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
        const callback = (file) => {
            document.files[file.getUID()] = file;
            notifyFileCreateListener(file);
        }

        return createFileFromType(type, callback);
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
 * @param {function} callback
 * @returns {FileStructure}
 */
function createFileFromType(fileType, callback) {
    switch (fileType) {
        case EFileType.WIDGET: {
            const widget = document.createWidget();
            const file = new WidgetFile(widget);
            callback(file);
            return file;
        }
        case EFileType.DIRECTORY: {
            const file = new DirectoryFile();
            callback(file);
            return file;
        }
        case EFileType.COLLECTION: {
            const collection = document.createCollection();
            const file = new CollectionFile(collection);
            callback(file);
            return file;
        }
        case EFileType.VECTOR: {
            createVectorFile(callback);
            return undefined;
        }

        case EFileType.SCRIPT: {
            const script = document.createScript();
            const file = new ScriptFile(script)
            callback(file);
            return file;
        }

    }
}

function createVectorFile(callback) {
    const uploadFunction = function () {
        return new Promise(function (resolve, reject) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';

            fileInput.addEventListener('change', function () {
                const file = fileInput.files[0];
                const reader = new FileReader();

                reader.onload = function (event) {
                    const base64String = btoa(event.target.result);
                    resolve(base64String); // Resolve with the file contents as a string
                };

                reader.onerror = function (event) {
                    reject(event.target.error); // Reject with the error object
                };

                reader.readAsText(file);
            });

            fileInput.click();
        });
    };

    document.forceDeletePopup();

    uploadFunction().then(function (base64String) {
        const vector = new VectorStructure(base64String);
        const file = new VectorFile(vector);
        callback(file);
    }).catch(function (error) {

    });
}