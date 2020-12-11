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
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
  const projectFormWrapper = document.getElementById('project-form-wrapper');
  const createNewTodoButton = document.getElementById('create-new-todo-button');
  createNewTodoButton.addEventListener('click', () => {
    projectFormWrapper.classList.add('d-none');
    todoFormWrapper.classList.toggle('d-none');
  });
}

const createNewTodo = (projectsArray) => {
  const todoFormTitle = document.getElementById('todo-form-title').value;
  const todoFormDueDate = document.getElementById('todo-form-due-date').value;
  const todoFormPriority = document.getElementById('todo-form-priority').value;
  const todoFormDescription = document.getElementById('todo-form-description').value;
  const { projectIdx } = document.getElementById('create-new-todo-button').dataset;

  const newTodo = new Todo(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);
  newTodo.addTodoToProject(projectsArray[projectIdx]);
}

const todoFormEventListener = (projectsArray) => {
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
  const todoForm = document.getElementById('todo-form');
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createNewTodo(projectsArray);
    console.log('Submitted');
    todoForm.reset();
    todoFormWrapper.classList.add('d-none');
  });
}

const displayProjectContent = (projectsArray, projectIndex) => {
  resetProjectContentContainer();
  updateProjectContentContainer(projectsArray, projectIndex);
  createTodoButtonEventListener();
}

export { displayProjectContent, todoFormEventListener };