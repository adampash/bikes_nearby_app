dev = true
log = (args) ->
  if dev
    Ti.API.info.apply console,  arguments

exports.log = log
