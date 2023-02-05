const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

const compareByTitle = (todoListA, todoListB) => {
  if (todoListA.title < todoListB.title) {
    return -1;
  } else if (todoListA.title > todoListB.title) {
    return 1;
  } else {
    return 0
  }
};

let todoLists = require('./lib/seed-data');

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static('public'));

const sortTodoLists = lists => {
  let undoneLists = lists.filter(todoList => !todoList.isDone());
  let doneLists = lists.filter(todoList => todoList.isDone());

  let sortedUndoneList = undoneLists.sort(compareByTitle);
  let sortedDoneList = doneLists.sort(compareByTitle);

  return sortedUndoneList.concat(sortedDoneList);
};

app.get("/", (req, res) => {
  res.render("lists", { 
    todoLists: sortTodoLists(todoLists), 
  });
});

app.listen(port, host, () => {
  console.log(`Todos is listening on ${port} of ${host}!`);
});