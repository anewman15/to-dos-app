export default class Project {
	constructor(title) {
		this.title = title;
		this.todos = [];
	}

	addProjectToArray(projectsArray) {
		projectsArray.push(this);
	}

	getTitle() {
		return this.title;
	}

	getTodos() {
		return this.todos;
	}

	addTodo(newTodo) {
		this.todos.push(newTodo);
	}

	removeTodo(index) {
		this.todos.splice(index, 1);
	}
}