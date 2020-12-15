import * as DomModule from './dom_module';
import * as Storage from './storage';

const createNewProjectButtonEventListener = () => {
	const createNewProjectButton = document.getElementById('create-new-project-button');
	createNewProjectButton.addEventListener('click', () => {
		const projectFormWrapper = document.getElementById('project-form-wrapper');
		const todoFormWrapper = document.getElementById('todo-form-wrapper');
		todoFormWrapper.classList.add('d-none');
		projectFormWrapper.classList.toggle('d-none');
	});
};

const projectFormEventListener = () => {
	const projectForm = document.getElementById('project-form');
	const projectFormWrapper = document.getElementById('project-form-wrapper');
	projectForm.addEventListener('submit', (e) => {
		e.preventDefault();
		DomModule.addNewProject();
		projectForm.reset();
		projectFormWrapper.classList.add('d-none');
	});
};

const createTodoButtonEventListener = () => {
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
	const projectFormWrapper = document.getElementById('project-form-wrapper');
	const createNewTodoButton = document.getElementById('create-new-todo-button');
	if(createNewTodoButton) {
		createNewTodoButton.addEventListener('click', () => {
			projectFormWrapper.classList.add('d-none');
			todoFormWrapper.classList.toggle('d-none');
		});
	}
}

const projectLinkEventListener = () => {
	const projectsPanel = document.getElementById('projects-panel');
	projectsPanel.addEventListener('click', (e) => {
		const projectsArray = Storage.getProjects();
		const projectIndex = e.target.dataset.projectIdx;
		if (projectIndex) {
			DomModule.displayProjectContent(projectsArray, projectIndex);
			createTodoButtonEventListener();
		}
	});
};

const todoFormEventListener = () => {
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
  const todoForm = document.getElementById('todo-form');
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    DomModule.createNewTodo();
    console.log('Submitted');
    todoForm.reset();
    todoFormWrapper.classList.add('d-none');
  });
}

export {
	createNewProjectButtonEventListener,
	projectFormEventListener,
	projectLinkEventListener,
	createTodoButtonEventListener,
	todoFormEventListener,
};