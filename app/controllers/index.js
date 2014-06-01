var activateStation, drawPath, dropMarker, focusStation, initialize, locate_bikes, myLocation, nearestStations, zoomToFit;

focusStation = function(event) {
  var station, _i, _len, _ref;
  _ref = $.stations.children;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    station = _ref[_i];
    station.setOpacity(0.5);
  }
  this.setOpacity(1);
  return activateStation(nearestStations[this.stationId], this.stationId);
};

zoomToFit = function(map, locations) {
  var delta, lgDiff, location, ltDiff, maxLati, maxLongi, minLati, minLongi, total_locations, _i, _len;
  total_locations = locations.length;
  for (_i = 0, _len = locations.length; _i < _len; _i++) {
    location = locations[_i];
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
  $.mapview.removeAllAnnotations();
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

drawPath = function(station) {
  var route, routePts;
  routePts = {
    points: [station, myLocation.coords],
    color: "blue",
    width: 4
  };
  route = Alloy.Globals.Map.createRoute(routePts);
  return $.mapview.addRoute(route);
};

activateStation = function(station, index) {
  dropMarker(station);
  return zoomToFit($.mapview, [myLocation.coords, station]);
};

locate_bikes = require('locate_bikes').bikes;

nearestStations = [];

myLocation = null;

initialize = function() {
  Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
  Ti.Geolocation.purpose = "Find the bikes nearest to you";
  return Ti.Geolocation.getCurrentPosition(function(location) {
    this.location = location;
    myLocation = this.location;
    Ti.API.info(JSON.stringify(this.location));
    return locate_bikes.fetchBikesNear(this.location, (function(_this) {
      return function(closestStations) {
        var index, station, thisStation, _i, _len, _ref;
        nearestStations = closestStations;
        _ref = $.stations.children;
        for (index = _i = 0, _len = _ref.length; _i < _len; index = _i += 2) {
          station = _ref[index];
          thisStation = nearestStations[index / 2];
          station.children[0].text = thisStation.availableBikes;
          station.children[1].text = thisStation.stationName;
        }
        return $.firstStation.fireEvent('click');
      };
    })(this));
  });
};

Ti.App.addEventListener('resumed', function() {
  return initialize();
});

setInterval(function() {
  return initialize();
}, 1000 * 60);

initialize();

$.index.open();

//# sourceMappingURL=index.js.map
