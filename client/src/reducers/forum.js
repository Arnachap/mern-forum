import { GET_FORUMS, FORUM_ERROR } from '../actions/types';

const initialState = {
  forums: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FORUMS:
      return {
        ...state,
        loading: false,
        forums: payload
      };
    case FORUM_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
