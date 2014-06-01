var $, dev, log;

dev = true;

log = function() {
    var arg, index, _i, _len, _results;
    if (dev) {
        _results = [];
        for (index = _i = 0, _len = arguments.length; _len > _i; index = ++_i) {
            arg = arguments[index];
            _results.push(Ti.API.info(index + 1 + ":", arg));
        }
        return _results;
    }
};

$ = {
    ajax: function(options) {
        var client;
        options || (options = {});
        client = Ti.Network.createHTTPClient({
            onload: function() {
                return function(e) {
                    var data;
                    data = e.source.responseText;
                    "json" === options.dataType && (data = JSON.parse(data));
                    return options.success(data);
                };
            }(this),
            onerror: function() {
                return function() {
                    if (null != options.error) return options.error();
                };
            }(this),
            timeout: options.timeout || 5e3
        });
        client.open("GET", options.url);
        return client.send();
    }
};

exports.log = log;

exports.$ = $;