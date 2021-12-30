import todosReducer from "./todos/todos.reducer.js";
import goalsReducer from "./goals/goals.reducer.js";

const rootReducer = Redux.combineReducers({
    todos: todosReducer,
    goals: goalsReducer
})

export default rootReducer;