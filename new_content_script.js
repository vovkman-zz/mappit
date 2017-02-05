var root_node = document.createElement("div");
root_node.setAttribute("id", "mappit-unique-root");
root_node.setAttribute("class", "mappit-unique-root");

var initMap = document.createElement("script");
initMap.setAttribute("src", chrome.extension.getURL("initMap.js"));
initMap.setAttribute("id", "initMap");

var jQuery = document.createElement("script");
jQuery.setAttribute("src", chrome.extension.getURL("jquery.js"));
jQuery.setAttribute("id", "jquery-plugin");

var google = document.createElement("script");
google.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0n19aMeQbPiWHFTc08PiNNjf4v7ZXgHQ&signed_in=true&callback=initMap");
google.setAttribute("async", "");
google.setAttribute("defer", "");
google.setAttribute("id", "google-api-extension");

var bootstrapJs = document.createElement("script");
bootstrapJs.setAttribute("src", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
bootstrapJs.setAttribute("id", "bootstrapJs-extension");

var bootstrapCss = document.createElement("link");
bootstrapCss.setAttribute("rel", "stylesheet");
bootstrapCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
bootstrapCss.setAttribute("id", "bootstrapCss-extension");

var bundlecss = document.createElement("link");
bundlecss.setAttribute("rel", "stylesheet");
bundlecss.setAttribute("href", chrome.extension.getURL("bundle.css"));
bundlecss.setAttribute("id", "bundlecss-extension");

var bundlejs = document.createElement("script");
bundlejs.setAttribute("type", "text/javascript");
bundlejs.setAttribute("src", chrome.extension.getURL("bundle.js"));
bundlejs.setAttribute("charset", "utf-8");
bundlejs.setAttribute("id", "bundlejs-extension");
bundlejs.onload = function() {
	console.log('bundlejs loaded');
	(document.body || document.documentElement).appendChild(initMap);
	var present = (document.getElementById('google-api-extension') != null) ? true : false;
	if (present) {
		(document.getElementById('google-api-extension')).parentNode.removeChild(document.getElementById('google-api-extension'));
	};
	(document.body || document.documentElement).appendChild(google);
}.bind(this);
(document.body || document.documentElement).appendChild(root_node);
(document.getElementById('bundlecss-extension') != null) ? console.log("elem exists") :(document.body || document.documentElement).appendChild(bundlecss);
(document.body || document.documentElement).appendChild(bundlejs);
(document.head || document.documentElement).appendChild(jQuery);
(document.getElementById('bootstrapJs-extension') != null) ? console.log("elem exists") :(document.head || document.documentElement).appendChild(bootstrapJs);
(document.getElementById('bootstrapCss-extension') != null) ? console.log("elem exists") :(document.head || document.documentElement).appendChild(bootstrapCss);


