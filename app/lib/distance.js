if (Number.prototype.toRad == null) {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  };
}

(function(exports) {
  var distance;
  distance = {
    getDistance: function(to, from, decimals) {
      var a, c, d, dLat, dLon, earthRadius, lat1, lat2, lon1, lon2;
      decimals = decimals || 2;
      earthRadius = 6371;
      lat1 = parseFloat(to.latitude);
      lat2 = parseFloat(from.latitude);
      lon1 = parseFloat(to.longitude);
      lon2 = parseFloat(from.longitude);
      dLat = (lat2 - lat1).toRad();
      dLon = (lon2 - lon1).toRad();
      lat1 = lat1.toRad();
      lat2 = lat2.toRad();
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      d = earthRadius * c;
      return (Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals)) * 1000;
    },
    metersToMiles: function(distInMeters) {
      var metersInMile;
      metersInMile = 1609.34;
      return distInMeters / metersInMile;
    }
  };
  return exports.distance = distance;
})(typeof exports === 'undefined' ? this : exports);

//# sourceMappingURL=distance.js.map
