import Todo from './Todo';

describe('Todo', () => {
	let newTodo;
	beforeEach(() => {
		const args = ['Test Todo Title', 'Now', 'High', 'Working', 'Test Todo Description'];
		newTodo = new Todo(...args);
	});

	test('creates a new Todo', () => {
		expect(newTodo instanceof Todo).toBe(true);
		expect(newTodo).toEqual({
			_title: 'Test Todo Title',
			_dueDate: 'Now',
			_priority: 'High',
			_status: 'Working',
			_description: 'Test Todo Description',
		});
	});
});