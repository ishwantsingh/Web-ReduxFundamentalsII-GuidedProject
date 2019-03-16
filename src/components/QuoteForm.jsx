import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number } from "prop-types";
import { addQuote } from "../state/actionCreators";

export class QuoteForm extends React.Component {
  authorRef = React.createRef();

  textRef = React.createRef();

  onAddQuote = () => {
    const authorValue = this.authorRef.current.value;
    const textValue = this.textRef.current.value;

    this.props.addQuote(authorValue, textValue);
    this.authorRef.current.value = "";
    this.textRef.current.value = "";
    // this.authorRef.current.focus();
  };

  render() {
    return (
      <div>
        <h3>You have {this.props.numberOfQuotes}. Add New Quote!</h3>
        <div>
          <em>Author: </em>
          <input ref={this.authorRef} type="text" />
        </div>
        <div>
          <em>Text: </em>
          <input ref={this.textRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddQuote}>Add Quote</button>
        </div>
      </div>
    );
  }
}

QuoteForm.propTypes = {
  addQuote: func.isRequired,
  numberOfQuotes: number.isRequired
};

function mapStateToProps(state) {
  return {
    numberOfQuotes: state.quotes.length
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addQuote
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteForm);
