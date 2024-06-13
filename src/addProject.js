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

}

export default addProject

