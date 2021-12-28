import * as TODOSTYPES from "./todos.types.js";

export const addTodoAction = (todo) => ({
  type: TODOSTYPES.ADD_TODO,
  payload: todo,
});

export const removeTodoAction = (id) => ({
  type: TODOSTYPES.REMOVE_TODO,
  payload: id,
});

export const toggleTodoAction = (id) => ({
  type: TODOSTYPES.TOGGLE_TODO,
  payload: id
});
