export default class Todo {
	#title;

	#dueDate;

	#priority;

	#description;

	#checklist = [];

	#completedStatus = false;

	constructor(title, dueDate, priority, description) {
		this.#title = title;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#description = description;
	}

	addTodoToProject(project) {
		project.addTodo(this);
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

	get description() {
		return this.#description;
	}

	get checklist() {
		return this.#checklist;
	}

	set checklist(_value) {
		this.checklist = _value;
	}

	get completedStatus() {
		return this.#completedStatus;
	}

	changeCompletedStatus() {
		if (this.#completedStatus) {
			this.#completedStatus = false;
		} else {
			this.#completedStatus = true;
		}
	}
}