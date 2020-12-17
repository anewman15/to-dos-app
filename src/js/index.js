import { displayProjectList, displayProjectContent } from './dom_module';
import * as EventListeners from './event_listeners';
import * as Storage from './storage';

Storage.initiateProjectsStore();
displayProjectList();
displayProjectContent(Storage.getProjects(), 0);

EventListeners.projectFormEventListener();
EventListeners.projectLinkEventListener();
EventListeners.todoCreateEventListener();
EventListeners.todoSaveChangesEventListener();