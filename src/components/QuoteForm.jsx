import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addQuote } from '../App';


function mapStateToProps(state) {
  // 1- implement so component gets a numberOfQuotes
  // that maps to state.quotes.length
}

function mapDispatchToProps(dispatch) {
  // 2- implement
}

export class QuoteForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddQuote = () => {
    // 3- implement so it uses this.props.addQuote
    // and also clears the inputs
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
  addQuote: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
