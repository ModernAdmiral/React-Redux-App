import React from "react";
import { fetchQuote } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const QuoteWrapper = styled.div`
  color: tomato;
  width: 50%;
  margin: 0 auto;
  margin-top: 5%;
  align-items: center;
  padding: 30px;
  background-color: lightBlue;
  border-radius: 30px;
`;
const Quote = props => {
  //   const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => props.fetchQuote()}>NEW QUOTE</button>
      {props.isFetching && <p>Loading...</p>}
      {props.error && <p>{props.error.message}</p>}
      <QuoteWrapper className="quote">{props.quote}</QuoteWrapper>
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
