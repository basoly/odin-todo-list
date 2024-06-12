const saveData = (name, list) => { // should I put todoList as argument
  if (name == 'todoList') {
    localStorage.removeItem('todoList');
    let serialList = JSON.stringify(list);
    localStorage.setItem('todoList', serialList);
  } else if (name == 'projectList') {
    localStorage.removeItem('projectList');
    let serialList = JSON.stringify(list);
    localStorage.setItem('projectList', serialList)
  } else {
    alert('Argument Error: name must be todoList or projectList')
  }

}

export default saveData
