export function bindFileListener() {
    document.files = {};


    document.addFile = function (file) {
        document.files[file.getUID()] = file
        notifyFileCreateListener(file)
    }

    document.updateFile = function (file) {
        document.files[file.getUID()] = file
        notifyFileUpdateListener(file)
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