const form = document.getElementById("jsForm");
const input = document.getElementById("jsInput");
const ul = document.getElementById("jsUl");

let ToDoList = [];

const createToDo = toDo => {
  const list = document.createElement("li");
  list.innerText = toDo;
  ul.appendChild(list);
};

const handleSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
