import * as DomModule from './dom_module';
import * as EventListeners from './event_listeners';
import * as Storage from './storage';

Storage.initiateProjectsStore();

DomModule.displayProjectList();
// EventListeners.createNewProjectButtonEventListener();
EventListeners.projectFormEventListener();
EventListeners.projectLinkEventListener();
EventListeners.todoCreateEventListener();