  let ns = {
    booksPage:[]
  };

export default function MainPageReducer(state = ns, action) {
  switch (action.type){
    case 'LOAD_BOOKS':
      let newState = {};
      let books = action.payload;
      newState["booksPage"] = books;
      return newState;
    default:
      return state;
  }
}