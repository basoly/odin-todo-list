// click handler for add button
// import statements
import addToList from './addToList'
import createItem from './createItem';


const addItem2 = (item) => {
  todoList.push(item);
  console.log(todoList);
}

const addItem = () => {
    var title = document.querySelector("#title");
    var desc = document.querySelector('#description');
    var due = document.querySelector('#due');
    var priority = document.querySelector('#priority');

    var newItem = createItem(title.value, desc.value, due.value, priority.value)

    addToList(newItem);

    var elements = [title, desc, due, priority]

    for (const input of elements) {
    input.value = '';
    }
}



export default addItem
