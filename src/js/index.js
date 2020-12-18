import { displayProjectList } from './dom_module';
import * as EventListeners from './event_listeners';
import * as Storage from './storage';

Storage.initiateProjectsStore();
displayProjectList();

EventListeners.projectFormEventListener();
EventListeners.projectLinkEventListener();
EventListeners.todoCreateEventListener();
EventListeners.todoSaveChangesEventListener();