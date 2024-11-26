/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Proyect{\r\n    static todoList= []\r\n    constructor(name, category){\r\n        this.name =name \r\n        this.category =category \r\n        \r\n    }\r\n    static addTodo(todo){\r\n        let idk = new Todo(todo)\r\n        Proyect.todoList.push(idk)\r\n        console.log(Proyect.todoList)\r\n    }\r\n}\r\n\r\nclass Todo{\r\n    constructor(title,description,dueDate,priority){\r\n        this.title = title\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n        this.checked = false\r\n    }\r\n    check(){\r\n        this.checked =true\r\n        console.log('done')\r\n    }\r\n    uncheck(){\r\n        this.checked = false\r\n        console.log('not done')\r\n    }\r\n    edit(itemInput){\r\n        this.title = itemInput\r\n    }\r\n    delete(){\r\n        let arrayElem= Proyect.todoList.findIndex(item=> item == this)\r\n        if(arrayElem != -1){\r\n            Proyect.todoList.splice(arrayElem, 1)\r\n        }\r\n    }\r\n}\r\n\r\nProyect.addTodo('read')//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BfdG9kby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb3llY3R7XHJcbiAgICBzdGF0aWMgdG9kb0xpc3Q9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjYXRlZ29yeSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID1uYW1lIFxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPWNhdGVnb3J5IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZFRvZG8odG9kbyl7XHJcbiAgICAgICAgbGV0IGlkayA9IG5ldyBUb2RvKHRvZG8pXHJcbiAgICAgICAgUHJveWVjdC50b2RvTGlzdC5wdXNoKGlkaylcclxuICAgICAgICBjb25zb2xlLmxvZyhQcm95ZWN0LnRvZG9MaXN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUb2Rve1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGVjaygpe1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9dHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJylcclxuICAgIH1cclxuICAgIHVuY2hlY2soKXtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdub3QgZG9uZScpXHJcbiAgICB9XHJcbiAgICBlZGl0KGl0ZW1JbnB1dCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW1JbnB1dFxyXG4gICAgfVxyXG4gICAgZGVsZXRlKCl7XHJcbiAgICAgICAgbGV0IGFycmF5RWxlbT0gUHJveWVjdC50b2RvTGlzdC5maW5kSW5kZXgoaXRlbT0+IGl0ZW0gPT0gdGhpcylcclxuICAgICAgICBpZihhcnJheUVsZW0gIT0gLTEpe1xyXG4gICAgICAgICAgICBQcm95ZWN0LnRvZG9MaXN0LnNwbGljZShhcnJheUVsZW0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Qcm95ZWN0LmFkZFRvZG8oJ3JlYWQnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;