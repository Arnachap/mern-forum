import axios from 'axios';
import { GET_TOPICS, TOPIC_ERROR } from './types';

// Get topics by forum id
export const getTopics = id => async dispatch => {
  try {
    const res = await axios.get(`/api/topics/${id}`);

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
