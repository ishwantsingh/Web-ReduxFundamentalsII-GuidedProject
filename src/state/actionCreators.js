import uuid from "uuid";
import * as types from "../constants/actionTypes";

export function deleteQuote(id) {
  return {
    type: types.DELETE_QUOTE,
    payload: id
  };
}

// 5- ACTION CREATOR makeQuoteOfTheDay
export function makeQuoteOfTheDay(id) {
  return {
    type: types.MAKE_QUOTE_OF_THE_DAY,
    payload: id
  };
}

// 6- ACTION CREATOR addQuote
export function addQuote(author, text) {
  return {
    type: types.ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text
    }
  };
}
