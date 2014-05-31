var dev, log;

dev = true;

log = function(args) {
  if (dev) {
    return Ti.API.info.apply(console, arguments);
  }
};

exports.log = log;

//# sourceMappingURL=_helpers.js.map
