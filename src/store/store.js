import {createStore} from 'redux';
import { combineReducers } from 'redux';

import MainPageReducer from './reducers/main-page-reducer';

let reducers = combineReducers({
  books:MainPageReducer
});

function reducer(state={}, action){
switch (action.type){
    case 'LOAD_BOOKS':
      let newState = {};
      newState["booksPage"] = [
         {
            title:"Pretty nice book", 
            author:'Jack daniels'
          },
      ];
      console.info("Up[dating state!!!!");
      return newState;
    default:
      return state;
  }
}
console.log(reducers);

 window.store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default window.store;