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

export const create = (todoText) => {
  return {
    type: CREATE,
    payload: todoText,
  };
};

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const allcomplete = () => {
  return {
    type: ALLCOMPLETE,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
export const colorselect = (todoID, color) => {
  return {
    type: COLORSELECT,
    payload: {
      todoID,
      color,
    },
  };
};
export const deleted = (todoID) => {
  return {
    type: DELETED,
    payload: todoID,
  };
};

export const toggled = (todoID) => {
  return {
    type: TOGGLED,
    payload: todoID,
  };
};
