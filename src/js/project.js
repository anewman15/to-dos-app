const myProjects = [];

export class Project {
	constructor(title) {
		this.title = title;
	}

	addProjectToList() {
		myProjects.push(this);
	}
}

const createDefaultProject = () => {
	const newProject = new Project('Default Project');
	newProject.addProjectToList();
};

const createNewProject = () => {
	const projectTitle = document.getElementById('project-form-title').value;
	const newProject = new Project(projectTitle);
	newProject.addProjectToList();
};

const displayProjectList = () => {
	const projectList = document.createElement('ul');
	projectList.innerHTML = '';
	myProjects.forEach(project => {
		projectList.innerHTML = `
			<li>${project.title}</li>
		`;
	});
};

const addNewProject = () => {
	createNewProject();
	displayProjectList();
};

export { createDefaultProject, addNewProject };
