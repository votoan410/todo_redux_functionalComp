export default (tasks = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...tasks, action.payload];
    case "UDATE":
      return tasks.map((task) =>
        tasks._id === action.payload._id ? action.payload : task
      );
    case "DELETE":
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};
