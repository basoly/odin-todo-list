const fetchData = (list) => {
  // delete existing list
  
  if (list == 'todoList') {
    currentList = JSON.parse(localStorage.getItem('todoList'))
  } else if (list == 'projectList') {
    currentList = JSON.parse(localStorage.getItem('projectList'))
  } else {
    console.log('error in fetchData')
    alert('error');
  }

  return currentList
}
