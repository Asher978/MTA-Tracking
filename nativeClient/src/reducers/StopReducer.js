import { TRAIN_FETCH, TRAIN_FETCH_SUCCESS, TOGGLE_MODAL } from '../actions/types';

const INITIAL_STATE = {
  schedule: null,
  isModalVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAIN_FETCH:
      return { ...state };
    case TRAIN_FETCH_SUCCESS:
      return { ...state, isModalVisible: true, schedule: action.payload }
    case TOGGLE_MODAL:
      return { ...state, isModalVisible: false }
    default:
      return state;
  }
};