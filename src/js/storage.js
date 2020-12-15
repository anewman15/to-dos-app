const initiateProjectsStore = () => {
  if (localStorage.projects) {
    return;
  } else {
  const projectsArray = [{title: 'Fire is Calling You...', todos: []}];
  localStorage.setItem('projects', JSON.stringify(projectsArray));
  }
}

const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  return projects;
}

const addProject = (newProject) => {
  const storedProjects = getProjects();
  storedProjects.push({title: newProject.title, todos: newProject.todos});
  const updatedStoredProjects = JSON.stringify(storedProjects);
  localStorage.setItem('projects', updatedStoredProjects);
}

export { initiateProjectsStore, getProjects, addProject };