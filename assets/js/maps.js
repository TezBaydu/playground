// [START maps_infowindow_simple]
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const brixton = { lat: 51.466, lng: -0.106 };
  const map = new google.maps.Map(document.getElementById("maps-frame"), {
    zoom: 15,
    center: brixton,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: brixton,
    map,
    title: "Brxton Rocks",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

}
// [END maps_infowindow_simple]










/*let map;

// Brixton co-ordinates

function initMap() {
  map = new google.maps.Map(document.getElementById("maps-frame"), {
    center: { lat: 51.466, lng: -0.106 },
    zoom: 12
  });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
        coord: {
            lat: 51.474,
            lng: -0.069
        },
        //Marker content
        content: `<h4 class = "marker-head!>Hello You!</h4>
        <div class = "marker-image">
        <img src = "assets/images/gig-action.jpg">
        </div>`
    },
    {    coord: {
            lat: 51.441,
            lng: -0.012
        },
        //Marker content
        content: `<h4 class = "marker-head!>Hello You!</h4>
        <div class = "marker-image">
        <img src = "assets/images/gig-action.jpg">
        </div>`
    },
    {    coord: {
            lat: 51.466,
            lng: -0.106
        },
        //Marker content
        content: `<h4 class = "marker-head!>Hello You!</h4>
        <div class = "marker-image">
        <img src = "assets/images/gig-action.jpg">
        </div>`
    },
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location.coord,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP,
        });
        // Marker info window
        let infoWindow = new google.maps.InfoWindow ({
            content: locations[i].content,
        })
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
} */