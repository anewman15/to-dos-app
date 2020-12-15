import * as Storage from './storage';
export default class Project {
	#title;

	#todos;

	constructor(title) {
		this.#title = title;
		this.#todos = [];
	}

	addProjectToStorage() {
		Storage.addProject(this);
	}

	get title() {
		return this.#title;
	}

	get todos() {
		return this.#todos;
	}

	removeTodo(index) {
		this.#todos.splice(index, 1);
	}
}