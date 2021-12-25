import { generateId } from "./helpers.js";
let todos = [];
let goals = [];
function addTodo() {
  const input = document.getElementById("todo");
  const name = input.value;
  input.value = "";

  const todo = {
    id: generateId(),
    name,
    complete: false,
  };
  todos.push(todo);

  addTodoToDOM(todo);
}

function addGoal() {
  const input = document.getElementById("goal");
  const name = input.value;
  input.value = "";

  const goal = {
    id: generateId(),
    name,
  };

  goals.push(goal);
  addGoalToDOM(goal);
}

document.getElementById("todoBtn").addEventListener("click", addTodo);

document.getElementById("goalBtn").addEventListener("click", addGoal);

function addTodoToDOM(todo) {
  const node = document.createElement("li");
  const text = document.createTextNode(todo.name);
  const removeBtn = createRemoveButton(() => {
    todos = todos.filter((_todo) => {
      return _todo.id !== todo.id;
    });
    rerender();
  });
  node.appendChild(text);
  node.appendChild(removeBtn);
  node.style.textDecoration = todo.complete ? "line-through" : "none";

  node.addEventListener("click", () => {
    todos = todos.map((_todo) =>
      _todo.id !== todo.id
        ? _todo
        : Object.assign({}, _todo, { complete: !_todo.complete })
    );
    rerender();
  });

  document.getElementById("todos").appendChild(node);
}

function createRemoveButton(onClick) {
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", onClick);
  return removeBtn;
}

function addGoalToDOM(goal) {
  const node = document.createElement("li");
  const text = document.createTextNode(goal.name);
  const removeBtn = createRemoveButton(() => {
    goals = goals.filter((_goal) => _goal.id !== goal.id);
    rerender();
  });
  node.appendChild(text);
  node.appendChild(removeBtn);
  document.getElementById("goals").appendChild(node);
}

function rerender() {

  document.getElementById("todos").innerHTML = "";
  document.getElementById("goals").innerHTML = "";

  goals.forEach((goal) => addGoalToDOM(goal));
  todos.forEach((todo) => {
    addTodoToDOM(todo);
  });
}
