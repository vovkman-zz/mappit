
// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "mappit") {
        console.log("mappit was clicked.");

        chrome.tabs.executeScript(tab.id, {
            code: 'var address = "' + info["selectionText"] + '";' // inject the address variable beforehand
        }, function() {
            chrome.tabs.executeScript(tab.id, {file: 'new_content_script.js'});
        });
    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu item at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title" : "mappit", "id": "mappit", "contexts" :["selection"]});
    console.log("Created mappit menu item.");
});



// HTML API key: AIzaSyBYrE1eJS0bbprf3-87rihnx-kYJcK40xI
// JS API key v1: AIzaSyD0n19aMeQbPiWHFTc08PiNNjf4v7ZXgHQ
// JS API key v2: AIzaSyBWoNVGJjs5ycMz5t4jcoooClLGGwotOls



