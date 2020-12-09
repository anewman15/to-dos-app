const createNewProjectButton = document.getElementById('create-new-project-button');
const projectForm = document.getElementById('project-form-wrapper');

createNewProjectButton.addEventListener('click', () => {
	projectForm.classList.toggle('d-none');
})