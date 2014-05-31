var dev, log;

dev = true;

log = function() {
    if (dev) return Ti.API.info.apply(console, arguments);
};

exports.log = log;