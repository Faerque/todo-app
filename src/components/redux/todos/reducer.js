import {
  CREATE,
  EDIT,
  DELETED,
  ALLCOMPLETE,
  CLEARCOMPLETED,
  COLORSELECT,
  TOGGLED,
  LOADED,
} from './actionTypes';
import initialState from './initialState';

const nextTodoID = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  return maxID + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [
        ...state,
        {
          id: nextTodoID(state),
          name: action.payload,
          completed: false,
        },
      ];
    case LOADED:
      return action.payload;
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECT:
      const { todoID, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.map((todo) => !todo.completed);
    default:
      return state;
  }
};
export default reducer;
