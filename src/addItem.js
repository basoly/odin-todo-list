// click handler for add button
// import statements
import addToList from './addToList'
import createItem from './createItem';

const addItem = () => {
    title = document.querySelector("#title");
    desc = document.querySelector('#description');
    due = document.querySelector('#due');
    priority = document.querySelector('#priority');

    var newItem = createItem(title.value, desc.value, due.value, priority.value)

    addToList(newItem);

    var elements = [title, desc, due, priority]

    for (const input of elements) {
    input.innerHTML = ''
    }
}



export default addItem