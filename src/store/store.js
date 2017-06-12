import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import BooksPageReducer from './reducers/books-page-reducer';
import AuthorsPageReducer from './reducers/authors-page-reducer';

let reducers = combineReducers({
  books:BooksPageReducer,
  authors:AuthorsPageReducer,
});

 window.store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default window.store;