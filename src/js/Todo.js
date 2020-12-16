import * as Storage from './storage';

export default class Todo {
	#title;

	#dueDate;

	#priority;

	#status;

	#description;

	constructor(title, dueDate, priority, status, description) {
		this.#title = title;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#status = status;
		this.#description = description;
	}

	addTodoToProject(projectIndex) {
		Storage.addTodo(this, projectIndex);
	}

	get title() {
		return this.#title;
	}

	set title(_value) {
		this.#title = _value;
	}

	get dueDate() {
		return this.#dueDate;
	}

	get priority() {
		return this.#priority;
	}

	set priority(_value) {
		this.#priority = _value;
	}

	get status() {
		return this.#status;
	}

	get description() {
		return this.#description;
	}
}