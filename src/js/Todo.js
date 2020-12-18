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

	addUpdatedTodoToProject(projectIndex, todoIndex) {
		Storage.updateTodo(this, projectIndex, todoIndex);
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

	set dueDate(_value) {
		this.#dueDate = _value;
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

	set status(_value) {
		this.#status = _value;
	}

	get description() {
		return this.#description;
	}

	set description(_value) {
		this.#description = _value;
	}
}