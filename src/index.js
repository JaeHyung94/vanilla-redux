import { createStore } from "redux";

const form = document.getElementById("jsForm");
const input = document.getElementById("jsInput");
const ul = document.getElementById("jsUl");

const ADD_TODO = "Add";
const DELETE_TODO = "Delete";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.target));
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text, id) => {
  store.dispatch({ type: ADD_TODO, text, id });
};

const deleteToDo = event => {
  const target = event.target.parentElement.id;
  store.dispatch({ type: DELETE_TODO, target });
};

const paintToDos = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach(toDo => {
    const list = document.createElement("li");
    const delButton = document.createElement("button");
    list.id = toDo.id;
    list.innerText = toDo.text;
    delButton.innerText = "Del";
    delButton.addEventListener("click", deleteToDo);
    list.appendChild(delButton);
    ul.appendChild(list);
  });
};
store.subscribe(paintToDos);

const handleSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  const id = Date.now();
  input.value = "";
  addToDo(toDo, id);
};

form.addEventListener("submit", handleSubmit);
