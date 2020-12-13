const initiateProjectsStore = () => {
  const projectsArray = [];
  localStorage.setItem('projects', JSON.stringify(projectsArray));
}

const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  return projects;
}

const addProject = (newProject) => {
  const projects = getProjects();
  projects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects));
}

export { initiateProjectsStore, getProjects, addProject };