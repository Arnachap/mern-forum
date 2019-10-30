import {
  GET_TOPICS,
  GET_TOPIC,
  ADD_TOPIC,
  ADD_COMMENT,
  TOPIC_ERROR
} from '../actions/types';

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
    case ADD_TOPIC:
      return {
        ...state,
        topics: [payload, ...state.topics],
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        topic: { ...state.topic, comments: payload },
        loading: false
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
