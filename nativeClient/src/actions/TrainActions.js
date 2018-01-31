import { STOPS_LIST, FEED_ID, TRAIN_FETCH, TRAIN_FETCH_SUCCESS, TOGGLE_MODAL } from './types';
var stations = require('../assets/stops_w_comments.json');
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const getTrainStops = (line) => {
  return {
    type: STOPS_LIST,
    payload: getStops(line)
  }
}

export const getFeedId = line => {
  return {
    type: FEED_ID,
    payload: decideFeed(line)
  }
}

export const trainFetch = (stop, feed_id) => {
  return (dispatch) => {
    dispatch({ type: TRAIN_FETCH });
    axios.post('http://localhost:3001/mta', {
      stop, 
      feed_id
    })
      .then(res => trainFetchSuccess(dispatch, res.data))
      .catch(err => {
      console.log(err);
    })
  };

};

export const toggleModal = () => {
  return { type: TOGGLE_MODAL }
}

const trainFetchSuccess = (dispatch, schedule) => {
  dispatch({
    type: TRAIN_FETCH_SUCCESS,
    payload: schedule
  })
}

const decideFeed = line => {
  let field = null;
  let a = line.toUpperCase();
  if (a === 'J' || a === 'Z') {
    field = 36;
    return field;
  } else if (a === 'A' || a === 'C' || a === 'E') {
    field = 26;
    return field;
  } else if (a === '1' || a === '2' || a === '3' || a === '4' || a === '5' || a === '6' || a === 'S') {
    field = 1;
    return field;
  } else if (a === 'N' || a === 'Q' || a === 'R' || a === 'W') {
    field = 16;
    return field;
  } else if (a === 'B' || a === 'D' || a === 'F' || a === 'M') {
    field = 21;
    return field;
  } else if (a === 'L') {
    field = 2;
    return field;
  } else if (a === 'G') {
    field = 31;
    return field;
  } else if (a === '7') {
    field = 51;
    return field;
  } else {
    field = null;
    return field;
  }
}

const getStops = line => {
  let stops_array = stations.features;
  
  let train_stops = stops_array.filter((stop) => {
    if(stop.properties.Routes_ALL && stop.properties.Routes_ALL.includes(line)) {
      return stop;
    }
  });
  if (train_stops) {
    Actions.stopsList();
    return train_stops;
  }
}