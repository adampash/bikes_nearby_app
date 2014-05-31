function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locate_bikes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    (function(exports) {
        var bikes;
        bikes = {
            bikeShares: [ {
                city: "New York City",
                url: "http://www.citibikenyc.com/stations/json",
                latitude: 40.7127,
                longitude: -74.0059
            }, {
                city: "Chicago",
                url: "http://www.divvybikes.com/stations/json",
                latitude: 41.8819,
                longitude: -87.6278
            }, {
                city: "San Francisco",
                url: "https://www.bayareabikeshare.com/stations/json",
                latitude: 37.7833,
                longitude: -122.4167
            }, {
                city: "Columbus",
                url: "http://www.cogobikeshare.com/stations/json",
                latitude: 39.9833,
                longitude: -82.9833
            }, {
                city: "Aspen",
                url: "https://www.we-cycle.org/pbsc/stations.php",
                latitude: 39.1922,
                longitude: -106.8244
            }, {
                city: "Chattanooga",
                url: "http://www.bikechattanooga.com/stations/json",
                latitude: 35.0456,
                longitude: -85.2672
            } ],
            simpleDistance: function(coords, station) {
                return Math.abs(coords.latitude - station.latitude) + Math.abs(coords.longitude - station.longitude);
            },
            findNearestStation: function(coords) {
                var bikeJSON;
                this.bikeShares.sort(function(_this) {
                    return function(city1, city2) {
                        return _this.simpleDistance(coords, city1) - _this.simpleDistance(coords, city2);
                    };
                }(this));
                debugger;
                bikeJSON = this.bikeShares[0].url;
                return $.ajax({
                    url: bikeJSON,
                    dataType: "json",
                    crossDomain: true,
                    success: function(_this) {
                        return function(data) {
                            var bikeStations, closestStations, i, station, _i;
                            log(data);
                            bikeStations = data.stationBeanList;
                            bikeStations.sort(function(station1, station2) {
                                return _this.simpleDistance(coords, station1) - _this.simpleDistance(coords, station2);
                            });
                            closestStations = [];
                            if (distance.getDistance(bikeStations[0], coords) > 48280) closestStations = false; else for (i = _i = 0; 4 >= _i; i = ++_i) {
                                station = bikeStations[i];
                                station.distanceInMiles = distance.metersToMiles(distance.getDistance(station, coords));
                                closestStations.push(station);
                            }
                            log("Nearest station is:", closestStations[0]);
                            if (null != _this.callback) return _this.callback(closestStations, coords);
                        };
                    }(this)
                });
            },
            fetchBikesNear: function(position) {
                log(position);
                return bikes = this.findNearestStation(position.coords);
            },
            getBikeData: function(callback) {
                this.callback = callback;
                return navigator.geolocation.getCurrentPosition(function(_this) {
                    return function(position) {
                        return _this.fetchBikesNear(position);
                    };
                }(this));
            }
        };
        return exports.bikes = bikes;
    })("undefined" == typeof exports ? this : exports);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;