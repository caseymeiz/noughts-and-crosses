/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/gamecenter.js":
/*!***************************!*\
  !*** ./app/gamecenter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./gameservice */ \"./app/gameservice.js\"), \n        __webpack_require__(/*! ../constants */ \"./constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (GameService, constants) {\n    \n    function GameCenter () {\n        this.newGame();\n    }\n\n    GameCenter.prototype = {\n        constructor : GameCenter,\n\n        newGame : function () {\n            this.game = new GameService({mark : constants.nought}, {mark : constants.cross});\n        },\n\n        gameState : function () {\n            return this.game.gameState();\n        }\n    }\n    return GameCenter;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./app/gamecenter.js?");

/***/ }),

/***/ "./app/gameservice.js":
/*!****************************!*\
  !*** ./app/gameservice.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../model/board */ \"./model/board.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Board) {\n    function GameService (player1, player2, state) {\n        this.player1 = player1;\n        this.player2 = player2;\n        this.currentPlayer = player1;\n        this.board = new Board(state);\n        this.winningMoves = null;\n        this.moves = 0;\n    };\n\n    GameService.prototype = {\n        constructor : GameService,\n\n        gameState : function () {\n            return this.board.locations;\n        },\n\n        makeMove : function (location, mark) {\n            var succesful = !this.winningMoves && mark === this.currentPlayer.mark && this.board.place(location, mark);\n            if (succesful) {\n                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;\n                this.winningMoves = this.board.winLocations();\n                this.moves += 1;\n            }\n            return succesful;\n        },\n\n        isGameOver : function () {\n            return this.moves === 9 || !!this.winningMoves\n        }\n    };\n\n    return GameService;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./app/gameservice.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    var constants = {\n        nought : 'nought',\n        cross : 'cross',\n        lines : [\n            // rows\n            [0, 1, 2],\n            [3, 4, 5],\n            [6, 7, 8],\n            // columns\n            [0, 3, 6],\n            [1, 4, 7],\n            [2, 5, 8],\n            // diagonals \n            [0, 4, 8],\n            [6, 4, 2]\n        ],\n        view : {\n            board : 'board',\n            game : 'game'\n        },\n        svg : {\n            namespace : 'http://www.w3.org/2000/svg'\n        },\n        locationLookUp : [\n            { x : 0, y : 0},\n            { x : 1, y : 0},\n            { x : 2, y : 0},\n            { x : 0, y : 1},\n            { x : 1, y : 1},\n            { x : 2, y : 1},\n            { x : 0, y : 2},\n            { x : 1, y : 2},\n            { x : 2, y : 2},\n\n        ]\n    }\n\n    return constants;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./app/gamecenter */ \"./app/gamecenter.js\"),\n\t__webpack_require__(/*! ./ui/ui */ \"./ui/ui.js\"),\n\t__webpack_require__(/*! ./ui/render */ \"./ui/render.js\"),\n    __webpack_require__(/*! ./ui/minmax */ \"./ui/minmax.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (GameCenter, UI, Render, MinMax) {\n\t\n\n\tnew UI(new GameCenter(), new Render());\n\n    new MinMax(new Render());\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./model/board.js":
/*!************************!*\
  !*** ./model/board.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../constants */ \"./constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (constants) {\n\n    function Board (state) {\n        if (state) {\n            this.locations = state;\n        } else {\n            this.locations = [null, null, null, \n                              null, null, null,\n                              null, null, null]\n        }\n    };\n\n    Board.prototype = {\n        constructor : Board,\n\n        get : function (location) {\n            return this.locations[locations];\n        },\n\n        place : function (location, mark){\n            if (this.locations[location] !== null) {\n                return false;\n            }\n            this.locations[location] = mark;\n            return true;\n        },\n\n        winLocations : function () {\n            var wins = constants.lines.filter(function (line) {\n                return sameMark(this.locations[line[0]], this.locations[line[1]], this.locations[line[2]]);\n            }.bind(this));\n            return wins[0];\n        }\n\n    };\n\n    function sameMark (x, y, z) {\n        if (x === null){\n            return false;\n        }\n        return x === y && x === z;\n    }\n\n    return Board;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./model/board.js?");

/***/ }),

