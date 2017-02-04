
// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "mappit") {
        console.log("mappit was clicked.");
        alert(info["selectionText"]);
    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title" : "mappit", "id": "mappit", "contexts" :["selection"]});
    console.log("Created mappit menu item.");
});