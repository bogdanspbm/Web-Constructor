export function bindPageListener() {
    document.pages = [];

    document.openPage = function (page) {
        document.page = page
        document.grid = page.getGrid()
        document.panelDOM.removeChild(document.panelDOM.children[1])
        document.panelDOM.insertBefore(document.grid.getDOM(), document.panelDOM.children[1]);
        notifyPageChangeListener(page)
    }

    document.updatePage = function (page) {
        document.pages[page.uid] = page
        notifyPageChangeListener(page)
    }

    document.createPage = function (page) {
        document.pages[page.uid] = page
        notifyPageCreateListener(page)
    }

    document.pageListeners = [];
    document.addPageListener = addPageListener;
}

function addPageListener(listener) {
    document.pageListeners.push(listener)
}

function notifyPageChangeListener(event) {
    for (let i = 0; i < document.pageListeners.length; i++) {
        const listener = document.pageListeners[i];
        if (typeof listener.pageChangeNotify === "function") {
            listener.pageChangeNotify(event);
        }
    }
}

function notifyPageCreateListener(event) {
    for (let i = 0; i < document.pageListeners.length; i++) {
        const listener = document.pageListeners[i];
        if (typeof listener.pageCreateNotify === "function") {
            listener.pageCreateNotify(event);
        }
    }
}