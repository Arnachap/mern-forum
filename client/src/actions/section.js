import axios from 'axios';
import { GET_SECTIONS, SECTION_ERROR } from './types';

// Get sections
export const getSections = () => async dispatch => {
  try {
    const res = await axios.get('/api/forums/sections');

    dispatch({
      type: GET_SECTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
