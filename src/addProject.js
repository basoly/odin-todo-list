import createProject from './createProject'
import fetchData from './fetchData';
import saveData from './saveData';
import renderList from './renderList';

// newProj = createProject(projectTitleInput.value)
// const addProject2 = (newProject) => {
//   projectList.push(newProject);
//   console.log(projectList);
// }

const addProject = () => {
  let title = document.querySelector('#projectTitle');
  let newProj = createProject(title.value);
  let projectList = fetchData('projectList');
  console.log(projectList);

  if (projectList) {
    projectList.push(newProj);
    saveData('projectList',projectList);
} else {
    projectList = [];
    projectList.push(newProj);
    saveData('projectList', projectList);
}

  renderList('projectList', projectList);
  // title.value = '';



  
    // var title = newProj.title;
    // var newElem = document.createElement('li');
    // newElem.classList.add('proj-item');
    // newElem.setAttribute('id', newProj.id);
    // // add to DOM function
    // var titleContainer = document.createElement('div');
    // var delBtn = document.createElement('button');
    // delBtn.classList.add('delete-item');
    // delBtn.setAttribute('type', 'button');
    // delBtn.innerHTML = 'X';

    // titleContainer = title;
    // delBtn.addEventListener('click', deleteItem);

    // var elements = [titleContainer, delBtn]

    // for (const elem of elements) {
    //     newElem.appendChild(elem);
    // }

    // var projList = document.querySelector('.projects')
    // projList.appendChild(newElem);

}

export default addProject

