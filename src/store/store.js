import {createStore} from 'redux';

const initialState = [
    'How much is the fish',
    'Valentine'
];

function reducer(state=initialState, action){
switch (action.type){
    case 'ADD_TRACK':
      return [ ...state, action.payload.track];
    default:
      return state;
  }
}

const  store = createStore(reducer);

export default store;