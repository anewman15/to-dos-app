import {
	parseISO, format, formatDistanceToNow, isFuture,
} from 'date-fns';
import Project from './Project';
import Todo from './Todo';
import * as Storage from './storage';
import { editTodoButtonEventListener, todoDeleteEventListener, projectDeleteEventListener } from './event_listeners';

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
	if (projectsArray.length > 0) {
		projectsArray.forEach((project, index) => {
			projectList.innerHTML += `
			<li class="list-group-item">
				<a class="project-link btn-link text-left" data-project-idx="${index}">${project.title}</a>
			</li>
			`;
		});
	}
	projectsPanel.appendChild(projectList);
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
};

const updateProjectContentContainer = (projectsArray, projectIndex) => {
	const projectContentContainer = document.getElementById('project-content-container');
	const projectContent = document.createElement('div');
	projectContent.id = 'project-content';
	projectContent.classList.add('mx-auto');
	projectContent.innerHTML = `
    <div id="project-content-top" class="mx-auto">
      <h1 class="h2 font-weight-bold my-3 text-center">${projectsArray[projectIndex].title}</h1>
			<button id="delete-project-button" class="btn btn-danger my-3" data-project-idx="${projectIndex}">
				Delete Project
			</button>
			<button id="create-new-todo-button" class="btn btn-primary my-3" data-project-idx="${projectIndex}"
				data-toggle="modal" data-target="#createTodoModal">
				Create New Todo
			</button>
		</div>
		<div id="project-list-container">
		</div>
  `;
	projectContentContainer.appendChild(projectContent);
	projectDeleteEventListener();
};

export const createNewTodo = () => {
	const todoCreateTitle = document.getElementById('todo-create-title').value;
	const todoCreateDueDate = document.getElementById('todo-create-due-date').value;
	const todoCreatePriority = document.getElementById('todo-create-priority').value;
	const todoCreateStatus = document.getElementById('todo-create-status').value;
	const todoCreateDescription = document.getElementById('todo-create-description').value;
	const newTodo = new Todo(todoCreateTitle, todoCreateDueDate,
		todoCreatePriority, todoCreateStatus, todoCreateDescription);
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	newTodo.addTodoToProject(projectIdx);
};

const displayProjectTodoList = () => {
	const projectListContainer = document.getElementById('project-list-container');
	projectListContainer.innerHTML = '';
	const projectTodosList = document.createElement('div');
	projectTodosList.id = 'project-todos-list';
	projectTodosList.classList.add('container', 'col', 'mx-auto', 'mt-5');
	const projectsArray = Storage.getProjects();
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	const currentProject = projectsArray[projectIdx];
	const projectTodos = currentProject.todos;
	projectTodosList.innerHTML = `
		<h1 class="h3 m-0 text-center">${projectTodos.length} Todos in this Project</h1>
		<hr class="p-0">
	`;
	if (projectTodos) {
		projectTodos.forEach((todo, index) => {
			const todoDueDate = new Date(parseISO(todo.dueDate));
			const formattedDueDate = format(todoDueDate, 'MMM dd, yyyy - EEE HH:mm');
			const timeLeft = isFuture(todoDueDate) ? formatDistanceToNow(todoDueDate) : 'Deadline Passed';
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
								<p class="my-1 text-left">
									<span class="font-weight-bold">Status:</span>
									<span id="todo-status" class="ml-2">${todo.status}</span>
								</p>
							</div>
							<div class="px-1">
								<p class="my-1 text-right">
									<span class="font-weight-bold">Priority:</span>
									<span id="todo-priority" class="ml-2">${todo.priority}</span>
								</p>
							</div>
						</div>
						<div class="d-flex justify-content-between">
							<div class="px-1">
								<p class="m-0 text-left">
									<span class="font-weight-bold">Due:</span>
									<span id="todo-due" class="ml-2">${formattedDueDate}</span>
								</p>
							</div>
							<div class="px-1">
								<p class="m-0 text-right"><span class="font-weight-bold">Time Left:</span><span id="time-left" class="ml-2">${timeLeft}</span></p>
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
						<button class="edit-todo-button btn btn-warning my-3 font-weight-bold" data-todo-edit-idx="${index}"
							data-toggle="modal" data-target="#editTodoModal">
							Edit Todo
						</button>
						<button class="delete-todo-button btn btn-danger my-3 font-weight-bold" data-todo-delete-idx="${index}">
							Delete Todo
						</button>
				</div>
				</div>
			</div>
			`;
		});
	}
	projectListContainer.appendChild(projectTodosList);
	editTodoButtonEventListener();
	todoDeleteEventListener();
};

export const addTodoListToProject = () => {
	createNewTodo();
	displayProjectTodoList();
};

export const displayProjectContent = (projectsArray, projectIndex) => {
	if (projectsArray.length > 0 && projectIndex) {
		resetProjectContentContainer();
		updateProjectContentContainer(projectsArray, projectIndex);
		displayProjectTodoList();
	}
};

export const setTodoEditFormValues = (todoIndex) => {
	const projectsArray = Storage.getProjects();
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	const currentProject = projectsArray[projectIdx];
	const currentTodo = currentProject.todos[todoIndex];

	const todoEditTitle = document.getElementById('todo-edit-title');
	todoEditTitle.value = currentTodo.title;
	const todoEditDueDate = document.getElementById('todo-edit-due-date');
	todoEditDueDate.value = currentTodo.dueDate;
	const todoEditPriority = document.getElementById('todo-edit-priority');
	todoEditPriority.selected = currentTodo.priority;
	const todoEditStatus = document.getElementById('todo-edit-status');
	todoEditStatus.selected = currentTodo.status;
	const todoEditDescription = document.getElementById('todo-edit-description');
	todoEditDescription.value = currentTodo.description;
	const todoEditButton = document.getElementById('todo-edit-button');
	todoEditButton.dataset.todoIdx = todoIndex;
};

export const updateCurrentTodo = () => {
	const todoChangedTitle = document.getElementById('todo-edit-title').value;
	const todoChangedDueDate = document.getElementById('todo-edit-due-date').value;
	const todoChangedPriority = document.getElementById('todo-edit-priority').value;
	const todoChangedStatus = document.getElementById('todo-edit-status').value;
	const todoChangedDescription = document.getElementById('todo-edit-description').value;
	const todoIndex = document.getElementById('todo-edit-button').dataset.todoIdx;
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;

	const updatedTodo = new Todo(todoChangedTitle, todoChangedDueDate, todoChangedPriority,
		todoChangedStatus, todoChangedDescription);
	updatedTodo.addUpdatedTodoToProject(projectIdx, todoIndex);
	displayProjectTodoList();
};

export const deleteCurrentTodo = (todoIndex) => {
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	Storage.deleteTodo(projectIdx, todoIndex);
	displayProjectTodoList();
};

export const deleteCurrentProject = () => {
	const { projectIdx } = document.getElementById('create-new-todo-button').dataset;
	Storage.deleteProject(projectIdx);
	displayProjectList();
};

export const addNewProject = () => {
	createNewProject();
	displayProjectList();
};