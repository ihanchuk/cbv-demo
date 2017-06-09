import {createStore} from 'redux';

const initialState = {
  mainPage: [
    "Scooter", 
    "Sash", 
    "Darude"
    ],
  bookPage:{
    title: 'Life of Daniel Brown',
    author: 'Jack daniels',
    tags:[
      "Drama"
    ],
    intro: "Short description"
  },
  booksPage:[
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    {
      title:"First Book", 
      author:'Jack daniels'
    },
    
  ],
  authorPage:{
    author: 'Jack Daniels'
  },
  genrePage: [
    {
      genre: 'Horror story'
    }
  ]
};

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