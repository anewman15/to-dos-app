import Project from './Project';
import Todo from './Todo';
import * as Storage from './storage';

const createNewProject = () => {
	const projectTitle = document.getElementById('project-form-title').value;
  const newProject = new Project(projectTitle);
	newProject.addProjectToStorage();
};

export const displayProjectList = () => {
  const projectsArray = Storage.getProjects();
	const projectsPanel = document.getElementById('projects-panel');
	projectsPanel.innerHTML = `
    <h1 class="h3 mb-3 text-center">Your Projects</h1>
  `;
	const projectList = document.createElement('ul');
	projectList.classList.add('list-group');
	projectsArray.forEach((project, index) => {
		projectList.innerHTML += `
		<li class="list-group-item">
			<a class="project-link btn btn-link text-left" data-project-idx="${index}">${project.title}</a>
		</li>
		`;
	});
	projectsPanel.appendChild(projectList);
};

export const addDefaultProject = () => {
  const newProject = new Project('Fire is Calling You...');
	newProject.addProjectToStorage();
	displayProjectList();
};

export const addNewProject = () => {
	createNewProject();
	displayProjectList();
};

const resetProjectContentContainer = () => {
  const projectContentContainer = document.getElementById('project-content-container');
  if (projectContentContainer) {
    projectContentContainer.innerHTML = '';
  } else {
    const contentArea = document.getElementById('content-area');
    const projectContentContainer = document.createElement('div');
    projectContentContainer.id = 'project-content-container';
    projectContentContainer.classList = 'col-md p-3 bg-light my-4 text-center';
    contentArea.appendChild(projectContentContainer);
  }
}

const updateProjectContentContainer = (projectsArray, projectIndex) => {
  const projectContentContainer = document.getElementById('project-content-container');
  const projectContent = document.createElement('div');
  projectContent.id = `project-content`;
  projectContent.classList.add('mx-auto');
  projectContent.innerHTML = `
    <div id="project-content-top" class="mx-auto">
      <h1 class="h3 my-3 text-center">${projectsArray[projectIndex].title}</h1>
      <button id="create-new-todo-button" class="btn btn-primary my-3" data-project-idx="${projectIndex}">Create New Todo</button>
    </div>
  `;
  projectContentContainer.appendChild(projectContent);
}

export const createNewTodo = (projectIndex) => {
  const todoFormTitle = document.getElementById('todo-form-title').value;
  const todoFormDueDate = document.getElementById('todo-form-due-date').value;
  const todoFormPriority = document.getElementById('todo-form-priority').value;
  const todoFormDescription = document.getElementById('todo-form-description').value;
  const newTodo = new Todo(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);
  newTodo.addTodoToProject(projectIndex);
  console.log(newTodo.title);
}

const createDefaultTodo = (projectsArray) => {
  const todoFormDescription = 'Create a New Todo under Default Project or Create a New Project and add a Todo there'
  const defaultTodo = new Todo('Default Todo', 'Now', 'Immediate', todoFormDescription);
  defaultTodo.addTodoToProject(projectsArray[0]);
}

const displayProjectTodoList = (projectsArray, projectIndex) => {
  const projectContent = document.getElementById('project-content');
  const projectTodosContainer = document.createElement('div');
  projectTodosContainer.id = 'project-todos-container';
  projectTodosContainer.classList.add('container col row mx-auto');
  projectTodosContainer.innerHTML += `
  <div class="col bg-info mx-auto my-4 p-3">
  <div class="todo-info-top">
    <div class="px-1">
      <p id="todo-title">Todo Title</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="px-1">
        <p><span>Priority:</span><span id="todo-priority" class="ml-2">Immediate</span></p>
      </div>
      <div class="p-1">
        <p><span>Due:</span><span id="todo-due" class="ml-2">Date and Time</span></p>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <p class="px-1">Description:</p>
      <div class="px-1">
        <p><span>Status:</span><span id="todo-status" class="ml-2">Not Completed</span></p>
      </div>
    </div>
  </div>
  <div class="px-1">
    <p id="todo-description">
      Dummy Description
    </p>
  </div>
</div>
  `;
}

const addTodoListToProject = () => {
  const projectsArray = Storage.getProjects();
  const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
}

export const displayProjectContent = (projectsArray, projectIndex) => {
  resetProjectContentContainer();
  updateProjectContentContainer(projectsArray, projectIndex);
}