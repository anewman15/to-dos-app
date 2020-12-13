import * as DomModule from './dom_module';
import * as Storage from './storage';

Storage.initiateProjectsStore();
const obj = { birthplace: 'Comilla' };
Storage.updateProjectsStore(obj);
const country = { country: 'Bangladesh' };
Storage.updateProjectsStore(country);
console.log(Storage.getProjects());



const createNewProjectButton = document.getElementById('create-new-project-button');
const projectFormWrapper = document.getElementById('project-form-wrapper');
const todoFormWrapper = document.getElementById('todo-form-wrapper');
const projectForm = document.getElementById('project-form');




// ProjectDomCache.addDefaultProject();
// ProjectDomCache.projectLinkClickHandler();