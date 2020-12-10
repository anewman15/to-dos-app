import Project from './project';

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
	myProjects.forEach(project => {
		projectList.innerHTML += `
		<li class="list-group-item">
			<a class="btn btn-link">${project.getTitle()}</a>
		</li>
		`;
	});
	projectsPanel.appendChild(projectList);
};

const addDefaultProject = () => {
	const newProject = new Project('Default Project');
	newProject.addProjectToArray(myProjects);
	displayProjectList();
};

const addNewProject = () => {
	createNewProject();
	displayProjectList();
};

export { myProjects, addDefaultProject, addNewProject };