// Compare object titles alphabetically (case-insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0
  }
};

module.exports = {
  // return the list of todo lists sorted by completion status and title.
  sortTodoLists(lists) {
    let undoneLists = lists.filter(todoList => !todoList.isDone());
    let doneLists = lists.filter(todoList => todoList.isDone());
  
    let sortedUndoneList = undoneLists.sort(compareByTitle);
    let sortedDoneList = doneLists.sort(compareByTitle);
  
    return sortedUndoneList.concat(sortedDoneList);
  },

  // sort a list of todos
  sortTodos(todoList) {
    let undoneTodos = todoList.todos.filter(todo => !todo.isDone());
    let doneTodos = todoList.todos.filter(todo => todo.isDone());

    undoneTodos.sort(compareByTitle);
    doneTodos.sort(compareByTitle);

    return undoneTodos.concat(doneTodos);
  },
};