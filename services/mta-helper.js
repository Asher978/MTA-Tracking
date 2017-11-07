require('dotenv').config();
require('isomorphic-fetch');
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
var _ = require('underscore');


const MTA_API = process.env.mta_api;


// api call to mta using isomorphic fetch
let getData = (req, res, next) => {
  fetch(`http://datamine.mta.info/mta_esi.php?key=${MTA_API}&feed_id=${req.body.field_id}`)
  .then(fetchRes => {
    // console.log(fetchRes.body);
    var feed = GtfsRealtimeBindings.FeedMessage.decode(fetchRes.body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
    console.log(feed);
    next();
  }).then(jsonRes => {
    res.locals.mta = jsonRes
    next();
  }).catch(err => {
    console.log(err);
  })
}

// api call to mta using request
let getMta = (req, res, next) => {
  var data = [];
  var currentLine = `${req.body.line}`.toUpperCase();
  var requestSettings = {
    method: 'GET',
    url: `http://datamine.mta.info/mta_esi.php?key=${MTA_API}&feed_id=${req.body.field_id}`,
    encoding: null
  };
  request(requestSettings, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
      // console.log(feed);

      // filtering to show trip updates on a selected line
      var tripData = feed.entity;
      filteredTripData = _.filter(tripData, (tripData) => {
        if (tripData.trip_update) {
          return (tripData.trip_update.trip.route_id == currentLine);
        }
      });

      // feed.entity.forEach(function(entity) {
      //   if (entity) {
      //     console.log(entity.trip_update);
      //     data = entity
      //   }
      // });

    }
    // res.locals.mta = filteredTripData;
    res.locals.mta = filteredTripData;
    next();
  })
}



module.exports = { getData, getMta };