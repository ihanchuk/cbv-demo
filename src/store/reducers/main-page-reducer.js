export default function MainPageReducer(state = {}, action) {
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