import * as DomModule from './dom_module';
import * as EventListeners from './event_listeners';
import * as Storage from './storage';

Storage.initiateProjectsStore();
const obj = { birthplace: 'Comilla' };
Storage.updateProjectsStore(obj);
const country = { country: 'Bangladesh' };
Storage.addProjectToStore(country);
console.log(Storage.getProjects());

DomModule.addDefaultProject()

const createNewProjectButton = document.getElementById('create-new-project-button');
const projectFormWrapper = document.getElementById('project-form-wrapper');
const todoFormWrapper = document.getElementById('todo-form-wrapper');
const projectForm = document.getElementById('project-form');




// ProjectDomCache.addDefaultProject();
// ProjectDomCache.projectLinkClickHandler();