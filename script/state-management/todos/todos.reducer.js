import * as TODOSTYPES from "./todos.types.js";
const initalState = [];

const todosReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case TODOSTYPES.ADD_TODO:
      return state.concat([action.payload]);
    case TODOSTYPES.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOSTYPES.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
};

export default todosReducer;
