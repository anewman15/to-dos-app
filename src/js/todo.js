const projectTodos = [];

class Todo {
	constructor(title, dueDate, priority, description) {
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this.description = description;
		this.checklist = [];
		this.completedStatus = false;
	}

	addTodoToArray() {
		projectTodos.push(this);
	}

	getTitle() {
		return this.title;
	}

	setTitle(newTitle) {
		this.title = newTitle;
	}

	getDueDate() {
		return this.dueDate;
	}

	getPriority() {
		return this.priority;
	}

	setPriority(newPriority) {
		this.priority = newPriority;
	}

	getChecklist() {
		return this.checklist;
	}

	setChecklist(newChecklist) {
		this.checklist = newChecklist;
	}

	getCompletedStatus() {
		return this.completedStatus;
	}

	changeCompletedStatus() {
		if (this.completedStatus) {
			this.completedStatus = false;
		} else {
			this.completedStatus = true;
		}
	}

}