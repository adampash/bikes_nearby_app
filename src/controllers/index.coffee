doClick = (e) ->
  alert($.label.text)

locate_bikes = require('locate_bikes').bikes

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST
Ti.Geolocation.purpose = "Find the bikes nearest to you"
Ti.Geolocation.getCurrentPosition (location) ->
  locate_bikes.fetchBikesNear(location, (closestStations) =>
    Ti.API.info 'Closest Stations! ', closestStations
    alert closestStations[0].stationName
  )

$.index.open()

