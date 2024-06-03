// delete to-do list item

const deleteItem = (e) => {
    var id = e.target.id;
    var removed = document.querySelector(`#${id}`);
    var container = document.querySelector('.todo-container');

    container.removeChild(removed);
}

export default deleteItem;