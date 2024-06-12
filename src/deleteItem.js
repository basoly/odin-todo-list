import fetchData from './fetchData';
import renderList from './renderList';
// delete to-do list item

// get item id, then use id of item object clicked to remove said item using array.splice(array.indexOf(id),1)
const deleteItem = (e) => {
    var id = e.target.parentNode.id;
    let todoList = fetchData('todoList');
    console.log(`This element's id is: ${id}`);
    todoList.splice(todoList.indexOf(id), 1);
    renderList('todoList', todoList);

    // var removed = document.querySelector(`#${id}`);
    // console.log(removed);
    // var container = document.querySelector('.todo-container');
    // console.log(container)
    // container.removeChild(removed);
}

export default deleteItem;
