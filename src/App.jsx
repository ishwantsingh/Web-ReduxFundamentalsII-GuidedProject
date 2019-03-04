import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import Container from './components/Container';
import dummyQuotes from './constants/dummyQuotes';

// ACTION TYPES
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const MAKE_QUOTE_OF_THE_DAY = 'MAKE_QUOTE_OF_THE_DAY';
export const ADD_QUOTE = 'ADD_QUOTE';

// ACTION CREATOR deleteQuote
export function deleteQuote(id) {
  return {
    type: DELETE_QUOTE,
    payload: id,
  };
}

// ACTION CREATOR makeQuoteOfTheDay
export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}

// ACTION CREATOR addQuote
export function addQuote(author, text) {
  return {
    type: ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}

// REDUCER quotes
function quotes(state = dummyQuotes, action) {
  switch (action.type) {
    case ADD_QUOTE:
      return state.concat(action.payload);
    case DELETE_QUOTE:
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
}

// REDUCER quoteOfTheDay
function quoteOfTheDay(state = null, action) {
  switch (action.type) {
    case MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case DELETE_QUOTE:
      return state === action.payload ? null : state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  quotes,
  quoteOfTheDay,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
