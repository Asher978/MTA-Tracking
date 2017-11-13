var stations = require('../assets/stops_w_comments.json');

class Train {

  static stops_by_line (line) {
    var train_stops;
    var stops_array = stations.features;

    train_stops = stops_array.filter((stop) => {
      if(stop.properties.Routes_ALL && stop.properties.Routes_ALL.includes(line)) {
        return stop
      }
    });
    return train_stops;
  }
}

export default Train;