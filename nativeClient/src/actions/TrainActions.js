import { STOPS_LIST } from './types';
var stations = require('../assets/stops_w_comments.json');
import { Actions } from 'react-native-router-flux';


export const getTrainStops = (line) => {
  return {
    type: STOPS_LIST,
    payload: getStops(line)
  }
}

const getStops = line => {
  let train_stops;
  let stops_array = stations.features;
  
  train_stops = stops_array.filter((stop) => {
    if(stop.properties.Routes_ALL && stop.properties.Routes_ALL.includes(line)) {
      return stop;
    }
  });
  if (train_stops) {
    Actions.stopsList();
    return train_stops;
  }
}