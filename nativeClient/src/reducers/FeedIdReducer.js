import { FEED_ID } from '../actions/types';

const INITIAL_STATE = {
  id: ''
}
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FEED_ID:
      return action.payload 
    default:
      return state;
  }
};