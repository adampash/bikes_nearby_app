((exports) ->
  distance = require('distance').distance
  $ = require('_helpers').$
  bikes =
    bikeShares: [
      city: 'New York City'
      url: 'http://www.citibikenyc.com/stations/json'
      latitude: 40.7127
      longitude: -74.0059
    ,
      city: 'Chicago'
      url: 'http://www.divvybikes.com/stations/json'
      latitude: 41.8819
      longitude: -87.6278
    ,
      city: 'San Francisco'
      url: 'https://www.bayareabikeshare.com/stations/json'
      latitude: 37.7833
      longitude: -122.4167
    ,
      city: 'Columbus'
      url: 'http://www.cogobikeshare.com/stations/json'
      latitude: 39.9833
      longitude: -82.9833
    ,
      city: 'Aspen'
      url: 'https://www.we-cycle.org/pbsc/stations.php'
      latitude: 39.1922
      longitude: -106.8244
    ,
      city: 'Chattanooga'
      url: 'http://www.bikechattanooga.com/stations/json'
      latitude: 35.0456
      longitude: -85.2672
    ]
    simpleDistance: (coords, station) ->
      Math.abs(coords.latitude - station.latitude) + Math.abs(coords.longitude - station.longitude)

    findNearestStation: (coords) ->
      # Harlan, IA
      # coords =
      #   latitude: 41.6547
      #   longitude: 95.3219
      # Chicago
      # coords =
      #   latitude: 41.9028099
      #   longitude: -87.6278
      # San Francisco
      # coords =
      #   latitude: 37.7833
      #   longitude: -122.4167
      # Columbus
      # coords =
      #   latitude: 39.9833
      #   longitude: -82.9833
      # Aspen
      # coords =
      #   latitude: 39.1922
      #   longitude: -106.8244
      # Chattanooga
      # coords =
      #   latitude: 35.0456
      #   longitude: -85.2672



      @bikeShares.sort (city1, city2) =>
        @simpleDistance(coords, city1) - @simpleDistance(coords, city2)

      bikeJSON = @bikeShares[0].url

      $.ajax
        url: bikeJSON
        dataType: 'json'
        crossDomain: true
        success: (data) =>
          bikeStations = data.stationBeanList
          bikeStations.sort (station1, station2) =>
            @simpleDistance(coords, station1) - @simpleDistance(coords, station2)
            # station2.stationName.length - station1.stationName.length
          closestStations = []
          if distance.getDistance(bikeStations[0], coords) > 48280
            closestStations = false
          else
            for i in [0..4]
              station = bikeStations[i]
              station.distanceInMiles = distance.metersToMiles(
                  distance.getDistance(station, coords)
              )
              closestStations.push station

          # if you're over 30 miles (48280.3m) from the closest station return false
          @callback closestStations, coords if @callback?

    fetchBikesNear: (position, callback) ->
      @callback = callback if callback?
      bikes = @findNearestStation(position.coords)

    getBikeData: (@callback) ->
      navigator.geolocation.getCurrentPosition (position) =>
        @fetchBikesNear(position)

  exports.bikes = bikes
)(if typeof exports == 'undefined' then @ else exports)
