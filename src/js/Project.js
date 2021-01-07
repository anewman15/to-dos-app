/*
  eslint-disable no-underscore-dangle
*/

import * as Storage from './storage';

export default class Project {
	constructor(title) {
		this._title = title;
		this._todos = [];
	}

	addProjectToStorage() {
		Storage.addProject(this);
	}

	get title() {
		return this._title;
	}

	get todos() {
		return this._todos;
	}

	removeTodo(index) {
		this._todos.splice(index, 1);
	}
}