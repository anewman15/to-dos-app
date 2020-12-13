import * as ProjectDomCache from './project_dom_cache';
import * as TodoDomCache from './todo_dom_cache';

const createNewProjectButton = document.getElementById('create-new-project-button');
const projectFormWrapper = document.getElementById('project-form-wrapper');
const todoFormWrapper = document.getElementById('todo-form-wrapper');
const projectForm = document.getElementById('project-form');




ProjectDomCache.addDefaultProject();
ProjectDomCache.projectLinkClickHandler();