import todosReducer from "./todos/todos.reducer.js";
import goalsReducer from "./goals/goals.reducer.js";

const rootReducer = (state = {}, action) => ({
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action),
});

export default rootReducer;