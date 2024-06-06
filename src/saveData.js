const saveData = (list) => { // should I put todoList as argument
  localStorage.removeItem('todoList');
  serialList = JSON.stringify(list);
  localStorage.setItem('todoList', todoList);
}
