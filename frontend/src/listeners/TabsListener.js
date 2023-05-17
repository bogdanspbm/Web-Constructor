export function bindTabsListener() {
    document.tabsListeners = {}
    document.notifyTabListener = notifyTabListener
    document.addTabsListeners = addTabListener
}

function addTabListener(listener, tabCode) {
    document.tabsListeners[tabCode] = listener;
}

function notifyTabListener(tabCode, tabType) {
    if (!document.tabsListeners[tabCode]) {
        return;
    }

    if (typeof document.tabsListeners[tabCode].tabChangeNotify !== "function") {
        return;
    }

    document.tabsListeners[tabCode].tabChangeNotify(tabType);
}