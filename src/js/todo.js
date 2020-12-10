const projectTodos = [];

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
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
}