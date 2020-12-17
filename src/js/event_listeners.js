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

const todoCreateEventListener = () => {
	const todoCreateForm = document.getElementById('todo-create');
	todoCreateForm.addEventListener('submit', (e) => {
		e.preventDefault();
		DomModule.addTodoListToProject();
		todoCreateForm.reset();
	});
};

const editTodoButtonEventListener = () => {
	const projectTodosList = document.getElementById('project-todos-list');
	projectTodosList.addEventListener('click', (e) => {
		const currentTodoIndex = e.target.dataset.todoEditIdx;
		if (currentTodoIndex) {
			DomModule.setTodoEditFormValues(currentTodoIndex);
		}
	});
};

const todoSaveChangesEventListener = () => {
	const todoEditForm = document.getElementById('todo-edit');
	todoEditForm.addEventListener('submit', (e) => {
		e.preventDefault();
		DomModule.updateCurrentTodo();
	});
};

const todoDeleteEventListener = () => {
	const projectTodosList = document.getElementById('project-todos-list');
	projectTodosList.addEventListener('click', (e) => {
		const currentTodoIndex = e.target.dataset.todoDeleteIdx;
		const confirmDelete = window.confirm('Are you sure you want to delete this Todo?');
		if (currentTodoIndex && confirmDelete) {
			DomModule.deleteCurrentTodo(currentTodoIndex);
		}
	});
}

export {
	projectFormEventListener,
	projectLinkEventListener,
	todoCreateEventListener,
	editTodoButtonEventListener,
	todoSaveChangesEventListener,
	todoDeleteEventListener,
};