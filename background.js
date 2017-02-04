
// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "mappit") {
        console.log("mappit was clicked.");
        //alert(info["selectionText"]);

        chrome.windows.create({"url" : "https://www.google.com/maps/embed/v1/place?key=AIzaSyBYrE1eJS0bbprf3-87rihnx-kYJcK40xI    &q=" + info["selectionText"],
            "height" : 300, "width" : 500, "type" : "popup"})
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



