import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addToDo = createAction("Add");
const deleteToDo = createAction("Delete");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== parseInt(action.payload))
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
