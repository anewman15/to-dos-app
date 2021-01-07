/*
  eslint-disable no-underscore-dangle
*/

import * as Storage from './storage';

export default class Todo {
	constructor(title, dueDate, priority, status, description) {
		this._title = title;
		this._dueDate = dueDate;
		this._priority = priority;
		this._status = status;
		this._description = description;
	}

	addTodoToProject(projectIndex) {
		Storage.addTodo(this, projectIndex);
	}

	addUpdatedTodoToProject(projectIndex, todoIndex) {
		Storage.updateTodo(this, projectIndex, todoIndex);
	}

	get title() {
		return this._title;
	}

	set title(_value) {
		this._title = _value;
	}

	get dueDate() {
		return this._dueDate;
	}

	set dueDate(_value) {
		this._dueDate = _value;
	}

	get priority() {
		return this._priority;
	}

	set priority(_value) {
		this._priority = _value;
	}

	get status() {
		return this._status;
	}

	set status(_value) {
		this._status = _value;
	}

	get description() {
		return this._description;
	}

	set description(_value) {
		this._description = _value;
	}
}