import { combineReducers } from 'redux';
import TrainReducer from './TrainReducer';
import StopReducer from './StopReducer';
import FeedIdReducer from './FeedIdReducer';

export default combineReducers({
  train: TrainReducer,
  arrivingTrains: StopReducer,
  feedId: FeedIdReducer
});