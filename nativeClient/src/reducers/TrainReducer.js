import { STOPS_LIST, FEED_ID } from '../actions/types';
const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case STOPS_LIST:
      return action.payload
    default:
      return state;
  }
};