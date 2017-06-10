import {createStore} from 'redux';
import { combineReducers } from 'redux';

import BooksPageReducer from './reducers/books-page-reducer';

let reducers = combineReducers({
  books:BooksPageReducer
});

 window.store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default window.store;