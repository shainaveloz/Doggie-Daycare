// ---------------
// ---------------
// BEGIN MAPS
// ---------------
// ---------------

    var map;
    var service;
    var infowindow;

    function initMap() {
      var pyrmont = new google.maps.LatLng(28.5395456, -81.476595);

      map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

      infowindow = new google.maps.InfoWindow();
      var request = {
        location: pyrmont,
        radius: '500',
        query: 'dog_day_care'
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      console.log(place);
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

        google.maps.event.addListener(marker, 'click', function() {
          console.log(place);
          var reviews;
          if(place.rating == undefined) {
            reviews = "No reviews";
          } else {
            reviews = place.rating + " out of 5.";
          }

          infowindow.setContent(place.name + "<br>" + place.formatted_address
+ "<br>" + reviews);
          infowindow.open(map, this);
        });
      }
// ---------------
// ---------------
// END MAPS
// ---------------
// ---------------



$( document ).ready(function() {
$("#mapButton").on('click', function() {
  alert("test");
  initMap();
})





})