# modified from https://gist.github.com/clauswitt/1604972

unless Number.prototype.toRad?
    Number.prototype.toRad = ->
        @ * Math.PI / 180

((exports) ->
  distance =
    getDistance: (to, from, decimals) ->
      decimals = decimals || 2
      earthRadius = 6371 # km
      lat1 = parseFloat(to.latitude)
      lat2 = parseFloat(from.latitude)
      lon1 = parseFloat(to.longitude)
      lon2 = parseFloat(from.longitude)

      dLat = (lat2 - lat1).toRad()
      dLon = (lon2 - lon1).toRad()
      lat1 = lat1.toRad()
      lat2 = lat2.toRad()

      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      d = earthRadius * c
      (Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals))*1000

    metersToMiles: (distInMeters) ->
      metersInMile = 1609.34
      distInMeters / metersInMile

  exports.distance = distance
)(if typeof exports == 'undefined' then @ else exports)
