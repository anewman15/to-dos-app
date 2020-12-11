import Project from './project';
import Todo from './todo';

const updateProjectContainer = (projectsArray, projectIndex) => {
  const projectContentWrapper = document.getElementById('project-content-wrapper');
  projectContentWrapper.innerHTML = '';
  const projectContentContainer = document.createElement('div');
  projectContentContainer.id = 'project.content-container';
  projectContentContainer.classList.add('mx-auto');
  projectContentContainer.innerHTML = `
    <div id="project-content-top" class="mx-auto">
      <h1 class="h3 my-3 text-center">${projectsArray[projectIndex].title}</h1>
      <button id="create-new-todo-button" class="btn btn-primary my-3" data-project-idx="${projectIndex}">Create New Todo</button>
    </div>
  `;
  projectContentWrapper.appendChild(projectContentContainer);
}

const displayCreateNewTodoButton = (projectsArray, projectIndex) => {
  const projectContentContainer = document.getElementById('project-content-container');

  projectContentContainer += `
  `;
}

const createNewTodo = () => {

}

const displayProjectContent = (projectsArray, projectIndex) => {
  updateProjectContainer(projectsArray, projectIndex);
}

export { displayProjectContent };