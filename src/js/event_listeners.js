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
		window.alert('Todo created successfully!');
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
		const confirmChanges = window.confirm('Save Changes?');
		if (confirmChanges) {
			DomModule.updateCurrentTodo();
			window.alert('Changes saved successfully!');
			todoEditForm.reset();
		}
	});
};

const todoDeleteEventListener = () => {
	const projectTodosList = document.getElementById('project-todos-list');
	projectTodosList.addEventListener('click', (e) => {
		const currentTodoIndex = e.target.dataset.todoDeleteIdx;
		if (currentTodoIndex) {
			const confirmDelete = window.confirm('Are you sure you want to delete this Todo?');
			if (confirmDelete) {
				DomModule.deleteCurrentTodo(currentTodoIndex);
			}
		}
	});
};

const projectDeleteEventListener = () => {
	const deleteProjectButton = document.getElementById('delete-project-button');
	deleteProjectButton.addEventListener('click', () => {
		const confirmDelete = window.confirm('You are about to delete this project with all its Todos. Are you sure about this?');
		if (confirmDelete) {
			DomModule.deleteCurrentProject();
		}
	});
};

export {
	projectFormEventListener,
	projectLinkEventListener,
	todoCreateEventListener,
	editTodoButtonEventListener,
	todoSaveChangesEventListener,
	todoDeleteEventListener,
	projectDeleteEventListener,
};