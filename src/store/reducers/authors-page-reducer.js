  let ns = {
    authorsPage:[]
  };

export default function AuthorPageReducer(state = ns, action) {
  switch (action.type){
    case 'LOAD_AUTHORS':
      let newState = {};
      let authors = action.payload;
      newState["authorsPage"] = authors;
      return newState;
    default:
      return state;
  }
}