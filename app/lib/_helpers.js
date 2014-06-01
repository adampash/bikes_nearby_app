var $, dev, log;

dev = true;

log = function(args) {
  if (dev) {
    return console.log.apply(console, arguments);
  }
};

$ = {
  ajax: function(options) {
    var client;
    options || (options = {});
    client = Ti.Network.createHTTPClient({
      onload: (function(_this) {
        return function(e) {
          var data;
          data = e.source.responseText;
          if (options.dataType === 'json') {
            data = JSON.parse(data);
          }
          return options.success(data);
        };
      })(this),
      onerror: (function(_this) {
        return function(e) {
          if (options.error != null) {
            return options.error();
          }
        };
      })(this),
      timeout: options.timeout || 5000
    });
    client.open("GET", options.url);
    return client.send();
  }
};

exports.log = log;

exports.$ = $;

//# sourceMappingURL=_helpers.js.map
