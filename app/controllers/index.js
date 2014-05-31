var activateStation, dropMarker, locate_bikes, zoomToFit;

zoomToFit = function(map, locations) {
  var delta, lgDiff, location, ltDiff, maxLati, maxLongi, minLati, minLongi, total_locations, _i, _len;
  total_locations = locations.length;
  for (_i = 0, _len = locations.length; _i < _len; _i++) {
    location = locations[_i];
    Ti.API.info(location);
    if ((typeof minLati === "undefined" || minLati === null) || minLati > location.latitude) {
      minLati = location.latitude;
    }
    if ((typeof minLongi === "undefined" || minLongi === null) || minLongi > location.longitude) {
      minLongi = location.longitude;
    }
    if ((typeof maxLati === "undefined" || maxLati === null) || maxLati < location.latitude) {
      maxLati = location.latitude;
    }
    if ((typeof maxLongi === "undefined" || maxLongi === null) || maxLongi < location.longitude) {
      maxLongi = location.longitude;
    }
  }
  ltDiff = maxLati - minLati;
  lgDiff = maxLongi - minLongi;
  delta = ltDiff > lgDiff ? ltDiff : lgDiff;
  if (total_locations > 0 && delta > 0) {
    return map.setLocation({
      animate: true,
      latitude: (maxLati + minLati) / 2,
      longitude: (maxLongi + minLongi) / 2,
      latitudeDelta: delta * 2,
      longitudeDelta: delta * 2
    });
  }
};

dropMarker = function(station) {
  station = Alloy.Globals.Map.createAnnotation({
    latitude: station.latitude,
    longitude: station.longitude,
    title: station.stationName,
    subtitle: station.availableBikes + ' bikes; ' + station.availableDocks + ' docks',
    pincolor: Alloy.Globals.Map.ANNOTATION_RED,
    myid: 1
  });
  return $.mapview.addAnnotation(station);
};

activateStation = function(station, index) {
  console.log('activate station ' + index);
  dropMarker(station);
  return zoomToFit($.mapview, [this.location.coords, station]);
};

locate_bikes = require('locate_bikes').bikes;

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;

Ti.Geolocation.purpose = "Find the bikes nearest to you";

Ti.Geolocation.getCurrentPosition(function(location) {
  this.location = location;
  return locate_bikes.fetchBikesNear(this.location, (function(_this) {
    return function(closestStations) {
      Ti.API.info('Closest Stations! ', closestStations);
      return activateStation(closestStations[0], 0);
    };
  })(this));
});

$.index.open();

//# sourceMappingURL=index.js.map
