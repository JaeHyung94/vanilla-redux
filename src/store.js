import { createStore } from "redux";

const ADD = "Add";
const DELETE = "Delete";

const addToDo = (text, id) => {
  return {
    type: ADD,
    text,
    id
  };
};

const deleteToDo = target => {
  return {
    type: DELETE,
    id: parseInt(target)
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
