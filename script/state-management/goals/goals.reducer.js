import * as GOALSTYPES from "./goals.types.js";

const initalState = [];

const goalsReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case GOALSTYPES.ADD_GOAL:
      return state.concat([action.payload])
    case GOALSTYPES.REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.payload);
    default:
      return state;
  }
};

export default goalsReducer;