/***/ "./ui/minmax.js":
/*!**********************!*\
  !*** ./ui/minmax.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../constants */ \"./constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (constants) {\n\n    function MinMax (render) {\n        this.render = render;\n        this.treeContainer = document.getElementById('tree');\n        this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');\n        this.treeContainer.appendChild(this.treeSVG);\n        this.rootState = [null, null, null, null, null, null, null, null, null];\n        this.buildTree([]);\n    };\n\n    MinMax.prototype = {\n        constructor : MinMax,\n\n        buildTree : function (path) {\n            this.treeContainer.removeChild(this.treeSVG);\n            this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');\n            this.treeSVG.setAttribute('viewBox', '0 0 2520 4000');\n\n            var rootSVG = this.render.build(this.rootState);\n            rootSVG.setAttribute('width', '150');\n            rootSVG.setAttribute('height', '150');\n            rootSVG.setAttribute('x', ''+((2520/2)-75));\n            rootSVG.setAttribute('y', '20');\n            var button = this.render.makeButton();\n            button.setAttribute('width', '150');\n            button.setAttribute('height', '150');\n            button.setAttribute('x', ''+2520/2-75);\n            button.setAttribute('y', ''+(20+150));\n            button.addEventListener('click', this.exploreHandler(2520/2-75+75, [], 0, this.rootState, constants.nought, constants.cross));\n            this.treeSVG.appendChild(button);\n\n            for (var i = 0; i < path.length; i++) {\n                var vertex = path[i];\n\n                var succ = this.succesors(vertex.current, vertex.turn);\n                for (var j = 0; j < succ.length; j++){\n                    var succSVG = this.render.build(succ[j].board);\n                    succSVG.getElementsByClassName('location-'+succ[j].move)[0].classList.add('new');\n                    succSVG.setAttribute('width', '150');\n                    succSVG.setAttribute('height', '150');\n                    var l = (2520*j/succ.length+75);\n                    succSVG.setAttribute('x', ''+l);\n                    succSVG.setAttribute('y', ''+(20+(400*(i+1))));\n                    var line = document.createElementNS(constants.svg.namespace, 'path');\n                    line.setAttribute('d', 'M '+vertex.parentX+' '+(20+210+(400*(i)))+' L '+(l+75)+' '+(20+230+150+(400*(i)))+' Z');\n                    line.classList.add('edge');\n                    line.classList.add('depth-'+i);\n                    var button = this.render.makeButton();\n                    button.setAttribute('width', '150');\n                    button.setAttribute('height', '150');\n                    button.setAttribute('x', l);\n                    button.setAttribute('y', ''+(20+150+(400*(i+1))));\n                    button.addEventListener('click', this.exploreHandler(l+75, path, i, succ[j].board, vertex.turn, vertex.nextTurn));\n                    this.treeSVG.appendChild(line);\n                    this.treeSVG.appendChild(succSVG);\n                    this.treeSVG.appendChild(button);\n                }\n            }\n\n            this.treeSVG.appendChild(rootSVG);\n            this.treeContainer.appendChild(this.treeSVG);\n        },\n\n        succesors : function (state, currentMark) {\n            var succ = [];\n            for (var i = 0; i < 9; i++) {\n                if (state[i] === null){\n                    var successor = state.slice();\n                    successor[i] = currentMark;\n                    succ.push({\n                        board : successor,\n                        move : i\n                    });\n                }\n            }\n            return succ;\n        },\n\n        exploreHandler : function (x, path, level, next, turn, nextTurn) {\n            return function (event) {\n                path = path.slice(0, level+1);\n                path.push({\n                    current : next,\n                    turn : nextTurn,\n                    nextTurn : turn,\n                    parentX : x\n                })\n                this.buildTree(path);\n            }.bind(this);\n        }\n\n    }\n\n    return MinMax;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./ui/minmax.js?");

/***/ }),

