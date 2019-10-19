import { GET_SECTIONS, SECTION_ERROR } from '../actions/types';

const initialState = {
  sections: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SECTIONS:
      return {
        ...state,
        loading: false,
        sections: payload
      };
    case SECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
