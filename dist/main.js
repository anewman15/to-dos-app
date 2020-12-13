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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Project\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar _title = new WeakMap();\n\nvar _todos = new WeakMap();\n\nvar Project = /*#__PURE__*/function () {\n  function Project(title) {\n    _classCallCheck(this, Project);\n\n    _title.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _todos.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _title, title);\n\n    _classPrivateFieldSet(this, _todos, []);\n  }\n\n  _createClass(Project, [{\n    key: \"addProjectToArray\",\n    value: function addProjectToArray(projectsArray) {\n      projectsArray.push(this);\n    }\n  }, {\n    key: \"addTodo\",\n    value: function addTodo(newTodo) {\n      _classPrivateFieldGet(this, _todos).push(newTodo);\n    }\n  }, {\n    key: \"removeTodo\",\n    value: function removeTodo(index) {\n      _classPrivateFieldGet(this, _todos).splice(index, 1);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _title);\n    }\n  }, {\n    key: \"todos\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _todos);\n    }\n  }]);\n\n  return Project;\n}();\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/Project.js?");

/***/ }),

/***/ "./src/js/Todo.js":
/*!************************!*
  !*** ./src/js/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Todo\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar _title = new WeakMap();\n\nvar _dueDate = new WeakMap();\n\nvar _priority = new WeakMap();\n\nvar _description = new WeakMap();\n\nvar _checklist = new WeakMap();\n\nvar _completedStatus = new WeakMap();\n\nvar Todo = /*#__PURE__*/function () {\n  function Todo(title, dueDate, priority, description) {\n    _classCallCheck(this, Todo);\n\n    _title.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _dueDate.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _priority.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _description.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _checklist.set(this, {\n      writable: true,\n      value: []\n    });\n\n    _completedStatus.set(this, {\n      writable: true,\n      value: false\n    });\n\n    _classPrivateFieldSet(this, _title, title);\n\n    _classPrivateFieldSet(this, _dueDate, dueDate);\n\n    _classPrivateFieldSet(this, _priority, priority);\n\n    _classPrivateFieldSet(this, _description, description);\n  }\n\n  _createClass(Todo, [{\n    key: \"addTodoToProject\",\n    value: function addTodoToProject(project) {\n      project.addTodo(this);\n    }\n  }, {\n    key: \"changeCompletedStatus\",\n    value: function changeCompletedStatus() {\n      if (_classPrivateFieldGet(this, _completedStatus)) {\n        _classPrivateFieldSet(this, _completedStatus, false);\n      } else {\n        _classPrivateFieldSet(this, _completedStatus, true);\n      }\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _title);\n    },\n    set: function set(_value) {\n      _classPrivateFieldSet(this, _title, _value);\n    }\n  }, {\n    key: \"dueDate\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _dueDate);\n    }\n  }, {\n    key: \"priority\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _priority);\n    },\n    set: function set(_value) {\n      _classPrivateFieldSet(this, _priority, _value);\n    }\n  }, {\n    key: \"description\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _description);\n    }\n  }, {\n    key: \"checklist\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _checklist);\n    },\n    set: function set(_value) {\n      this.checklist = _value;\n    }\n  }, {\n    key: \"completedStatus\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _completedStatus);\n    }\n  }]);\n\n  return Todo;\n}();\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/Todo.js?");

/***/ }),

/***/ "./src/js/dom_module.js":
/*!******************************!*
  !*** ./src/js/dom_module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/js/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/js/Todo.js\");\n\n\nvar myProjects = [];\n\nvar createNewProject = function createNewProject() {\n  var projectTitle = document.getElementById('project-form-title').value;\n  var newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(projectTitle);\n  newProject.addProjectToArray(myProjects);\n};\n\nvar displayProjectList = function displayProjectList() {\n  var projectsPanel = document.getElementById('projects-panel');\n  projectsPanel.innerHTML = \"\\n    <h1 class=\\\"h3 mb-3 text-center\\\">Your Projects</h1>\\n  \";\n  var projectList = document.createElement('ul');\n  projectList.classList.add('list-group');\n  myProjects.forEach(function (project, index) {\n    projectList.innerHTML += \"\\n\\t\\t<li class=\\\"list-group-item\\\">\\n\\t\\t\\t<a class=\\\"project-link btn btn-link\\\" data-project-idx=\\\"\".concat(index, \"\\\">\").concat(project.title, \"</a>\\n\\t\\t</li>\\n\\t\\t\");\n  });\n  projectsPanel.appendChild(projectList);\n};\n\nvar addDefaultProject = function addDefaultProject() {\n  var newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('Default Project');\n  newProject.addProjectToArray(myProjects);\n  displayProjectList();\n  createDefaultTodo(myProjects);\n  projectLinkClickHandler();\n};\n\nvar addNewProject = function addNewProject() {\n  createNewProject();\n  displayProjectList();\n  projectLinkClickHandler();\n};\n\nvar resetProjectContentContainer = function resetProjectContentContainer() {\n  var projectContentContainer = document.getElementById('project-content-container');\n\n  if (projectContentContainer) {\n    projectContentContainer.innerHTML = '';\n  } else {\n    var contentArea = document.getElementById('content-area');\n\n    var _projectContentContainer = document.createElement('div');\n\n    _projectContentContainer.id = 'project-content-container';\n    _projectContentContainer.classList = 'col p-3 bg-light my-4 text-center';\n    contentArea.appendChild(_projectContentContainer);\n  }\n};\n\nvar updateProjectContentContainer = function updateProjectContentContainer(projectsArray, projectIndex) {\n  var projectContentContainer = document.getElementById('project-content-container');\n  var projectContent = document.createElement('div');\n  projectContent.id = 'project-content';\n  projectContent.classList.add('mx-auto');\n  projectContent.innerHTML = \"\\n    <div id=\\\"project-content-top\\\" class=\\\"mx-auto\\\">\\n      <h1 class=\\\"h3 my-3 text-center\\\">\".concat(projectsArray[projectIndex].title, \"</h1>\\n      <button id=\\\"create-new-todo-button\\\" class=\\\"btn btn-primary my-3\\\" data-project-idx=\\\"\").concat(projectIndex, \"\\\">Create New Todo</button>\\n    </div>\\n  \");\n  projectContentContainer.appendChild(projectContent);\n};\n\nvar createNewTodo = function createNewTodo(projectsArray) {\n  var todoFormTitle = document.getElementById('todo-form-title').value;\n  var todoFormDueDate = document.getElementById('todo-form-due-date').value;\n  var todoFormPriority = document.getElementById('todo-form-priority').value;\n  var todoFormDescription = document.getElementById('todo-form-description').value;\n  var projectIdx = document.getElementById('create-new-todo-button').dataset.projectIdx;\n  var newTodo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default(todoFormTitle, todoFormDueDate, todoFormPriority, todoFormDescription);\n  newTodo.addTodoToProject(projectsArray[projectIdx]);\n};\n\nvar createDefaultTodo = function createDefaultTodo(projectsArray) {\n  var todoFormDescription = 'Create a New Todo under Default Project or Create a New Project and add a Todo there';\n  var defaultTodo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('Default Todo', 'Now', 'Immediate', todoFormDescription);\n  defaultTodo.addTodoToProject(projectsArray[0]);\n};\n\nvar displayProjectContent = function displayProjectContent(projectsArray, projectIndex) {\n  resetProjectContentContainer();\n  updateProjectContentContainer(projectsArray, projectIndex);\n  createTodoButtonEventListener();\n};\n\n//# sourceURL=webpack://to-dos-app/./src/js/dom_module.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_module */ \"./src/js/dom_module.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n_storage__WEBPACK_IMPORTED_MODULE_1__.initiateProjectsStore();\nvar obj = {\n  birthplace: 'Comilla'\n};\n_storage__WEBPACK_IMPORTED_MODULE_1__.updateProjectsStore(obj);\nvar country = {\n  country: 'Bangladesh'\n};\n_storage__WEBPACK_IMPORTED_MODULE_1__.updateProjectsStore(country);\nconsole.log(_storage__WEBPACK_IMPORTED_MODULE_1__.getProjects());\nvar createNewProjectButton = document.getElementById('create-new-project-button');\nvar projectFormWrapper = document.getElementById('project-form-wrapper');\nvar todoFormWrapper = document.getElementById('todo-form-wrapper');\nvar projectForm = document.getElementById('project-form'); // ProjectDomCache.addDefaultProject();\n// ProjectDomCache.projectLinkClickHandler();\n\n//# sourceURL=webpack://to-dos-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initiateProjectsStore\": () => /* binding */ initiateProjectsStore,\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"updateProjectsStore\": () => /* binding */ updateProjectsStore\n/* harmony export */ });\nvar initiateProjectsStore = function initiateProjectsStore() {\n  var projectsArray = [];\n  localStorage.setItem('projects', JSON.stringify(projectsArray));\n};\n\nvar getProjects = function getProjects() {\n  var projects = JSON.parse(localStorage.getItem('projects'));\n  return projects;\n};\n\nvar updateProjectsStore = function updateProjectsStore(newProject) {\n  var projects = getProjects();\n  projects.push(newProject);\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/storage.js?");

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