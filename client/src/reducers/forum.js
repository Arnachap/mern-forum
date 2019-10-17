import { GET_FORUMS, FORUM_ERROR } from '../actions/types';

const initialState = {
  forums: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FORUMS:
      return {
        ...state,
        forums: payload
      };
    case FORUM_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
