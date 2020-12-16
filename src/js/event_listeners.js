import * as DomModule from './dom_module';
import * as Storage from './storage';

const projectFormEventListener = () => {
	const projectFormButton = document.getElementById('project-form');
	projectFormButton.addEventListener('submit', (e) => {
		e.preventDefault();
		DomModule.addNewProject();
		projectFormButton.reset();
	});
};

const createTodoButtonEventListener = () => {
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
	const createNewTodoButton = document.getElementById('create-new-todo-button');
	if (createNewTodoButton) {
		createNewTodoButton.addEventListener('click', () => {
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
		}
	});
};

const todoFormEventListener = () => {
  const todoCreateForm = document.getElementById('todo-create');
  todoCreateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    DomModule.addTodoListToProject();
    console.log('Submitted');
    todoCreateForm.reset();
  });
}

export {
	projectFormEventListener,
	projectLinkEventListener,
	createTodoButtonEventListener,
	todoFormEventListener,
};