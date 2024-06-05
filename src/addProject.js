import createProject from './createProject'

// newProj = createProject(projectTitleInput.value)


const addProject = (newProj) => {
    var title = newProj.title;
    var newElem = document.createElement('li');
    newElem.classList.add('proj-item');
    newElem.setAttribute('id', newProj.id);
    // add to DOM function
    var titleContainer = document.createElement('div');
    var delBtn = document.createElement('button');
    delBtn.classList.add('delete-item');
    delBtn.setAttribute('type', 'button');
    delBtn.innerHTML = 'X';

    titleContainer = title;
    delBtn.addEventListener('click', deleteItem);

    var elements = [titleContainer, delBtn]

    for (const elem of elements) {
        newElem.appendChild(elem);
    }

    var projList = document.querySelector('.projects')
    projList.appendChild(newElem);

}

export default addProject

