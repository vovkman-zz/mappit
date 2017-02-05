/**
 * Created by liamvovk on 2017-02-05.
 */

function initMap() {
    var query = document.getSelection().toString();
    console.log(query);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': query }, function(results, status) {
        console.log("inside geocoder");
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results[0].geometry.location);
            var myOptions = {
                zoom: 8,
                center: results[0].geometry.location
            };
            map = new google.maps.Map(document.getElementById("map-wrapper"), myOptions);

            var marker = new google.maps.Marker({
               map: map,
               position: results[0].geometry.location
            });
            var infoWindow = new google.maps.InfoWindow({
                content: query
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        } else {
            var fail_node = document.createElement("div");
            fail_node.setAttribute("class", "map-fail jumbotron");
            fail_node.innerHTML = "Sorry, no results were found for the location of " + query + ".";
            document.getElementById("map-wrapper").appendChild(fail_node);
        }
    }.bind(this));
    // if (document.getElementById('map-wrapper') != null) {
    //     var map = new google.maps.Map(document.getElementById('map-wrapper'), {
    //         zoom: 17,
    //         center: {lat: -33.8666, lng: 151.1958}
    //     });

    //     var marker = new google.maps.Marker({
    //         map: map,
    //         // Define the place with a location, and a query string.
    //         place: {
    //             location: {lat: -33.8666, lng: 151.1958},
    //             query: 'Google, Sydney, Australia'

    //         },
    //         // Attributions help users find your site again.
    //         attribution: {
    //             source: 'Google Maps JavaScript API',
    //             webUrl: 'https://developers.google.com/maps/'
    //         }
    //     });

    //     // Construct a new InfoWindow.
    //     var infoWindow = new google.maps.InfoWindow({
    //         content: 'Google Sydney'
    //     });

    //     // Opens the InfoWindow when marker is clicked.
    //     marker.addListener('click', function() {
    //         infoWindow.open(map, marker);
    //     });
    // } else {
    //     console.log('bundlejs not loaded yet');
    // }
};