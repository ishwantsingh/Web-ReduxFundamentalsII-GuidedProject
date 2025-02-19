import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Container from "./components/Container";
import dummyQuotes from "./constants/dummyQuotes";
import * as types from "./constants/actionTypes";

// =================================================================== REDUCERS  (pull out)
// REDUCER quotes
function quotes(state = dummyQuotes, action) {
  switch (action.type) {
    case types.ADD_QUOTE:
      return state.concat(action.payload);
    case types.DELETE_QUOTE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

// REDUCER quoteOfTheDay
function quoteOfTheDay(state = null, action) {
  switch (action.type) {
    case types.MAKE_QUOTE_OF_THE_DAY:
      return (state = action.payload);
    case types.DELETE_QUOTE:
      return state === action.payload ? null : state;
    default:
      return state;
  }
}

// =================================================================== COMBINE REDUCERS
const rootReducer = combineReducers({ quotes, quoteOfTheDay });

// =================================================================== CREATE THE STORE
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// =================================================================== INJECT THE STORE
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector("#target")
);
