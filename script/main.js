import { generateId } from "./helpers.js";
import * as TodosAction from "./state-management/todos/todos.actions.js";
import * as GoalsAction from "./state-management/goals/goals.actions.js";
import rootReducer from "./state-management/root-reducer.js";
import { checker } from "./state-management/middlewares/checker.js";

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(checker));

store.subscribe(() => {
  const { todos, goals } = store.getState();

  document.getElementById("todos").innerHTML = "";
  document.getElementById("goals").innerHTML = "";

  goals.forEach((goal) => addGoalToDOM(goal));
  todos.forEach((todo) => addTodoToDOM(todo));
});

function addTodo() {
  const input = document.getElementById("todo");
  const name = input.value;
  input.value = "";

  const todo = {
    id: generateId(),
    name,
    complete: false,
  };

  store.dispatch(TodosAction.addTodoAction(todo));
}

function addGoal() {
  const input = document.getElementById("goal");
  const name = input.value;
  input.value = "";

  const goal = {
    id: generateId(),
    name,
  };
  store.dispatch(GoalsAction.addGoalAction(goal));
}

document.getElementById("todoBtn").addEventListener("click", addTodo);

document.getElementById("goalBtn").addEventListener("click", addGoal);

function createRemoveButton(onClick) {
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", onClick);
  return removeBtn;
}

function addTodoToDOM(todo) {
  const node = document.createElement("li");
  const text = document.createTextNode(todo.name);
  const removeBtn = createRemoveButton(() => {
    store.dispatch(TodosAction.removeTodoAction(todo.id));
  });
  node.appendChild(text);
  node.appendChild(removeBtn);
  node.style.textDecoration = todo.complete ? "line-through" : "none";

  node.addEventListener("click", () => {
    store.dispatch(TodosAction.toggleTodoAction(todo.id));
  });

  document.getElementById("todos").appendChild(node);
}

function addGoalToDOM(goal) {
  const node = document.createElement("li");
  const text = document.createTextNode(goal.name);
  const removeBtn = createRemoveButton(() => {
    store.dispatch(GoalsAction.removeGoalAction(goal.id));
  });
  node.appendChild(text);
  node.appendChild(removeBtn);
  document.getElementById("goals").appendChild(node);
}
