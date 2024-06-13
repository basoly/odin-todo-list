import addItem from "./addItem";
import deleteItem from "./deleteItem";
// import completeItem from "./completeItem"
import addProject from "./addProject";
import renderList from "./renderList";
import fetchData from "./fetchData";

// add event handler to add button
var todoList = [];
var projectList = ['default'];

const initPage = () => {
    todoList = fetchData('todoList');
    projectList = fetchData('projectList');
    if (todoList) {
        renderList('todoList', todoList);
    }
    if (projectList) {
        renderList('projectList', projectList);
    }
    
    
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
