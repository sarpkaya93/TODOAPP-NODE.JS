const fs = require("fs");

var readTodos = () => {
  try {
    var todosStr = fs.readFileSync("todos.json");
    return (todos = JSON.parse(todosStr));
  } catch (e) {
    return [];
  }
};

var writeTodos = (todos) => {
  fs.writeFileSync("todos.json", JSON.stringify(todos));
};

var writeTodo = (todo) => {
  console.log("--------");
  console.log("header:", todo.header);
  console.log("description:", todo.description);
  console.log("date:", todo.date);
  console.log("--------");
};

var add = (header, description, date) => {
  var todos = [];
  var todo = {
    header,
    description,
    date,
  };

  readTodos();
  var repeatedHeader = todos.filter((todo) => todo.header === header);

  if (repeatedHeader.length === 0) {
    todos.push(todo);
    writeTodos(todos);
    writeTodo(todo);
  } else {
    console.log("Header already decleared.", header);
  }
};

var list = () => {
  var listTodos = readTodos();
  listTodos.forEach((todo) => writeTodo(todo));
};

var read = (header) => {
  var listTodos = readTodos();
  var foundExecution = listTodos.filter((todo) => todo.header === header);
  if (foundExecution.length === 0) {
    console.log("Execution not Found");
  } else {
    writeTodo(foundExecution[0]);
  }
};

var erase = (header) => {
  var listTodos = readTodos();
  var filterList = listTodos.filter((todo) => todo.header !== header);
  writeTodo(filterList);
};

module.exports = {
  add,
  list,
  read,
  erase,
};
