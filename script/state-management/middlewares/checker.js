import { ADD_TODO } from "../todos/todos.types.js"; 
import { ADD_GOAL } from "../goals/goals.types.js"; 

//carrying patterns
export const checker = (store) => (next) => (action) => {

    if (
        (action.type === ADD_TODO || action.type === ADD_GOAL) &&
        action.payload.name.toLowerCase().includes("bitcoin")
      ) {
        return alert("Nope. That's a bad idea.");
      }
    
      return next(action);


};
