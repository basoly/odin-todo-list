// delete to-do list item

const deleteItem = (e) => {
    var id = e.target.parentNode.id;
    console.log(`This element's id is: ${id}`);
    var removed = document.querySelector(`#${id}`);
    console.log(removed);
    var container = document.querySelector('.todo-container');
    console.log(container)
    container.removeChild(removed);
}

export default deleteItem;