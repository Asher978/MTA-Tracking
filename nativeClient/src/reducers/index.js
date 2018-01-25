import { combineReducers } from 'redux';
import TrainReducer from './TrainReducer';

export default combineReducers({
  train: TrainReducer
});