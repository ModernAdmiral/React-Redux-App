import {
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILED
} from "../actions";

const initialState = {
  quote: [],
  error: null,
  isFetching: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: [action.payload],
        isFetching: false,
        error: null
      };
    case FETCH_QUOTE_FAILED:
      return {
        ...state,
        quote: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
