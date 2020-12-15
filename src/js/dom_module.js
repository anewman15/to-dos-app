import Project from './Project';
import Todo from './Todo';
import * as Storage from './storage';

const createNewProject = () => {
	const projectTitle = document.getElementById('project-form-title').value;
  const newProject = new Project(projectTitle);
	newProject.addProjectToStorage();
};

const displayProjectList = () => {
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
			<a class="project-link btn btn-link" data-project-idx="${index}">${project.title}</a>
		</li>
		`;
	});
	projectsPanel.appendChild(projectList);
};

export const addDefaultProject = () => {
  const newProject = new Project('Default Project');
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

const createNewTodo = (projectsArray) => {
  const todoFormTitle = document.getElementById('todo-form-title').value;
  const todoFormDueDate = document.getElementById('todo-form-due-date').value;
  const todoFormPriority = document.getElementById('todo-form-priority').value;
  const todoFormDescription = document.getElementById('todo-form-description').value;
  const { projectIdx } = document.getElementById('create-new-todo-button').dataset;

  const newTodo = new Todo(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);
  newTodo.addTodoToProject(projectsArray[projectIdx]);
}

const createDefaultTodo = (projectsArray) => {
  const todoFormDescription = 'Create a New Todo under Default Project or Create a New Project and add a Todo there'
  const defaultTodo = new Todo('Default Todo', 'Now', 'Immediate', todoFormDescription);
  defaultTodo.addTodoToProject(projectsArray[0]);
}

const displayProjectContent = (projectsArray, projectIndex) => {
  resetProjectContentContainer();
  updateProjectContentContainer(projectsArray, projectIndex);
}