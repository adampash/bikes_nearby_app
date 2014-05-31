focusStation = (event) ->
  for station in $.stations.children
    station.setOpacity(0.5)
  this.setOpacity(1)
  activateStation(nearestStations[this.stationId], this.stationId)

zoomToFit = (map,locations) ->
  total_locations = locations.length

  for location in locations
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
  $.mapview.removeAllAnnotations()
  station = Alloy.Globals.Map.createAnnotation
    latitude:station.latitude,
    longitude:station.longitude,
    title:station.stationName,
    subtitle:station.availableBikes + ' bikes; ' + station.availableDocks + ' docks',
    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
    myid:1
  $.mapview.addAnnotation(station)

activateStation = (station, index) ->
  dropMarker(station)
  zoomToFit($.mapview, [@location.coords, station])
  # showInfoWindow(station)
  # drawPath(index)
  # $('.station').removeClass('active')
  # $('.station' + index).addClass('active')


locate_bikes = require('locate_bikes').bikes

nearestStations = []
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST
Ti.Geolocation.purpose = "Find the bikes nearest to you"
Ti.Geolocation.getCurrentPosition (@location) ->
  locate_bikes.fetchBikesNear @location, (closestStations) =>
    nearestStations = closestStations
    for station, index in $.stations.children by 2
      thisStation = nearestStations[index/2]
      station.children[0].text = thisStation.availableBikes
      station.children[1].text = thisStation.stationName
    $.firstStation.fireEvent 'click'

$.index.open()

