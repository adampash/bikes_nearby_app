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
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var doClick, locate_bikes;
    doClick = function() {
        return alert($.label.text);
    };
    locate_bikes = require("locate_bikes").bikes;
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.purpose = "Find the bikes nearest to you";
    Ti.Geolocation.getCurrentPosition(function(location) {
        return locate_bikes.fetchBikesNear(location, function() {
            return function(closestStations) {
                Ti.API.info("Closest Stations! ", closestStations);
                return alert(closestStations[0].stationName);
            };
        }(this));
    });
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;