import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';
import { bindActionCreators } from 'redux';
import Quote from './Quote';
import { deleteQuote, makeQuoteOfTheDay } from '../App';


export class Quotes extends React.Component {
  render() {
    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                deleteQuote={this.props.deleteQuote}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  quoteOfTheDay: string,
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    quoteOfTheDay: state.quoteOfTheDay,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteQuote,
    makeQuoteOfTheDay,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
