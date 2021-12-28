import * as GOALSTYPES from "./goals.types.js";


export const addGoalAction = (goal) => ({
  type: GOALSTYPES.ADD_GOAL,
  payload: goal
});

export const removeGoalAction = (id) => ({
  type: GOALSTYPES.REMOVE_GOAL,
  payload: id
});


