var newDiv = document.createElement("div");
newDiv.setAttribute("id", "root");

var newLink = document.createElement("link");
newLink.setAttribute("rel", "stylesheet");
newLink.setAttribute("href", chrome.extension.getURL("bundle.css"));

var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.extension.getURL("bundle.js"));
script.setAttribute("charset", "utf-8");


(document.body || document.documentElement).appendChild(newDiv);
(document.body || document.documentElement).appendChild(newLink);
(document.body || document.documentElement).appendChild(script);
