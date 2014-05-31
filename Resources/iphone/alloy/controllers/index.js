function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        navBarHidden: true,
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
        animate: "true",
        mapType: "Alloy.Globals.Map.NORMAL_TYPE"
    });
    $.__views.index.add($.__views.mapview);
    $.__views.stations = Ti.UI.createView({
        top: "170dp",
        bottom: 0,
        layout: "vertical",
        id: "stations"
    });
    $.__views.index.add($.__views.stations);
    $.__views.firstStation = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        stationId: "0",
        id: "firstStation"
    });
    $.__views.stations.add($.__views.firstStation);
    focusStation ? $.__views.firstStation.addEventListener("click", focusStation) : __defers["$.__views.firstStation!click!focusStation"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "",
        id: "__alloyId0"
    });
    $.__views.firstStation.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "Loading...",
        id: "__alloyId1"
    });
    $.__views.firstStation.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "",
        id: "__alloyId2"
    });
    $.__views.firstStation.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "1dp",
        backgroundColor: "rgb(180, 180, 180)",
        width: Ti.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.stations.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        stationId: "1",
        id: "__alloyId4"
    });
    $.__views.stations.add($.__views.__alloyId4);
    focusStation ? $.__views.__alloyId4.addEventListener("click", focusStation) : __defers["$.__views.__alloyId4!click!focusStation"] = true;
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
        text: "",
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
        text: "",
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
        text: "",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: "1dp",
        backgroundColor: "rgb(180, 180, 180)",
        width: Ti.UI.FILL,
        id: "__alloyId8"
    });
    $.__views.stations.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        stationId: "2",
        id: "__alloyId9"
    });
    $.__views.stations.add($.__views.__alloyId9);
    focusStation ? $.__views.__alloyId9.addEventListener("click", focusStation) : __defers["$.__views.__alloyId9!click!focusStation"] = true;
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: "1dp",
        backgroundColor: "rgb(180, 180, 180)",
        width: Ti.UI.FILL,
        id: "__alloyId13"
    });
    $.__views.stations.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        stationId: "3",
        id: "__alloyId14"
    });
    $.__views.stations.add($.__views.__alloyId14);
    focusStation ? $.__views.__alloyId14.addEventListener("click", focusStation) : __defers["$.__views.__alloyId14!click!focusStation"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: "1dp",
        backgroundColor: "rgb(180, 180, 180)",
        width: Ti.UI.FILL,
        id: "__alloyId18"
    });
    $.__views.stations.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "composite",
        height: "60dp",
        stationId: "4",
        id: "__alloyId19"
    });
    $.__views.stations.add($.__views.__alloyId19);
    focusStation ? $.__views.__alloyId19.addEventListener("click", focusStation) : __defers["$.__views.__alloyId19!click!focusStation"] = true;
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: "45dp",
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "15dp",
        left: "10dp",
        font: {
            fontSize: "30dp"
        },
        textAlign: "center",
        text: "",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: "200dp",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "25dp",
        font: {
            fontSize: "14dp"
        },
        text: "",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0000FF",
        top: "25dp",
        right: "15dp",
        font: {
            fontSize: "12dp"
        },
        text: "",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var activateStation, dropMarker, focusStation, locate_bikes, myLocation, nearestStations, zoomToFit;
    focusStation = function() {
        var station, _i, _len, _ref;
        _ref = $.stations.children;
        for (_i = 0, _len = _ref.length; _len > _i; _i++) {
            station = _ref[_i];
            station.setOpacity(.5);
        }
        this.setOpacity(1);
        return activateStation(nearestStations[this.stationId], this.stationId);
    };
    zoomToFit = function(map, locations) {
        var delta, lgDiff, location, ltDiff, maxLati, maxLongi, minLati, minLongi, total_locations, _i, _len;
        total_locations = locations.length;
        for (_i = 0, _len = locations.length; _len > _i; _i++) {
            location = locations[_i];
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
        $.mapview.removeAllAnnotations();
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
    activateStation = function(station) {
        dropMarker(station);
        return zoomToFit($.mapview, [ myLocation.coords, station ]);
    };
    locate_bikes = require("locate_bikes").bikes;
    nearestStations = [];
    myLocation = null;
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.purpose = "Find the bikes nearest to you";
    Ti.Geolocation.getCurrentPosition(function(location) {
        this.location = location;
        myLocation = this.location;
        Ti.API.info(JSON.stringify(this.location));
        return locate_bikes.fetchBikesNear(this.location, function() {
            return function(closestStations) {
                var index, station, thisStation, _i, _len, _ref;
                nearestStations = closestStations;
                _ref = $.stations.children;
                for (index = _i = 0, _len = _ref.length; _len > _i; index = _i += 2) {
                    station = _ref[index];
                    thisStation = nearestStations[index / 2];
                    station.children[0].text = thisStation.availableBikes;
                    station.children[1].text = thisStation.stationName;
                }
                return $.firstStation.fireEvent("click");
            };
        }(this));
    });
    $.index.open();
    __defers["$.__views.firstStation!click!focusStation"] && $.__views.firstStation.addEventListener("click", focusStation);
    __defers["$.__views.__alloyId4!click!focusStation"] && $.__views.__alloyId4.addEventListener("click", focusStation);
    __defers["$.__views.__alloyId9!click!focusStation"] && $.__views.__alloyId9.addEventListener("click", focusStation);
    __defers["$.__views.__alloyId14!click!focusStation"] && $.__views.__alloyId14.addEventListener("click", focusStation);
    __defers["$.__views.__alloyId19!click!focusStation"] && $.__views.__alloyId19.addEventListener("click", focusStation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;