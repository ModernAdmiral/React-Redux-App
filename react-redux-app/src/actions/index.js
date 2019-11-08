export const FETCH_QUOTE_LOADING = "FETCH_QUOTE_LOADING";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILED = "FETCH_QUOTE_FAILED";

export const quoteLoading = () => ({ type: FETCH_QUOTE_LOADING });
export const quoteLoadSuccess = data => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: data
});

export const quoteLoadFailure = error => ({
  type: FETCH_QUOTE_FAILED,
  payload: error
});

export const fetchQuote = () => {
  return function(dispatch) {
    dispatch(quoteLoading());
    return fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      .then(response => response.json())
      .then(json => {
        console.log("response from api", json);
        dispatch(quoteLoadSuccess(json));
      })
      .catch(error => dispatch(quoteLoadFailure(error)));
    // .catch(error => console.log(error))
  };
};
