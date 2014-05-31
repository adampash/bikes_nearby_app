// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.Map = require('ti.map');
if (OS_ANDROID) {
  Ti.API.debug("Google Play available???");
  var gpAvailable = Alloy.Globals.Map.isGooglePlayServicesAvailable()
  if (gpAvailable == Alloy.Globals.Map.SUCCESS) {
    Ti.API.debug("SUCCESS");
  }
  else if (gpAvailable == Alloy.Globals.Map.SERVICE_MISSING) {
    Ti.API.debug("MISSING");
  }
  else {
    Ti.API.debug("SOMETHING ELSE");
  }
}
