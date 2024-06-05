import addItem from "./addItem";
import deleteItem from "./deleteItem"
import completeItem from "./completeItem"

// add event handler to add button

const initPage = () => {
    var addBtn = document.querySelector('.add-btn');
    var delBtn = document.querySelector('.delete-item');
    var doneBtn = document.querySelector('.done-btn');

    if (addBtn) {
        addBtn.addEventListener('click', addItem);
    }

    if (delBtn) {
        delBtn.addEventListener('click', deleteItem);
    }

    if (doneBtn) {
        doneBtn.addEventListener('click', completeItem);
    }



    


}


// initialize the rest of the page elements with JS only 

export default initPage