swal("Iniciar viaje");

var map = new GMaps({
    div: '#map_route',
    lat: 19.40625197963351,
    lng: -99.16884183883667,
});

map.drawRoute({
  origin: [19.40625197963351, -99.16884183883667],
  destination: [19.44364858151638, -99.15931094437838],
  travelMode: 'driving',
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
