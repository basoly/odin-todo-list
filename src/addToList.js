import deleteItem from "./deleteItem";

// add item to DOM

const addToList = (newItem) => {
    // create html element
    var newElem = document.createElement('li');
    newElem.classList.add('todo-item');
    newElem.setAttribute('id', newItem.id);
    //create button element
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

    // add button event handlers
    delBtn.addEventListener('click', deleteItem);


    // add to item container
    elements = [btn, label, dueDate, priority, doneBtn, delBtn];

    for (const elem of elements) {
        newElem.appendChild(elem);
    }

    var container = document.querySelector('.todo-container')
    container.appendChild(newElem);
}

export default addToList

        // <div class='todo-item'>
        //     <button type="button">▶</button>
        //     <div class="fields">Label</div>
        //     <div class="fields">Due Date</div>
        //     <div class="fields">Priority</div>
        //     <button class="done-btn" type="button">✔</button>
        //     <button class="delete-item" type="button">X</button>
        //   </div>


