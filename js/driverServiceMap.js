var map = new GMaps({
    div: '#map_route',
    lat: -12.043333,
    lng: -77.028333
});

map.drawRoute({
  origin: [-12.044012922866312, -77.02470665341184],
  destination: [-12.090814532191756, -77.02271108990476],
  travelMode: 'driving',
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
