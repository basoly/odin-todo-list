const fetchData = (list) => {
  // delete existing list
  let currentList;
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

export default fetchData
