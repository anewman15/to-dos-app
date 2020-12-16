/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Project.js":
/*!***************************!*
  !*** ./src/js/Project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Project\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\n\n\nvar _title = new WeakMap();\n\nvar _todos = new WeakMap();\n\nvar Project = /*#__PURE__*/function () {\n  function Project(title) {\n    _classCallCheck(this, Project);\n\n    _title.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _todos.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _title, title);\n\n    _classPrivateFieldSet(this, _todos, []);\n  }\n\n  _createClass(Project, [{\n    key: \"addProjectToStorage\",\n    value: function addProjectToStorage() {\n      _storage__WEBPACK_IMPORTED_MODULE_0__.addProject(this);\n    }\n  }, {\n    key: \"removeTodo\",\n    value: function removeTodo(index) {\n      _classPrivateFieldGet(this, _todos).splice(index, 1);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _title);\n    }\n  }, {\n    key: \"todos\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _todos);\n    }\n  }]);\n\n  return Project;\n}();\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/Project.js?");

/***/ }),

/***/ "./src/js/Todo.js":
/*!************************!*
  !*** ./src/js/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Todo\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\n\n\nvar _title = new WeakMap();\n\nvar _dueDate = new WeakMap();\n\nvar _priority = new WeakMap();\n\nvar _description = new WeakMap();\n\nvar _checklist = new WeakMap();\n\nvar _completedStatus = new WeakMap();\n\nvar Todo = /*#__PURE__*/function () {\n  function Todo(title, dueDate, priority, description) {\n    _classCallCheck(this, Todo);\n\n    _title.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _dueDate.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _priority.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _description.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _checklist.set(this, {\n      writable: true,\n      value: []\n    });\n\n    _completedStatus.set(this, {\n      writable: true,\n      value: false\n    });\n\n    _classPrivateFieldSet(this, _title, title);\n\n    _classPrivateFieldSet(this, _dueDate, dueDate);\n\n    _classPrivateFieldSet(this, _priority, priority);\n\n    _classPrivateFieldSet(this, _description, description);\n  }\n\n  _createClass(Todo, [{\n    key: \"addTodoToProject\",\n    value: function addTodoToProject(projectIndex) {\n      _storage__WEBPACK_IMPORTED_MODULE_0__.addTodo(this, projectIndex);\n    }\n  }, {\n    key: \"changeCompletedStatus\",\n    value: function changeCompletedStatus() {\n      if (_classPrivateFieldGet(this, _completedStatus)) {\n        _classPrivateFieldSet(this, _completedStatus, false);\n      } else {\n        _classPrivateFieldSet(this, _completedStatus, true);\n      }\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _title);\n    },\n    set: function set(_value) {\n      _classPrivateFieldSet(this, _title, _value);\n    }\n  }, {\n    key: \"dueDate\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _dueDate);\n    }\n  }, {\n    key: \"priority\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _priority);\n    },\n    set: function set(_value) {\n      _classPrivateFieldSet(this, _priority, _value);\n    }\n  }, {\n    key: \"description\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _description);\n    }\n  }, {\n    key: \"checklist\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _checklist);\n    },\n    set: function set(_value) {\n      this.checklist = _value;\n    }\n  }, {\n    key: \"completedStatus\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _completedStatus);\n    }\n  }]);\n\n  return Todo;\n}();\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/Todo.js?");

/***/ }),

/***/ "./src/js/dom_module.js":
/*!******************************!*
  !*** ./src/js/dom_module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjectList\": () => /* binding */ displayProjectList,\n/* harmony export */   \"addDefaultProject\": () => /* binding */ addDefaultProject,\n/* harmony export */   \"addNewProject\": () => /* binding */ addNewProject,\n/* harmony export */   \"createNewTodo\": () => /* binding */ createNewTodo,\n/* harmony export */   \"addTodoListToProject\": () => /* binding */ addTodoListToProject,\n/* harmony export */   \"displayProjectContent\": () => /* binding */ displayProjectContent\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/js/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/js/Todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n\n\nvar createNewProject = function createNewProject() {\n  var projectTitle = document.getElementById('project-form-title').value;\n  var newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(projectTitle);\n  newProject.addProjectToStorage();\n};\n\nvar displayProjectList = function displayProjectList() {\n  var projectsArray = _storage__WEBPACK_IMPORTED_MODULE_2__.getProjects();\n  var projectsPanel = document.getElementById('projects-panel');\n  projectsPanel.innerHTML = \"\\n    <h1 class=\\\"h3 mb-3 text-center\\\">Your Projects</h1>\\n  \";\n  var projectList = document.createElement('ul');\n  projectList.classList.add('list-group');\n  projectsArray.forEach(function (project, index) {\n    projectList.innerHTML += \"\\n\\t\\t<li class=\\\"list-group-item\\\">\\n\\t\\t\\t<a class=\\\"project-link btn-link text-left\\\" data-project-idx=\\\"\".concat(index, \"\\\">\").concat(project.title, \"</a>\\n\\t\\t</li>\\n\\t\\t\");\n  });\n  projectsPanel.appendChild(projectList);\n};\nvar addDefaultProject = function addDefaultProject() {\n  var newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('Fire is Calling You...');\n  newProject.addProjectToStorage();\n  displayProjectList();\n};\nvar addNewProject = function addNewProject() {\n  createNewProject();\n  displayProjectList();\n};\n\nvar resetProjectContentContainer = function resetProjectContentContainer() {\n  var projectContentContainer = document.getElementById('project-content-container');\n\n  if (projectContentContainer) {\n    projectContentContainer.innerHTML = '';\n  } else {\n    var contentArea = document.getElementById('content-area');\n\n    var _projectContentContainer = document.createElement('div');\n\n    _projectContentContainer.id = 'project-content-container';\n    _projectContentContainer.classList = 'col-md p-3 bg-light my-4 text-center';\n    contentArea.appendChild(_projectContentContainer);\n  }\n};\n\nvar updateProjectContentContainer = function updateProjectContentContainer(projectsArray, projectIndex) {\n  var projectContentContainer = document.getElementById('project-content-container');\n  var projectContent = document.createElement('div');\n  projectContent.id = 'project-content';\n  projectContent.classList.add('mx-auto');\n  projectContent.innerHTML = \"\\n    <div id=\\\"project-content-top\\\" class=\\\"mx-auto\\\">\\n      <h1 class=\\\"h2 font-weight-bold my-3 text-center\\\">\".concat(projectsArray[projectIndex].title, \"</h1>\\n      <button id=\\\"create-new-todo-button\\\" class=\\\"btn btn-primary my-3\\\" data-project-idx=\\\"\").concat(projectIndex, \"\\\" data-toggle=\\\"modal\\\" data-target=\\\"#createTodoModal\\\">Create New Todo</button>\\n\\t\\t</div>\\n\\t\\t<div id=\\\"project-list-container\\\">\\n\\t\\t</div>\\n  \");\n  projectContentContainer.appendChild(projectContent);\n};\n\nvar createNewTodo = function createNewTodo() {\n  var todoFormTitle = document.getElementById('todo-form-title').value;\n  var todoFormDueDate = document.getElementById('todo-form-due-date').value;\n  var todoFormPriority = document.getElementById('todo-form-priority').value;\n  var todoFormDescription = document.getElementById('todo-form-description').value;\n  var newTodo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);\n  console.log(newTodo.title);\n  var projectIdx = document.getElementById('create-new-todo-button').dataset.projectIdx;\n  newTodo.addTodoToProject(projectIdx);\n};\n\nvar createDefaultTodo = function createDefaultTodo(projectsArray) {\n  var todoFormDescription = 'Create a New Todo under Default Project or Create a New Project and add a Todo there';\n  var defaultTodo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('Default Todo', 'Now', 'Immediate', todoFormDescription);\n  defaultTodo.addTodoToProject(projectsArray[0]);\n};\n\nvar displayProjectTodoList = function displayProjectTodoList() {\n  var projectListContainer = document.getElementById('project-list-container');\n  projectListContainer.innerHTML = '';\n  var projectTodosList = document.createElement('div');\n  projectTodosList.id = 'project-todos-list';\n  projectTodosList.classList.add('container', 'col', 'mx-auto', 'mt-5');\n  var projectsArray = _storage__WEBPACK_IMPORTED_MODULE_2__.getProjects();\n  var projectIdx = document.getElementById('create-new-todo-button').dataset.projectIdx;\n  var projectTodos = projectsArray[projectIdx].todos;\n  projectTodosList.innerHTML = \"\\n\\t\\t<h1 class=\\\"h3 m-0 text-center\\\">You have \".concat(projectTodos.length, \" Todos</h1>\\n\\t\\t<hr class=\\\"p-0\\\">\\n\\t\");\n\n  if (projectTodos) {\n    projectTodos.forEach(function (todo, index) {\n      projectTodosList.innerHTML += \"\\n\\t\\t\\t<div class=\\\"row mx-auto text-white\\\">\\n\\t\\t\\t\\t<div class=\\\"col bg-info mx-auto my-4 p-3 rounded\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"px-1\\\">\\n\\t\\t\\t\\t\\t\\t<h1 id=\\\"todo-title\\\" class=\\\"h3 font-weight-bold\\\">\".concat(todo.title, \"</h1>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<hr class=\\\"p-0 mt-0 mb-1\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"todo-info\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"d-flex justify-content-between\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"px-1\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"my-1\\\"><span class=\\\"font-weight-bold\\\">Status:</span><span id=\\\"todo-status\\\" class=\\\"ml-2\\\">\").concat(todo.completedStatus, \"</span></p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"px-1\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"my-1\\\"><span class=\\\"font-weight-bold\\\">Priority:</span><span id=\\\"todo-priority\\\" class=\\\"ml-2\\\">\").concat(todo.priority, \"</span></p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"d-flex justify-content-between\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"px-1\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"m-0\\\"><span class=\\\"font-weight-bold\\\">Due:</span><span id=\\\"todo-due\\\" class=\\\"ml-2\\\">\").concat(todo.dueDate, \"</span></p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"px-1\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"m-0\\\"><span class=\\\"font-weight-bold\\\">Time Left:</span><span id=\\\"time-left\\\" class=\\\"ml-2\\\">\").concat(todo.dueDate, \"</span></p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<hr class=\\\"p-0 mt-0 mb-1\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"px-1 mt-3 text-left\\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\\"p-0 my-1 font-weight-bold\\\">Description:</p>\\n\\t\\t\\t\\t\\t\\t<p id=\\\"todo-description\\\" class=\\\"p-0 my-1\\\">\\n\\t\\t\\t\\t\\t\\t\\t\").concat(todo.description, \"\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<hr>\\n\\t\\t\\t\\t\\t<div class=\\\"text-left d-flex justify-content-between\\\">\\n\\t\\t\\t\\t\\t\\t<button id=\\\"edit-todo-button\\\" class=\\\"btn btn-warning my-3\\\" data-project-idx=\\\"\").concat(index, \"\\\"\\n\\t\\t\\t\\t\\t\\t\\tdata-toggle=\\\"modal\\\" data-target=\\\"#editTodoModal\\\">\\n\\t\\t\\t\\t\\t\\t\\tEdit Todo\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<button id=\\\"delete-todo-button\\\" class=\\\"btn btn-danger my-3\\\" data-project-idx=\\\"\").concat(index, \"\\\"\\n\\t\\t\\t\\t\\t\\t\\tdata-toggle=\\\"modal\\\" data-target=\\\"#createTodoModal\\\">\\n\\t\\t\\t\\t\\t\\t\\tDelete Todo\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t\");\n    });\n  }\n\n  projectListContainer.appendChild(projectTodosList);\n};\n\nvar addTodoListToProject = function addTodoListToProject() {\n  createNewTodo();\n  displayProjectTodoList();\n};\nvar displayProjectContent = function displayProjectContent(projectsArray, projectIndex) {\n  resetProjectContentContainer();\n  updateProjectContentContainer(projectsArray, projectIndex);\n  displayProjectTodoList();\n};\n\n//# sourceURL=webpack://to-dos-app/./src/js/dom_module.js?");

