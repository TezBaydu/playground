let map;

// Brixton co-ordinates

function initMap() {
  map = new google.maps.Map(document.getElementById("maps-frame"), {
    center: { lat: 51.466, lng: -0.106 },
    zoom: 12
  });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 51.474,
            lng: -0.069
        },
        {
            lat: 51.441,
            lng: -0.012
        },
        {
            lat: 51.466,
            lng: -0.106
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}