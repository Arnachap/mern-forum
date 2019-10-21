import axios from 'axios';
import { GET_TOPICS, GET_TOPIC, TOPIC_ERROR } from './types';

// Get topics by forum ID
export const getTopics = id => async dispatch => {
  try {
    const res = await axios.get(`/api/topics/forum/${id}`);

    dispatch({
      type: GET_TOPICS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TOPIC_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get topic by ID
export const getTopic = id => async dispatch => {
  try {
    const res = await axios.get(`/api/topics/${id}`);

    dispatch({
      type: GET_TOPIC,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TOPIC_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
