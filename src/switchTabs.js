import renderList from "./renderList";

const switchTabs = (e) => {
    let id = e.target.id;
    let project = document.querySelector(`#${id}`);
    let name = project.firstElementChild.innerHTML;
    // let projName = e.target.innerHTML;
    let itemList = [];
    
    if (id == 'default') {
      itemList = todoList; // to render all todos
      
    } else {
    
    for (let item of todoList) {
      if (item['project'].toLowerCase() == name.toLowerCase()) {
        itemList.push(item);
      }
    }
    }
    renderList('todoList',itemList);
   
  };

export default switchTabs