/***/ "./ui/render.js":
/*!**********************!*\
  !*** ./ui/render.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../constants */ \"./constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (constants) {\n    function Render () {\n    };\n\n    Render.prototype = {\n        constructor : Render,\n\n        build : function (state) {\n            var board = this.makeBoard();\n            this.populate(board, state);\n            return board;\n        },\n\n        populate : function(board, state) {\n            for (var i = 0; i < 9; i++) {\n                var mark = null;\n                if (state[i] === constants.nought) {\n                    mark = this.makeNought();\n                } else if (state[i] === constants.cross) {\n                    mark = this.makeCross();\n                }\n                if (mark) {\n                    mark.setAttribute('width', '1');\n                    mark.setAttribute('height', '1');\n                    mark.classList.add('location-'+i);\n                    mark.setAttribute('x', constants.locationLookUp[i].x);\n                    mark.setAttribute('y', constants.locationLookUp[i].y);\n                    board.appendChild(mark);\n                }\n            }\n        },\n\n        makeBoard : function() {\n            var boardSVG = document.createElementNS(constants.svg.namespace, 'svg');\n            boardSVG.setAttribute('viewBox', '0 0 3 3');\n\n            var v1 = document.createElementNS(constants.svg.namespace, 'path');\n            v1.setAttribute('d', 'M 0 1 L 3 1 Z');\n            v1.setAttribute('class', 'board-line');\n            var v2 = document.createElementNS(constants.svg.namespace, 'path');\n            v2.setAttribute('d', 'M 0 2 L 3 2 Z');\n            v2.setAttribute('class', 'board-line');\n            var h1 = document.createElementNS(constants.svg.namespace, 'path');\n            h1.setAttribute('d', 'M 1 0 L 1 3 Z');\n            h1.setAttribute('class', 'board-line');\n            var h2 = document.createElementNS(constants.svg.namespace, 'path');\n            h2.setAttribute('d', 'M 2 0 L 2 3 Z');\n            h2.setAttribute('class', 'board-line');\n\n            boardSVG.appendChild(v1);\n            boardSVG.appendChild(v2);\n            boardSVG.appendChild(h1);\n            boardSVG.appendChild(h2);\n            return boardSVG;\n        },\n\n        makeNought : function () {\n            var nought = document.createElementNS(constants.svg.namespace, 'svg');\n            var c = document.createElementNS(constants.svg.namespace, 'circle');\n            nought.setAttribute('viewBox', '0 0 10 10');\n            nought.appendChild(c);\n            nought.classList.add('mark');\n            nought.classList.add('nought');\n            c.setAttribute('cx', '5');\n            c.setAttribute('cy', '5');\n            c.setAttribute('r', '4');\n            c.setAttribute('fill', 'none');\n            return nought;\n        },\n\n        makeCross : function () {\n            var cross = document.createElementNS(constants.svg.namespace, 'svg');\n            var p1 = document.createElementNS(constants.svg.namespace, 'path');\n            var p2 = document.createElementNS(constants.svg.namespace, 'path');\n            cross.setAttribute('viewBox', '0 0 10 10');\n            cross.classList.add('mark');\n            cross.classList.add('cross');\n            cross.appendChild(p1);\n            cross.appendChild(p2);\n            p1.setAttribute('d', 'M 1 1 L 9 9 Z');\n            p2.setAttribute('d', 'M 1 9 L 9 1 Z');\n            return cross;\n        },\n\n        makeButton : function () {\n            var btn = document.createElementNS(constants.svg.namespace, 'rect');\n            var text = document.createElementNS(constants.svg.namespace, 'text');\n            var container = document.createElementNS(constants.svg.namespace, 'svg');\n\n            container.setAttribute('viewBox', '0 0 8 8');\n            container.appendChild(btn);\n            container.appendChild(text);\n            container.classList.add('explore');\n\n            btn.setAttribute('x', '0.1');\n            btn.setAttribute('y', '0.1');\n            btn.setAttribute('width', '7.8');\n            btn.setAttribute('height', '3');\n\n            text.setAttribute('x', '4');\n            text.setAttribute('y', '2.1');\n            text.setAttribute('text-anchor', 'middle');\n            text.setAttribute('alignment-baseline', 'center');\n\n\n            text.textContent = 'Explore';\n\n            return container;\n        }\n\n    };\n\n    return Render;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./ui/render.js?");

/***/ }),

