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
			<a class="project-link btn-link text-left" data-project-idx="${index}">${project.title}</a>
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
	projectContent.id = 'project-content';
	projectContent.classList.add('mx-auto');
	projectContent.innerHTML = `
    <div id="project-content-top" class="mx-auto">
      <h1 class="h2 font-weight-bold my-3 text-center">${projectsArray[projectIndex].title}</h1>
      <button id="create-new-todo-button" class="btn btn-primary my-3" data-project-idx="${projectIndex}" data-toggle="modal" data-target="#createTodoModal">Create New Todo</button>
		</div>
		<div id="project-list-container">
		</div>
  `;
	projectContentContainer.appendChild(projectContent);
}

export const createNewTodo = () => {
	const todoFormTitle = document.getElementById('todo-form-title').value;
	const todoFormDueDate = document.getElementById('todo-form-due-date').value;
	const todoFormPriority = document.getElementById('todo-form-priority').value;
	const todoFormDescription = document.getElementById('todo-form-description').value;
	const newTodo = new Todo(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);
	console.log(newTodo.title);
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	newTodo.addTodoToProject(projectIdx);
}

const createDefaultTodo = (projectsArray) => {
	const todoFormDescription = 'Create a New Todo under Default Project or Create a New Project and add a Todo there'
	const defaultTodo = new Todo('Default Todo', 'Now', 'Immediate', todoFormDescription);
	defaultTodo.addTodoToProject(projectsArray[0]);
}

const displayProjectTodoList = () => {
	const projectListContainer = document.getElementById('project-list-container');
	projectListContainer.innerHTML = '';
	const projectTodosList = document.createElement('div');
	projectTodosList.id = 'project-todos-list';
	projectTodosList.classList.add('container', 'col', 'mx-auto', 'mt-5');
	const projectsArray = Storage.getProjects();
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	const projectTodos = projectsArray[projectIdx].todos;
	projectTodosList.innerHTML = `
		<h1 class="h3 m-0 text-center">You have ${projectTodos.length} Todos</h1>
		<hr class="p-0">
	`;
	if (projectTodos) {
		projectTodos.forEach((todo, index) => {
			projectTodosList.innerHTML += `
			<div class="row mx-auto text-white">
				<div class="col bg-info mx-auto my-4 p-3 rounded">
					<div class="px-1">
						<h1 id="todo-title" class="h3 font-weight-bold">${todo.title}</h1>
					</div>
					<hr class="p-0 mt-0 mb-1">
					<div class="todo-info">
						<div class="d-flex justify-content-between">
							<div class="px-1">
								<p class="my-1"><span class="font-weight-bold">Status:</span><span id="todo-status" class="ml-2">${todo.completedStatus}</span></p>
							</div>
							<div class="px-1">
								<p class="my-1"><span class="font-weight-bold">Priority:</span><span id="todo-priority" class="ml-2">${todo.priority}</span></p>
							</div>
						</div>
						<div class="d-flex justify-content-between">
							<div class="px-1">
								<p class="m-0"><span class="font-weight-bold">Due:</span><span id="todo-due" class="ml-2">${todo.dueDate}</span></p>
							</div>
							<div class="px-1">
								<p class="m-0"><span class="font-weight-bold">Time Left:</span><span id="time-left" class="ml-2">${todo.dueDate}</span></p>
							</div>
						</div>
					</div>
					<hr class="p-0 mt-0 mb-1">
					<div class="px-1 mt-3 text-left">
						<p class="p-0 my-1 font-weight-bold">Description:</p>
						<p id="todo-description" class="p-0 my-1">
							${todo.description}
						</p>
					</div>
					<hr>
					<div class="text-left d-flex justify-content-between">
						<button id="edit-todo-button" class="btn btn-warning my-3" data-project-idx="${index}"
							data-toggle="modal" data-target="#editTodoModal">
							Edit Todo
						</button>
						<button id="delete-todo-button" class="btn btn-danger my-3" data-project-idx="${index}"
							data-toggle="modal" data-target="#createTodoModal">
							Delete Todo
						</button>
				</div>
				</div>
			</div>
			`;
		});
	}
	projectListContainer.appendChild(projectTodosList);
};

export const addTodoListToProject = () => {
	createNewTodo();
	displayProjectTodoList();
};

export const displayProjectContent = (projectsArray, projectIndex) => {
	resetProjectContentContainer();
	updateProjectContentContainer(projectsArray, projectIndex);
	displayProjectTodoList();
}