export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TASK":
      //  add to the task list
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case "REMOVE_TASK":
      //  remove the task from the list
      return {
        ...state,
        task: state.task.filter((x) => x !== action.payload),
      };
    default:
      return state;
  }
}
