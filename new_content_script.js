var newDiv = document.createElement("div");
newDiv.setAttribute("id", "mappit-unique-root");
newDiv.setAttribute("class", "mappit-unique-root");

var jQuery = document.createElement("script");
jQuery.setAttribute("src", chrome.extension.getURL("jquery.js"));

var bootstrapJs = document.createElement("script");
bootstrapJs.setAttribute("src", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");

var bootstrapCss = document.createElement("link");
bootstrapCss.setAttribute("rel", "stylesheet");
bootstrapCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

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
(document.head || document.documentElement).appendChild(jQuery);
(document.head || document.documentElement).appendChild(bootstrapJs);
(document.head || document.documentElement).appendChild(bootstrapCss);
