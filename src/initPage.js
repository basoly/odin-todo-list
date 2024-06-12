import addItem from "./addItem";
import deleteItem from "./deleteItem";
// import completeItem from "./completeItem"
import addProject from "./addProject";

// add event handler to add button
var todoList = [];
var projectList = [];

const initPage = () => {
    //initiate initial page elements
    var addBtn = document.querySelector('.add-btn');
    var delBtn = document.querySelector('.delete-item');
    var doneBtn = document.querySelector('.done-btn');
    var addProj = document.querySelector('.add-project')

    if (addBtn) {
        addBtn.addEventListener('click', addItem);
    }

    if (delBtn) {
        delBtn.addEventListener('click', deleteItem);
    }

    // if (doneBtn) {
    //     doneBtn.addEventListener('click', completeItem);
    // }

    if (addProj) {
        addProj.addEventListener('click', addProject);
    }



    


}


// initialize the rest of the page elements with JS only 

export default initPage
