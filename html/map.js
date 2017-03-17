// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: -33.9, lng: 151.2}
  });



// function initMap(){
//   var directionsDisplay= new google.maps.DirectionsRenderer;
//   var directionsService= new google.maps.directionsService;
//   var map= new google.maps.Map(document.getElementById('map'), {
//     zoom: 7,
//     center: {lat: 47.6181571, lng:  -122.3540385}
//   });
//   directionsDisplay.setMap(map);
//   directionsDisplay.setPanel(document.getElementById('right-panel'));
//
//
//
//   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var labelIndex = 0;
//
//   function initialize() {
//     var bangalore = { lat: 12.97, lng: 77.59 };
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: bangalore
//     });
//
//     // This event listener calls addMarker() when the map is clicked.
//     google.maps.event.addListener(map, 'click', function(event) {
//       addMarker(event.latLng, map);
//     });
//
//     // Add a marker at the center of the map.
//     addMarker(bangalore, map);
//   }
//
//   // Adds a marker to the map.
//   function addMarker(location, map) {
//     // Add the marker at the clicked location, and add the next-available label
//     // from the array of alphabetical characters.
//     var marker = new google.maps.Marker({
//       position: location,
//       label: labels[labelIndex++ % labels.length],
//       map: map
//     });
//   }
//
//   google.maps.event.addDomListener(window, 'load', initialize);


//   var control= document.getElementById('floating-panel');
//   control.style.display= 'block';
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
//
//   var onChangeHandler= function(){
//     calculateAndDisplayRoute(directionsService, directionsDisplay);
//   };
//   document.getElementById('start').addEventListener('change', onChangeHandler)
//   document.getElementById('end').addEventListener('change', onChangeHandler);
// }
// function calculateAndDisplayRoute(directionsService, directionsDisplay){
//   var start= document.getElementById('start').value;
//   var end= document.getElementById('end').value;
//   directionsService.route({
//     origin: start,
//     destination: end,
//     travelMode: 'DRIVING'
//   }, function(response, status){
//     if(status === 'OK'){
//       directionsDisplay.setDirections(reponse);
//     }else{
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// }
