import Project from './project';
import Todo from './todo';

const resetProjectContentContainer = () => {
  const projectContentContainer = document.getElementById('project-content-container');
  if (projectContentContainer) {
    projectContentContainer.innerHTML = '';
  } else {
    const contentArea = document.getElementById('content-area');
    const projectContentContainer = document.createElement('div');
    projectContentContainer.id = 'project-content-container';
    projectContentContainer.classList = 'col p-3 bg-light my-4 text-center';
    contentArea.appendChild(projectContentContainer);
  }
}

const updateProjectContentContainer = (projectsArray, projectIndex) => {
  const projectContentContainer = document.getElementById('project-content-container');
  const projectContent = document.createElement('div');
  projectContent.id = 'project-content';
  projectContent.classList.add('mx-auto');
  projectContent.innerHTML = `
    <div id="project-content-top" class="mx-auto">
      <h1 class="h3 my-3 text-center">${projectsArray[projectIndex].title}</h1>
      <button id="create-new-todo-button" class="btn btn-primary my-3" data-project-idx="${projectIndex}">Create New Todo</button>
    </div>
  `;
  projectContentContainer.appendChild(projectContent);
}

const createTodoButtonEventListener = () => {
  const todoFormWarpper = document.getElementById('todo-form-wrapper')
  const createNewTodoButton = document.getElementById('create-new-todo-button');
  createNewTodoButton.addEventListener('click', () => {
    todoFormWarpper.classList.toggle('d-none');
    console.log('Button clicked');
  });
}

const createNewTodo = () => {

}

const displayProjectContent = (projectsArray, projectIndex) => {
  resetProjectContentContainer();
  updateProjectContentContainer(projectsArray, projectIndex);
  createTodoButtonEventListener();
}

export { displayProjectContent };