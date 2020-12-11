import Project from './project';
import { displayProjectContent } from './todo_dom_cache';

const myProjects = [];

const createNewProject = () => {
	const projectTitle = document.getElementById('project-form-title').value;
	const newProject = new Project(projectTitle);
	newProject.addProjectToArray(myProjects);
};

const displayProjectList = () => {
	const projectsPanel = document.getElementById('projects-panel');
	projectsPanel.innerHTML = `
    <h1 class="h3 text-center">Your Projects</h1>
  `;
	const projectList = document.createElement('ul');
	projectList.classList.add('list-group');
	myProjects.forEach((project, index) => {
		projectList.innerHTML += `
		<li class="list-group-item">
			<a class="project-link btn btn-link" data-project-idx="${index}">${project.title}</a>
		</li>
		`;
	});
	projectsPanel.appendChild(projectList);
};

const projectLinkClickHandler = () => {
	document.addEventListener('click', (e) => {
		const projectIndex = e.target.dataset.projectIdx;
		if (projectIndex) {
			displayProjectContent(myProjects, projectIndex);
		}
	});
};

const addDefaultProject = () => {
	const newProject = new Project('Default Project');
	newProject.addProjectToArray(myProjects);
	displayProjectList();
	projectLinkClickHandler();
};

const addNewProject = () => {
	createNewProject();
	displayProjectList();
	projectLinkClickHandler();
};

export { addDefaultProject, addNewProject, projectLinkClickHandler };