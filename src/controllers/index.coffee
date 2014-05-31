zoomToFit = (map,locations) ->
  total_locations = locations.length

  for location in locations
    Ti.API.info location
    if !minLati? or minLati > location.latitude
      minLati = location.latitude
    if !minLongi? or minLongi > location.longitude
      minLongi = location.longitude
    if !maxLati? or maxLati < location.latitude
      maxLati = location.latitude
    if !maxLongi? or maxLongi < location.longitude
      maxLongi = location.longitude

  ltDiff = (maxLati-minLati)
  lgDiff = (maxLongi-minLongi)
  delta = if ltDiff>lgDiff then ltDiff else lgDiff

  if total_locations>0 && delta>0
    map.setLocation
      animate : true
      latitude:((maxLati+minLati)/2)
      longitude:((maxLongi+minLongi)/2)
      latitudeDelta:delta * 2
      longitudeDelta:delta * 2

dropMarker = (station) ->
  station = Alloy.Globals.Map.createAnnotation
    latitude:station.latitude,
    longitude:station.longitude,
    title:station.stationName,
    subtitle:station.availableBikes + ' bikes; ' + station.availableDocks + ' docks',
    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
    myid:1
  $.mapview.addAnnotation(station)

activateStation = (station, index) ->
  console.log 'activate station ' + index
  dropMarker(station)
  zoomToFit($.mapview, [@location.coords, station])
  # showInfoWindow(station)
  # drawPath(index)
  # $('.station').removeClass('active')
  # $('.station' + index).addClass('active')


locate_bikes = require('locate_bikes').bikes

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST
Ti.Geolocation.purpose = "Find the bikes nearest to you"
Ti.Geolocation.getCurrentPosition (@location) ->
  locate_bikes.fetchBikesNear @location, (closestStations) =>
    Ti.API.info 'Closest Stations! ', closestStations
    activateStation(closestStations[0], 0)

$.index.open()

