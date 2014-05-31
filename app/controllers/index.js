var doClick, locate_bikes;

doClick = function(e) {
  return alert($.label.text);
};

locate_bikes = require('locate_bikes').bikes;

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;

Ti.Geolocation.purpose = "Find the bikes nearest to you";

Ti.Geolocation.getCurrentPosition(function(location) {
  return locate_bikes.fetchBikesNear(location, (function(_this) {
    return function(closestStations) {
      Ti.API.info('Closest Stations! ', closestStations);
      return alert(closestStations[0].stationName);
    };
  })(this));
});

$.index.open();

//# sourceMappingURL=index.js.map
