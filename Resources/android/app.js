var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Map = require("ti.map");

Ti.API.debug("Google Play available???");

var gpAvailable = Alloy.Globals.Map.isGooglePlayServicesAvailable();

gpAvailable == Alloy.Globals.Map.SUCCESS ? Ti.API.debug("SUCCESS") : gpAvailable == Alloy.Globals.Map.SERVICE_MISSING ? Ti.API.debug("MISSING") : Ti.API.debug("SOMETHING ELSE");

Alloy.createController("index");