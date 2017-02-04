var geocoder, map;

function initMap() {
    geocoder = new google.maps.Geocoder();

    window.addEventListener('message', function(event) {
        var address = event.data.text;
        console.log('Embedded javascript got message:', address);

        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var myOptions = {
                    zoom: 8,
                    center: results[0].geometry.location
                };
                map = new google.maps.Map(document.getElementById("map"), myOptions);

                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            }
        });
    });
}

