import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_TOPICS,
  GET_TOPIC,
  ADD_TOPIC,
  ADD_COMMENT,
  TOPIC_ERROR
} from './types';

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

// Add topic
export const addTopic = (forumId, formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`/api/topics/${forumId}`, formData, config);

    dispatch({
      type: ADD_TOPIC,
      payload: res.data
    });

    dispatch(setAlert('Sujet ajouté !', 'success'));

    history.push(`/forum/${forumId}`);
  } catch (err) {
    dispatch({
      type: TOPIC_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Comment
export const addComment = (topicId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/topics/comment/${topicId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Réponse ajoutée !', 'success'));
  } catch (err) {
    dispatch({
      type: TOPIC_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
