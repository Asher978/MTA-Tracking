import { STOPS_LIST } from '../actions/types';
const INITIAL_STATE = {
  stops: null
}
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case STOPS_LIST:
      return { ...state, stops: action.payload }
    default:
      return state;
  }
};