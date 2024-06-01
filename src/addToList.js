// add item to DOM

const addToList = (newItem) => {
    // create html element
    var newElem = document.createElement('li');
    newElem.classList.add('todo-item')
    //create button element
    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.innerHTML('▶')
    


}

        // <div class='todo-item'>
        //     <button type="button">▶</button>
        //     <div class="fields">Label</div>
        //     <div class="fields">Due Date</div>
        //     <div class="fields">Priority</div>
        //     <button class="done-btn" type="button">✔</button>
        //     <button class="delete-item" type="button">X</button>
        //   </div>