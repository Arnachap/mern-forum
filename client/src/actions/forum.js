import axios from 'axios';
import { GET_FORUMS, GET_FORUM, FORUM_ERROR } from './types';

// Get forums
export const getForums = () => async dispatch => {
  try {
    const res = await axios.get(`/api/forums`);

    dispatch({
      type: GET_FORUMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get forum by id
export const getForum = id => async dispatch => {
  try {
    const res = await axios.get(`/api/forums/${id}`);

    dispatch({
      type: GET_FORUM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
