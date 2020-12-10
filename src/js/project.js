const myProjects = [];

class Project {
	constructor(title) {
		this.title = title;
	}

	addProjectToArray() {
		myProjects.push(this);
	}

	getTitle() {
		return this.title;
	}
}

const createNewProject = () => {
	const projectTitle = document.getElementById('project-form-title').value;
	const newProject = new Project(projectTitle);
	newProject.addProjectToArray();
};

const displayProjectList = () => {
	const projectsPanel = document.getElementById('projects-panel');
	projectsPanel.innerHTML = '';
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
	newProject.addProjectToArray();
	displayProjectList();
};

const addNewProject = () => {
	createNewProject();
	displayProjectList();
};

export { myProjects, addDefaultProject, addNewProject };
