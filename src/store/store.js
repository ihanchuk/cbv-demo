import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import BooksPageReducer from './reducers/books-page-reducer';

let reducers = combineReducers({
  books:BooksPageReducer
});

 window.store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default window.store;