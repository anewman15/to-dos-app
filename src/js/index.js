import * as DomCache from './dom_cache';

const myProjects = [];

const createNewProjectButton = document.getElementById('create-new-project-button');
const projectFormWrapper = document.getElementById('project-form-wrapper');
const projectForm = document.getElementById('project-form');

createNewProjectButton.addEventListener('click', () => {
	projectFormWrapper.classList.toggle('d-none');
});

projectForm.addEventListener('submit', (e) => {
	e.preventDefault();
	DomCache.addNewProject(myProjects);
	projectForm.reset();
	projectFormWrapper.classList.add('d-none');
});

DomCache.addDefaultProject(myProjects);