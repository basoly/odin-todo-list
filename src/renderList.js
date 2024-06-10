const renderList = (list, array) => {
  // to render lists to the DOM
  
  if (list == 'todoList') {
    // delete current items in todo List container
    
    var listContainer = document.querySelector('.todo-container')
    listContainer.innerHTML = '';
    // for each key, generate the DOM items
    for (const item of array) {
      var title = item.title;
      var newElem = document.createElement('li');
      newElem.classList.add('todo-item');
      newElem.setAttribute('id', item.id);
      // create button element
      var btn = document.createElement('button');
      var label = document.createElement('div');
      var dueDate = document.createElement('div');
      var priority = document.createElement('div');
      var doneBtn = document.createElement('button');
      var delBtn = document.createElement('button')
      btn.setAttribute('type', 'button');
      btn.innerHTML = '▶';
      // label
      label.classList.add('fields');
      dueDate.classList.add('fields');
      priority.classList.add('fields');
      doneBtn.classList.add('done-btn');
      doneBtn.setAttribute('type', 'button');
      doneBtn.innerHTML = '✔';
      delBtn.classList.add('delete-item');
      delBtn.setAttribute('type', 'button');
      delBtn.innerHTML = 'X';
      // Transfering info from form input to DOM element
      label.innerHTML = title;
      dueDate.innerHTML = `<div>Due: ${item.due}</div>`;
      priority.innerHTML = item.priority;

      // add button event handlers
      delBtn.addEventListener('click', deleteItem);
      // add to item container
      var elements = [btn, label, dueDate, priority, doneBtn, delBtn];

      for (const elem of elements) {
          newElem.appendChild(elem);
      }
  
    
      listContainer.appendChild(newElem);
      console.log('To-do list updated');
    }
    
    // add to the respective container
  } else if (list == 'projectList') {
    // delete current items in projects container
    // add to respective container
    var listContainer = document.querySelector('.projects');
    listContainer.innerHTML = '';
        // for each key, generate the DOM items
    for (const item of array) {
      var title = item.title;
      var newElem = document.createElement('li');
      newElem.classList.add('proj-item');
      newElem.setAttribute('id', item.id);
      // add to DOM function
      var titleContainer = document.createElement('div');
      var delBtn = document.createElement('button');
      delBtn.classList.add('delete-item');
      delBtn.setAttribute('type', 'button');
      delBtn.innerHTML = 'X';
  
      titleContainer = title;
      delBtn.addEventListener('click', deleteItem);
  
      var elements = [titleContainer, delBtn]
  
      for (const elem of elements) {
          newElem.appendChild(elem);
      }
  
      listContainer.appendChild(newElem);
      console.log('Project List updated')
    }
  }
}