/***/ }),

/***/ "./src/js/event_listeners.js":
/*!***********************************!*
  !*** ./src/js/event_listeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFormEventListener\": () => /* binding */ projectFormEventListener,\n/* harmony export */   \"projectLinkEventListener\": () => /* binding */ projectLinkEventListener,\n/* harmony export */   \"createTodoButtonEventListener\": () => /* binding */ createTodoButtonEventListener,\n/* harmony export */   \"todoFormEventListener\": () => /* binding */ todoFormEventListener\n/* harmony export */ });\n/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_module */ \"./src/js/dom_module.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n\nvar projectFormEventListener = function projectFormEventListener() {\n  var projectFormButton = document.getElementById('project-form');\n  projectFormButton.addEventListener('submit', function (e) {\n    e.preventDefault();\n    _dom_module__WEBPACK_IMPORTED_MODULE_0__.addNewProject();\n    projectFormButton.reset();\n  });\n};\n\nvar createTodoButtonEventListener = function createTodoButtonEventListener() {\n  var todoFormWrapper = document.getElementById('todo-form-wrapper');\n  var createNewTodoButton = document.getElementById('create-new-todo-button');\n\n  if (createNewTodoButton) {\n    createNewTodoButton.addEventListener('click', function () {\n      todoFormWrapper.classList.toggle('d-none');\n    });\n  }\n};\n\nvar projectLinkEventListener = function projectLinkEventListener() {\n  var projectsPanel = document.getElementById('projects-panel');\n  projectsPanel.addEventListener('click', function (e) {\n    var projectsArray = _storage__WEBPACK_IMPORTED_MODULE_1__.getProjects();\n    var projectIndex = e.target.dataset.projectIdx;\n\n    if (projectIndex) {\n      _dom_module__WEBPACK_IMPORTED_MODULE_0__.displayProjectContent(projectsArray, projectIndex);\n    }\n  });\n};\n\nvar todoFormEventListener = function todoFormEventListener() {\n  var todoForm = document.getElementById('todo-form');\n  todoForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    _dom_module__WEBPACK_IMPORTED_MODULE_0__.addTodoListToProject();\n    console.log('Submitted');\n    todoForm.reset();\n  });\n};\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/event_listeners.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_module */ \"./src/js/dom_module.js\");\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_listeners */ \"./src/js/event_listeners.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n\n_storage__WEBPACK_IMPORTED_MODULE_2__.initiateProjectsStore();\n_dom_module__WEBPACK_IMPORTED_MODULE_0__.displayProjectList(); // EventListeners.createNewProjectButtonEventListener();\n\n_event_listeners__WEBPACK_IMPORTED_MODULE_1__.projectFormEventListener();\n_event_listeners__WEBPACK_IMPORTED_MODULE_1__.projectLinkEventListener();\n_event_listeners__WEBPACK_IMPORTED_MODULE_1__.todoFormEventListener();\n\n//# sourceURL=webpack://to-dos-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initiateProjectsStore\": () => /* binding */ initiateProjectsStore,\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"addProject\": () => /* binding */ addProject,\n/* harmony export */   \"addTodo\": () => /* binding */ addTodo\n/* harmony export */ });\nvar initiateProjectsStore = function initiateProjectsStore() {\n  if (localStorage.projects) {\n    return;\n  } else {\n    var projectsArray = [{\n      title: 'Fire is Calling You...',\n      todos: []\n    }];\n    localStorage.setItem('projects', JSON.stringify(projectsArray));\n  }\n};\n\nvar getProjects = function getProjects() {\n  var projects = JSON.parse(localStorage.getItem('projects'));\n  return projects;\n};\n\nvar addProject = function addProject(newProject) {\n  var storedProjects = getProjects();\n  storedProjects.push({\n    title: newProject.title,\n    todos: newProject.todos\n  });\n  var updatedStoredProjects = JSON.stringify(storedProjects);\n  localStorage.setItem('projects', updatedStoredProjects);\n};\n\nvar addTodo = function addTodo(newTodo, projectIndex) {\n  var storedProjects = getProjects();\n  var todoLiteral = {\n    title: newTodo.title,\n    dueDate: newTodo.dueDate,\n    priority: newTodo.priority,\n    description: newTodo.description,\n    completedStatus: newTodo.completedStatus\n  };\n  storedProjects[projectIndex].todos.push(todoLiteral);\n  var updatedStoredProjects = JSON.stringify(storedProjects);\n  localStorage.setItem('projects', updatedStoredProjects);\n};\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;