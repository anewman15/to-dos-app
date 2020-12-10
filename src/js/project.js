export default class Project {
	#title;
	#todos;

	constructor(title) {
		this.#title = title;
		this.#todos = [];
	}

	addProjectToArray(projectsArray) {
		projectsArray.push(this);
	}

	get title() {
		return this.#title;
	}

	get todos() {
		return this.#todos;
	}

	addTodo(newTodo) {
		this.#todos.push(newTodo);
	}

	removeTodo(index) {
		this.#todos.splice(index, 1);
	}
}