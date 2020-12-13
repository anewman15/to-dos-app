import Project from './project';
import Todo from './todo';

const projectLinkClickHandler = () => {
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


export { displayProjectContent, todoFormEventListener, createDefaultTodo };