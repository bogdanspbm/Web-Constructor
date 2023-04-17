export function bindCollectionListener() {
    document.collections = [];

    document.openCollection = function (collection) {
        document.collection = collection
        notifyCollectionChangeListener(collection)
    }

    document.updateCollection = function (collection) {
        document.collections[collection.uid] = collection
        notifyCollectionChangeListener(collection)
    }

    document.createCollection = function (collection) {
        document.collections[collection.uid] = collection
        notifyCollectionCreateListener(collection)
    }

    document.collectionListeners = [];
    document.addCollectionListener = addCollectionListener
}

function addCollectionListener(listener) {
    document.collectionListeners.push(listener)
}

function notifyCollectionChangeListener(event) {
    for (let i = 0; i < document.collectionListeners.length; i++) {
        const listener = document.collectionListeners[i];
        if (typeof listener.collectionChangeNotify === "function") {
            listener.collectionChangeNotify(event);
        }
    }
}

function notifyCollectionCreateListener(event) {
    for (let i = 0; i < document.collectionListeners.length; i++) {
        const listener = document.collectionListeners[i];
        if (typeof listener.collectionCreateNotify === "function") {
            listener.collectionCreateNotify(event);
        }
    }
}