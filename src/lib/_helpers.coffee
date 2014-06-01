dev = true
log = (args) ->
  if dev
    for arg, index in arguments
      Ti.API.info  index + 1 + ':', arg

$ =
  ajax: (options) ->
    options ||= {}
    client = Ti.Network.createHTTPClient
      onload: (e) =>
        data = e.source.responseText
        if options.dataType is 'json'
          data = JSON.parse data
        options.success(data)
      onerror: (e) =>
        options.error() if options.error?
      timeout : options.timeout || 5000  # in milliseconds

    client.open("GET", options.url)
    client.send()

exports.log = log
exports.$ = $
