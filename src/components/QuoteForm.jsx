import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addQuote } from '../App';


export class QuoteForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddQuote = () => {
    const authorInput = this.authorRef.current;
    const textInput = this.textRef.current;

    this.props.addQuote(authorInput.value, textInput.value);

    authorInput.value = '';
    textInput.value = '';
    authorInput.focus();
  }

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
  addQuote: func,
};

function mapStateToProps(state) {
  return {
    numberOfQuotes: state.quotes.length,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addQuote,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
