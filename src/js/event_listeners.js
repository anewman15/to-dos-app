import * as DomModule from './dom_module';

const createNewProjectButtonEventListener = () => {
	const createNewProjectButton = document.getElementById('create-new-project-button');
	createNewProjectButton.addEventListener('click', () => {
		const projectFormWrapper = document.getElementById('project-form-wrapper');
		const todoFormWrapper = document.getElementById('todo-form-wrapper');
		todoFormWrapper.classList.add('d-none');
		projectFormWrapper.classList.toggle('d-none');
	});
}

const projectFormEventListener = (projectsArray) => {
	const projectForm = document.getElementById('project-form');
	const projectFormWrapper = document.getElementById('project-form-wrapper');
	projectForm.addEventListener('submit', (e) => {
		e.preventDefault();
		DomModule.addNewProject();
		projectForm.reset();
		projectFormWrapper.classList.add('d-none');
		console.log('Form submitted');
	});
}

const projectLinkEventListener = (projectsArray) => {
	document.addEventListener('click', (e) => {
		const projectIndex = e.target.dataset.projectIdx;
		if (projectIndex) {
			displayProjectContent(myProjects, projectIndex);
			todoFormEventListener(myProjects);
		}
	});
};

const createTodoButtonEventListener = () => {
  const todoFormWrapper = document.getElementById('todo-form-wrapper');
  const projectFormWrapper = document.getElementById('project-form-wrapper');
  const createNewTodoButton = document.getElementById('create-new-todo-button');
  createNewTodoButton.addEventListener('click', () => {
    projectFormWrapper.classList.add('d-none');
    todoFormWrapper.classList.toggle('d-none');
  });
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

export {
	createNewProjectButtonEventListener,
	projectFormEventListener,
	projectLinkEventListener,
	createTodoButtonEventListener,
	todoFormEventListener,
};