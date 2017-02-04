
// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "mappit") {
        console.log("mappit was clicked.");
        //alert(info["selectionText"]);

        chrome.tabs.executeScript(null, {file: "content_script.js"});

    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title" : "mappit", "id": "mappit", "contexts" :["selection"]});
    console.log("Created mappit menu item.");
});



// HTML API key: AIzaSyBYrE1eJS0bbprf3-87rihnx-kYJcK40xI
// JS API key: AIzaSyD0n19aMeQbPiWHFTc08PiNNjf4v7ZXgHQ



