import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import Container from './components/Container';
import dummyQuotes from './constants/dummyQuotes';

// =================================================================== ACTION TYPES (pull out)
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const MAKE_QUOTE_OF_THE_DAY = 'MAKE_QUOTE_OF_THE_DAY';
export const ADD_QUOTE = 'ADD_QUOTE';

// =================================================================== REDUCERS  (pull out)
// REDUCER quotes
function quotes(state = dummyQuotes, action) {
  // 1- flesh out using action types as your guide
  return state;
}

// REDUCER quoteOfTheDay
function quoteOfTheDay(state = null, action) {
  // 2- flesh out using action types as your guide
  return state;
}

// =================================================================== COMBINE REDUCERS
// 3- use combineReducers to create a root reducer off of our reducers
const rootReducer = () => ({ quotes: dummyQuotes, quoteOfTheDay: null });

// =================================================================== ACTION CREATORS  (pull out)
// 4- ACTION CREATOR deleteQuote
export function deleteQuote(id) {
  return {
    // what type?
    // what payload?
  };
}

// 5- ACTION CREATOR makeQuoteOfTheDay
export function makeQuoteOfTheDay(id) {
  return {
    // what type?
    // what payload?
  };
}

// 6- ACTION CREATOR addQuote
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

// =================================================================== CREATE THE STORE
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// =================================================================== INJECT THE STORE
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
