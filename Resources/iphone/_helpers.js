var $, dev, log;

dev = true;

log = function() {
    if (dev) return console.log.apply(console, arguments);
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