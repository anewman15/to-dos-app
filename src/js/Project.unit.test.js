/*
	eslint-disable no-underscore-dangle
*/

import Project from './Project';

describe('Project', () => {
	let newProject;
	beforeEach(() => {
		newProject = new Project('Test Project Title');
	});

	test('allows creating a new Project', () => {
		expect(newProject instanceof Project).toBe(true);
		expect(newProject).toEqual({
			_title: 'Test Project Title',
			_todos: [],
		});
	});

	test('allows getting the title', () => {
		expect(newProject.title).toBe(newProject._title);
	});

	test('allows getting the todo array', () => {
		expect(newProject.todos).toEqual([]);
	});

	test('allows deleting a todo from todos array', () => {
		newProject._todos.push({
			_title: 'Test Todo Title',
			_dueDate: 'Now',
			_priority: 'High',
			_status: 'Working',
			_description: 'Test Todo Description',
		});

		newProject.removeTodo(0);
		expect(newProject.todos).toEqual([]);
	});
});