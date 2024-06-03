import addItem from "./addItem";
import deleteItem from "./deleteItem"

// add event handler to add button

const initPage = () => {
    var addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', addItem);


}


// initialize the rest of the page elements with JS only 

export default initPage