import TODO_ACTIONS_TYPES from "../actions/actionTypes";

export default (tasks = [], action) => {
  switch (action.type) {
    case TODO_ACTIONS_TYPES.FETCH_TODO:
      return action.payload;
    case TODO_ACTIONS_TYPES.CREATE_TODO:
      return [...tasks, action.payload];
    case TODO_ACTIONS_TYPES.UPDATE_TODO:
      return tasks.map((task) =>
        tasks._id === action.payload._id ? action.payload : task
      );
    case TODO_ACTIONS_TYPES.DELETE_TODO:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};