/***/ "./ui/ui.js":
/*!******************!*\
  !*** ./ui/ui.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../constants */ \"./constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (constants) {\n\n    function UI (gamecenter, render) {\n        this.init(gamecenter);\n\n        var resetButton = document.getElementById('reset');\n        resetButton.addEventListener('click', this.resetHandler(gamecenter));\n    };\n\n    UI.prototype = {\n        constructor : UI,\n\n        init : function (gamecenter) {\n            var boardContainer = document.getElementById(constants.view.board);\n            this.boardSVG = document.createElementNS(constants.svg.namespace, 'svg');\n            this.boardSVG.setAttribute('viewBox', '0 0 3 3');\n\n            boardContainer.appendChild(this.boardSVG);\n\n            var v1 = document.createElementNS(constants.svg.namespace, 'path');\n            v1.setAttribute('d', 'M 0 1 L 3 1 Z');\n            v1.setAttribute('class', 'board-line');\n            var v2 = document.createElementNS(constants.svg.namespace, 'path');\n            v2.setAttribute('d', 'M 0 2 L 3 2 Z');\n            v2.setAttribute('class', 'board-line');\n            var h1 = document.createElementNS(constants.svg.namespace, 'path');\n            h1.setAttribute('d', 'M 1 0 L 1 3 Z');\n            h1.setAttribute('class', 'board-line');\n            var h2 = document.createElementNS(constants.svg.namespace, 'path');\n            h2.setAttribute('d', 'M 2 0 L 2 3 Z');\n            h2.setAttribute('class', 'board-line');\n\n\n            var panels = [];\n            for (var i = 0; i < 9; i++) {\n                panels[i] = document.createElementNS(constants.svg.namespace, 'rect');\n                panels[i].setAttribute('class', 'panel-'+i);\n                panels[i].setAttribute('width', '1');\n                panels[i].setAttribute('height', '1');\n                panels[i].setAttribute('x', constants.locationLookUp[i].x);\n                panels[i].setAttribute('y', constants.locationLookUp[i].y);\n                panels[i].addEventListener('click', this.moveHandler(gamecenter, i));\n\n                this.boardSVG.appendChild(panels[i]);\n            }\n\n            this.boardSVG.appendChild(v1);\n            this.boardSVG.appendChild(v2);\n            this.boardSVG.appendChild(h1);\n            this.boardSVG.appendChild(h2);\n        },\n\n        moveHandler : function (gamecenter, location) {\n            return function (event) {\n                var writeNought = gamecenter.game.makeMove(location, constants.nought);\n                var writeCross = gamecenter.game.makeMove(location, constants.cross);\n                var mark = null;\n                if(writeCross || writeNought){\n                    if (writeCross) {\n                        mark = this.makeCross();\n                    } else {\n                        mark = this.makeNought();\n                    }\n                    mark.setAttribute('x', constants.locationLookUp[location].x);\n                    mark.setAttribute('y', constants.locationLookUp[location].y);\n                    mark.setAttribute('width', '1');\n                    mark.setAttribute('height', '1');\n                    mark.classList.add('location-'+location)\n                    this.boardSVG.appendChild(mark);\n                }\n\n                if (gamecenter.game.isGameOver()) {\n                    var winLocations = gamecenter.game.winningMoves\n                    if(winLocations){\n                        for (var i = 0; i < 3; i++) {\n                            var winMarks = document.getElementsByClassName('location-'+winLocations[i])\n                            winMarks[0].classList.add('win');\n\n                        }\n                    }\n                }\n            }.bind(this);\n        },\n\n        resetHandler : function (gamecenter) {\n            return function (event) {\n                gamecenter.newGame();\n                var mark = document.querySelector('#game .mark');\n                while(mark){\n                    mark.parentNode.removeChild(mark);\n                    mark = document.querySelector('#game .mark');\n                }\n            };\n        },\n\n        makeNought : function () {\n            var nought = document.createElementNS(constants.svg.namespace, 'svg');\n            var c = document.createElementNS(constants.svg.namespace, 'circle');\n            nought.setAttribute('viewBox', '0 0 10 10');\n            nought.setAttribute('class', 'mark nought');\n            nought.appendChild(c);\n            c.setAttribute('cx', '5');\n            c.setAttribute('cy', '5');\n            c.setAttribute('r', '4');\n            c.setAttribute('fill', 'none');\n            return nought;\n        },\n\n        makeCross : function () {\n            var cross = document.createElementNS(constants.svg.namespace, 'svg');\n            var p1 = document.createElementNS(constants.svg.namespace, 'path');\n            var p2 = document.createElementNS(constants.svg.namespace, 'path');\n            cross.setAttribute('viewBox', '0 0 10 10');\n            cross.setAttribute('class', 'mark cross');\n            cross.appendChild(p1);\n            cross.appendChild(p2);\n            p1.setAttribute('d', 'M 1 1 L 9 9 Z');\n            p2.setAttribute('d', 'M 1 9 L 9 1 Z');\n            return cross;\n        }\n    };\n\n    return UI;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./ui/ui.js?");

/***/ })

/******/ });