import React from "react";
import { fetchQuote } from "../actions";
import { connect } from "react-redux";
const Quote = props => {
  //   const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => props.fetchQuote()}>NEW QUOTE</button>
      {props.isFetching && <p>Loading...</p>}
      {props.error && <p>{props.error.message}</p>}
      <p className="quote">{props.quote}</p>
    </>
  );
};

// const mapDispatchToProps = () = {
//   return {
//     fetchQuote
//   };
// };

const mapStateToProps = state => {
  return {
    quote: state.quote[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchQuote }
)(Quote);
