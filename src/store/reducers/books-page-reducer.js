  let ns = {
    booksPage:[]
  };

export default function MainPageReducer(state = ns, action) {
  switch (action.type){
    case 'LOAD_BOOKS':
      let newState = {};
      newState["booksPage"] = [
         {
            title:"Pretty nice book", 
            author:'Jack daniels'
          },
      ];
      return newState;
    default:
      return state;
  }
}