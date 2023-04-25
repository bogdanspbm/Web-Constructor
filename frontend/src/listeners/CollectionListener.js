export function bindCollectionListener() {
    document.collections = {};

    document.openCollection = function (collection) {
        document.collection = collection
        notifyCollectionChangeListener(collection)
    }

    /**
     * @param {UpdateStructure} update
     */
    document.updateCollection = function (update) {
        const collection = update.getElement();
        document.collections[collection.getUID()] = collection
        notifyCollectionChangeListener(update)
    }

    document.createCollection = function (collection) {
        document.collections[collection.getUID()] = collection
        notifyCollectionCreateListener(collection)
    }

    document.collectionListeners = [];
    document.addCollectionListener = addCollectionListener
}

function addCollectionListener(listener) {
    document.collectionListeners.push(listener)
}

/**
 * @param {UpdateStructure} update
 */
function notifyCollectionChangeListener(update) {
    for (let i = 0; i < document.collectionListeners.length; i++) {
        const listener = document.collectionListeners[i];
        if (typeof listener.collectionChangeNotify === "function") {
            listener.collectionChangeNotify(update);
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