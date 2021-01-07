/*
  eslint-disable no-underscore-dangle
*/

import Todo from './Todo';

describe('Todo', () => {
	let newTodo;
	beforeEach(() => {
		const args = ['Test Todo Title', 'Now', 'High', 'Working', 'Test Todo Description'];
		newTodo = new Todo(...args);
	});

	test('allows creating a new Todo', () => {
		expect(newTodo instanceof Todo).toBe(true);
		expect(newTodo).toEqual({
			_title: 'Test Todo Title',
			_dueDate: 'Now',
			_priority: 'High',
			_status: 'Working',
			_description: 'Test Todo Description',
		});
	});

	test('allows getting the title', () => {
		expect(newTodo.title).toBe(newTodo._title);
	});

	test('allows setting the title', () => {
		newTodo.title = 'New Test Title';
		expect(newTodo.title).toBe('New Test Title');
	});

	test('allows getting the dueDate', () => {
		expect(newTodo.dueDate).toBe(newTodo._dueDate);
	});

	test('allows setting the dueDate', () => {
		newTodo.title = 'New Now';
		expect(newTodo.title).toBe('New Now');
	});

	test('allows getting the priority', () => {
		expect(newTodo.priority).toBe(newTodo._priority);
	});

	test('allows setting the priority', () => {
		newTodo.priority = 'New High';
		expect(newTodo.priority).toBe('New High');
	});

	test('allows getting the status', () => {
		expect(newTodo.status).toBe(newTodo._status);
	});

	test('allows setting the status', () => {
		newTodo.status = 'Completed';
		expect(newTodo.status).toBe('Completed');
	});

	test('allows getting the description', () => {
		expect(newTodo.description).toBe(newTodo._description);
	});

	test('allows setting the description', () => {
		newTodo.description = 'New test description';
		expect(newTodo.description).toBe('New test description');
	});
});