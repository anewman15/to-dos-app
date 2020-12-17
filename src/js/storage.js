const initiateProjectsStore = () => {
	if (localStorage.projects) {
		return;
	} else {
		const projectsArray = [
			{
				title: 'Fire is Calling You...',
				todos: [
					{
						title: 'Create a Todo',
						dueDate: new Date(),
						priority: 'Urgent',
						status: 'Working',
						description: 'Create a new Todo here or create a new Project and then add Todos there. Good Luck!'
					}
				]
			}
		];
		localStorage.setItem('projects', JSON.stringify(projectsArray));
	}
}

const getProjects = () => {
	const projects = JSON.parse(localStorage.getItem('projects'));
	return projects;
}

const addProject = (newProject) => {
	const storedProjects = getProjects();
	storedProjects.push({ title: newProject.title, todos: newProject.todos });
	const updatedStoredProjects = JSON.stringify(storedProjects);
	localStorage.setItem('projects', updatedStoredProjects);
}

const addTodo = (newTodo, projectIndex) => {
	const storedProjects = getProjects();
	const todoLiteral = {
		title: newTodo.title,
		dueDate: newTodo.dueDate,
		priority: newTodo.priority,
		status: newTodo.status,
		description: newTodo.description,
	};
	storedProjects[projectIndex].todos.push(todoLiteral);
	const updatedStoredProjects = JSON.stringify(storedProjects);
	localStorage.setItem('projects', updatedStoredProjects);
};

const updateTodo = (updatedTodo, projectIndex, todoIndex) =>  {
	const storedProjects = getProjects();
	const updatedTodoLiteral = {
		title: updatedTodo.title,
		dueDate: updatedTodo.dueDate,
		priority: updatedTodo.priority,
		status: updatedTodo.status,
		description: updatedTodo.description,
	};
	storedProjects[projectIndex].todos[todoIndex] = updatedTodoLiteral;
	const updatedStoredProjects = JSON.stringify(storedProjects);
	localStorage.setItem('projects', updatedStoredProjects);
};

export { initiateProjectsStore, getProjects, addProject, addTodo, updateTodo };