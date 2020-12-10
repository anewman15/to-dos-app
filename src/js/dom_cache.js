import Project from './project';
import Todo from './todo';

const createNewProject = (projectsArray) => {
	const projectTitle = document.getElementById('project-form-title').value;
	const newProject = new Project(projectTitle);
	newProject.addProjectToArray(projectsArray);
};

const displayProjectList = (projectsArray) => {
	const projectsPanel = document.getElementById('projects-panel');
	projectsPanel.innerHTML = `
    <h1 class="h3 text-center">Your Projects</h1>
  `;
	const projectList = document.createElement('ul');
	projectList.classList.add('list-group');
	projectsArray.forEach((project, index) => {
		projectList.innerHTML += `
		<li class="list-group-item">
			<a class="btn btn-link" data-project-idx="${index}">${project.title}</a>
		</li>
		`;
	});
	projectsPanel.appendChild(projectList);
};

const addDefaultProject = (projectsArray) => {
	const newProject = new Project('Default Project');
	newProject.addProjectToArray(projectsArray);
	displayProjectList(projectsArray);
};

const addNewProject = (projectsArray) => {
	createNewProject(projectsArray);
	displayProjectList(projectsArray);
};

export { addDefaultProject, addNewProject };