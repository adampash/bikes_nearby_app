function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mapview = Alloy.Globals.Map.createView({
        top: 0,
        height: "170dp",
        id: "mapview",
        ns: "Alloy.Globals.Map",
        animate: "true"
    });
    $.__views.index.add($.__views.mapview);
    $.__views.stations = Ti.UI.createView({
        top: "170dp",
        bottom: 0,
        layout: "vertical",
        id: "stations"
    });
    $.__views.index.add($.__views.stations);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        id: "__alloyId0"
    });
    $.__views.stations.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "5",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "DeKalb Ave & S Portland Ave",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "1 min",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        id: "__alloyId4"
    });
    $.__views.stations.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "20",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "Lafayette Ave & Fort Greene Pl",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "5 min",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var activateStation, dropMarker, locate_bikes, zoomToFit;
    zoomToFit = function(map, locations) {
        var delta, lgDiff, location, ltDiff, maxLati, maxLongi, minLati, minLongi, total_locations, _i, _len;
        total_locations = locations.length;
        for (_i = 0, _len = locations.length; _len > _i; _i++) {
            location = locations[_i];
            Ti.API.info(location);
            ("undefined" == typeof minLati || null === minLati || minLati > location.latitude) && (minLati = location.latitude);
            ("undefined" == typeof minLongi || null === minLongi || minLongi > location.longitude) && (minLongi = location.longitude);
            ("undefined" == typeof maxLati || null === maxLati || location.latitude > maxLati) && (maxLati = location.latitude);
            ("undefined" == typeof maxLongi || null === maxLongi || location.longitude > maxLongi) && (maxLongi = location.longitude);
        }
        ltDiff = maxLati - minLati;
        lgDiff = maxLongi - minLongi;
        delta = ltDiff > lgDiff ? ltDiff : lgDiff;
        if (total_locations > 0 && delta > 0) return map.setLocation({
            animate: true,
            latitude: (maxLati + minLati) / 2,
            longitude: (maxLongi + minLongi) / 2,
            latitudeDelta: 2 * delta,
            longitudeDelta: 2 * delta
        });
    };
    dropMarker = function(station) {
        station = Alloy.Globals.Map.createAnnotation({
            latitude: station.latitude,
            longitude: station.longitude,
            title: station.stationName,
            subtitle: station.availableBikes + " bikes; " + station.availableDocks + " docks",
            pincolor: Alloy.Globals.Map.ANNOTATION_RED,
            myid: 1
        });
        return $.mapview.addAnnotation(station);
    };
    activateStation = function(station, index) {
        console.log("activate station " + index);
        dropMarker(station);
        return zoomToFit($.mapview, [ this.location.coords, station ]);
    };
    locate_bikes = require("locate_bikes").bikes;
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.purpose = "Find the bikes nearest to you";
    Ti.Geolocation.getCurrentPosition(function(location) {
        this.location = location;
        return locate_bikes.fetchBikesNear(this.location, function() {
            return function(closestStations) {
                Ti.API.info("Closest Stations! ", closestStations);
                return activateStation(closestStations[0], 0);
            };
        }(this));
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;