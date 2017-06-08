//PONIŻEJ JEST SKRYPT DO MAPY Z WYSZUKIWARKĄ
        
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.0614300, lng: 19.9365800},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
          
          var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

        // Utworzenie pola wyszukiwania i połączenie z mapa.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Przeszukuje wyniki SearchBox w kierunku aktualnej mapy.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
           
        // PONIŻEJ JEST SKRYPT DO ZWYKŁEJ MAPY
        
        function initMap() {
				var mapa = new google.maps.Map(document.getElementById('mapa'), {
					zoom: 13,
					center: {lat: 50.0614300, lng: 19.9365800}
				});

				var trafficLayer = new google.maps.TrafficLayer();
				trafficLayer.setMap(mapa);
			}

			function initMaps() {
				initAutocomplete();
				initMap();
			}
        