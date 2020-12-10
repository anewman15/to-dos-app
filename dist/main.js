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

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n\n\nconst createNewProjectButton = document.getElementById('create-new-project-button');\nconst projectFormWrapper = document.getElementById('project-form-wrapper');\nconst projectForm = document.getElementById('project-form');\n\ncreateNewProjectButton.addEventListener('click', () => {\n\tprojectFormWrapper.classList.toggle('d-none');\n});\n\n_project__WEBPACK_IMPORTED_MODULE_0__.addDefaultProject();\n\nprojectForm.addEventListener('submit', (e) => {\n\te.preventDefault();\n\t_project__WEBPACK_IMPORTED_MODULE_0__.addNewProject();\n\tprojectForm.reset();\n\tprojectFormWrapper.classList.add('d-none');\n});\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => /* binding */ myProjects,\n/* harmony export */   \"addDefaultProject\": () => /* binding */ addDefaultProject,\n/* harmony export */   \"addNewProject\": () => /* binding */ addNewProject\n/* harmony export */ });\nconst myProjects = [];\n\nclass Project {\n\tconstructor(title) {\n\t\tthis.title = title;\n\t}\n\n\taddProjectToArray() {\n\t\tmyProjects.push(this);\n\t}\n\n\tgetTitle() {\n\t\treturn this.title;\n\t}\n}\n\nconst createNewProject = () => {\n\tconst projectTitle = document.getElementById('project-form-title').value;\n\tconst newProject = new Project(projectTitle);\n\tnewProject.addProjectToArray();\n};\n\nconst displayProjectList = () => {\n\tconst projectsPanel = document.getElementById('projects-panel');\n\tprojectsPanel.innerHTML = '';\n\tconst projectList = document.createElement('ul');\n\tprojectList.classList.add('list-group');\n\tmyProjects.forEach(project => {\n\t\tprojectList.innerHTML += `\n\t\t<li class=\"list-group-item\">\n\t\t\t<a class=\"btn btn-link\">${project.getTitle()}</a>\n\t\t</li>\n\t\t`;\n\t});\n\tprojectsPanel.appendChild(projectList);\n};\n\nconst addDefaultProject = () => {\n\tconst newProject = new Project('Default Project');\n\tnewProject.addProjectToArray();\n\tdisplayProjectList();\n};\n\nconst addNewProject = () => {\n\tcreateNewProject();\n\tdisplayProjectList();\n};\n\n\n\n\n//# sourceURL=webpack://to-dos-app/./src/js/project.js?");

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