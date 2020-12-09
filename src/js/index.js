import * as Project from './project';

const createNewProjectButton = document.getElementById('create-new-project-button');
const projectFormWrapper = document.getElementById('project-form-wrapper');
const projectForm = document.getElementById('project-form');

createNewProjectButton.addEventListener('click', () => {
	projectFormWrapper.classList.toggle('d-none');
});

Project.addDefaultProject();

projectForm.addEventListener('submit', (e) => {
	e.preventDefault();
	Project.addNewProject();
	projectForm.reset();
	projectFormWrapper.classList.add('d-none');
});
