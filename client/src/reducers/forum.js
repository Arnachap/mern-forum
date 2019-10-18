import { GET_FORUMS, GET_FORUM, FORUM_ERROR } from '../actions/types';

const initialState = {
  forums: [],
  forum: null,
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
    case GET_FORUM:
      return {
        ...state,
        loading: false,
        forum: payload
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
