import { GET_TOPICS, GET_TOPIC, TOPIC_ERROR } from '../actions/types';

const initialState = {
  topics: [],
  topic: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOPICS:
      return {
        ...state,
        loading: false,
        topics: payload
      };
    case GET_TOPIC:
      return {
        ...state,
        loading: false,
        topic: payload
      };
    case TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
