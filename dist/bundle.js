/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Node = /*#__PURE__*/function () {
  function Node(data, left, right) {
    _classCallCheck(this, Node);
    this._data = data;
    this._left = left;
    this._right = right;
  }
  _createClass(Node, [{
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      this._data = newData;
    }
  }, {
    key: "right",
    get: function get() {
      return this._right;
    },
    set: function set(value) {
      this._right = value;
    }
  }, {
    key: "left",
    get: function get() {
      return this._left;
    },
    set: function set(value) {
      this._left = value;
    }
  }]);
  return Node;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ }),

/***/ "./src/modules/Tree.js":
/*!*****************************!*\
  !*** ./src/modules/Tree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buildTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildTree */ "./src/modules/buildTree.js");
/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeDuplicates */ "./src/modules/removeDuplicates.js");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeSort */ "./src/modules/mergeSort.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Node */ "./src/modules/Node.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var Tree = /*#__PURE__*/function () {
  function Tree(originalArray) {
    _classCallCheck(this, Tree);
    this.uniqueSortedArray = (0,_removeDuplicates__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_mergeSort__WEBPACK_IMPORTED_MODULE_2__["default"])(originalArray));
    this.root = (0,_buildTree__WEBPACK_IMPORTED_MODULE_0__["default"])(this.uniqueSortedArray);
  }
  _createClass(Tree, [{
    key: "isALeafNode",
    value: function isALeafNode(node) {
      return node.right === null && node.left === null;
    }
  }, {
    key: "prettyPrint",
    value: function prettyPrint() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (node.right !== null) this.prettyPrint(node.right, "".concat(prefix).concat(isLeft ? '│   ' : '    '), false);
      console.log("".concat(prefix).concat(isLeft ? '└── ' : '┌── ').concat(node.data));
      if (node.left !== null) this.prettyPrint(node.left, "".concat(prefix).concat(isLeft ? '    ' : '│   '), true);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (node === null) return false;
      if (node.data === value) return true;
      return node.data > value ? this.contains(value, node.left) : this.contains(value, node.right);
    }
  }, {
    key: "insert",
    value: function insert(value) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (!this.contains(value)) {
        if (node.right === null && node.data < value) node.right = new _Node__WEBPACK_IMPORTED_MODULE_3__["default"](value, null, null);else if (node.left === null && node.data > value) node.left = new _Node__WEBPACK_IMPORTED_MODULE_3__["default"](value, null, null);else {
          node.data > value ? this.insert(value, node.left) : this.insert(value, node.right);
        }
      }
    }
  }, {
    key: "find",
    value: function find(value) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (node === null) return undefined;
      if (node.data === value) return node;
      return node.data > value ? this.find(value, node.left) : this.find(value, node.right);
    }
  }, {
    key: "countChild",
    value: function countChild(node) {
      if (this.isALeafNode(node)) return 0;
      if (node.left === null || node.right === null) return 1;
      return 2;
    }
  }, {
    key: "parentNode",
    value: function parentNode(child) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (this.isALeafNode(node) || child === this.root) return undefined;
      if (node.left === child || node.right === child) return node;
      return node.data > child.data ? this.parentNode(child, node.left) : this.parentNode(child, node.right);
    }
  }, {
    key: "findTheSmallestOfTheHighest",
    value: function findTheSmallestOfTheHighest(node) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.right;
      if (start.left === null) return start;
      return this.findTheSmallestOfTheHighest(node, start.left);
    }
  }, {
    key: "manageDeletionNodeWithOneChild",
    value: function manageDeletionNodeWithOneChild(node, parent) {
      var newChild;
      node.left === null ? newChild = node.right : newChild = node.left;
      parent.data > newChild.data ? parent.left = newChild : parent.right = newChild;
    }
  }, {
    key: "manageDeletionNodeWithNoChild",
    value: function manageDeletionNodeWithNoChild(node, parent) {
      parent.data > node.data ? parent.left = null : parent.right = null;
    }
  }, {
    key: "manageDeletionNodeWithTwoChilds",
    value: function manageDeletionNodeWithTwoChilds(node) {
      var replacementNode = this.findTheSmallestOfTheHighest(node);
      var replacementData = replacementNode.data;
      this["delete"](replacementData);
      node.data = replacementData;
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      var node = this.find(value);
      var parent = this.parentNode(node);
      if (this.countChild(node) === 0) this.manageDeletionNodeWithNoChild(node, parent);else if (this.countChild(node) === 1) {
        this.manageDeletionNodeWithOneChild(node, parent);
      } else {
        this.manageDeletionNodeWithTwoChilds(node);
      }
    }
  }, {
    key: "processNode",
    value: function processNode(node, values) {
      values.push(node.data);
    }
  }, {
    key: "levelOrderRecursive",
    value: function levelOrderRecursive() {
      var processNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.processNode;
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var queue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [node];
      var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      if (queue[0] === undefined) return;
      processNode(node, values);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      queue.shift();
      this.levelOrderRecursive(processNode, queue[0], queue, values);
      return values;
    }
  }, {
    key: "levelOrderIterative",
    value: function levelOrderIterative() {
      var processNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.processNode;
      var queue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [this.root];
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      while (queue.length > 0) {
        processNode(queue[0], values);
        if (queue[0].left != null) queue.push(queue[0].left);
        if (queue[0].right != null) queue.push(queue[0].right);
        queue.shift();
      }
      return values;
    }

    // <left> <root> <right>
  }, {
    key: "inorder",
    value: function inorder() {
      var processNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.processNode;
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (root === null) return;
      this.inorder(processNode, root.left, values);
      processNode(root, values);
      this.inorder(processNode, root.right, values);
      return values;
    }

    // <root> <left> <right>
  }, {
    key: "preorder",
    value: function preorder() {
      var processNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.processNode;
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (root === null) return;
      processNode(root, values);
      this.preorder(processNode, root.left, values);
      this.preorder(processNode, root.right, values);
      return values;
    }

    // <left> <right> <root>
  }, {
    key: "postorder",
    value: function postorder() {
      var processNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.processNode;
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (root === null) return;
      this.postorder(processNode, root.left, values);
      this.postorder(processNode, root.right, values);
      processNode(root, values);
      return values;
    }
  }, {
    key: "depth",
    value: function depth(node) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (node === root) return 0;
      if (this.parentNode(node) === root) return count;
      return this.depth(this.parentNode(node), this.root, ++count);
    }
  }, {
    key: "height",
    value: function height() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      if (node === null) return 0;
      if (this.isALeafNode(node)) return 0;
      var heightOfLeft = 0;
      var heightOfRight = 0;
      if (node.left != null) heightOfLeft = 1 + this.height(node.left);
      if (node.right != null) heightOfRight = 1 + this.height(node.right);
      return heightOfLeft > heightOfRight ? heightOfLeft : heightOfRight;
    }
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      if (node === null) return true;
      var leftHeight = this.height(node.left);
      var rightHeight = this.height(node.right);
      if (Math.abs(leftHeight - rightHeight) > 1) return false;
      return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
  }, {
    key: "rebalance",
    value: function rebalance() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.inorder(function (node) {
        return array.push(node.data);
      });
      this.root = (0,_buildTree__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
    }
  }]);
  return Tree;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ }),

/***/ "./src/modules/buildTree.js":
/*!**********************************!*\
  !*** ./src/modules/buildTree.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/modules/Node.js");
/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeDuplicates */ "./src/modules/removeDuplicates.js");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeSort */ "./src/modules/mergeSort.js");



function buildTree(uniqueSortedArray) {
  // array must be sorted and duplicates must be removed
  if (uniqueSortedArray.length === 0) return null;
  var start = 0;
  var end = uniqueSortedArray.length;
  var mid = Math.floor((end - start) / 2);
  var leftSubarray = uniqueSortedArray.slice(0, mid);
  var rightSubarray = uniqueSortedArray.slice(mid + 1, end);
  var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](uniqueSortedArray[mid], buildTree(leftSubarray), buildTree(rightSubarray));
  return node;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildTree);

/***/ }),

/***/ "./src/modules/generateRandomInts.js":
/*!*******************************************!*\
  !*** ./src/modules/generateRandomInts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateRandomInt() {
  return Math.floor(Math.random() * 100);
}
function generateRandomArrayOfInt() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 1; i <= length; i++) {
    array.push(generateRandomInt());
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateRandomArrayOfInt);

/***/ }),

/***/ "./src/modules/mergeSort.js":
/*!**********************************!*\
  !*** ./src/modules/mergeSort.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function mergeSort(array) {
  if (array.length === 1) return array;
  if (array.length === 2) return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];
  var firstHalf = array.slice(0, Math.floor(array.length / 2));
  var secondHalf = array.slice(firstHalf.length, array.length);
  var sortedFirstHalf = mergeSort(firstHalf);
  var sortedSecondHalf = mergeSort(secondHalf);
  var mergedList = [];
  while (sortedFirstHalf.length > 0 && sortedSecondHalf.length > 0) {
    sortedFirstHalf[0] > sortedSecondHalf[0] ? mergedList.push(sortedSecondHalf.splice(0, 1)[0]) : mergedList.push(sortedFirstHalf.splice(0, 1)[0]);
  }
  mergedList.push.apply(mergedList, _toConsumableArray(sortedFirstHalf).concat(_toConsumableArray(sortedSecondHalf)));
  return mergedList;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);

/***/ }),

/***/ "./src/modules/removeDuplicates.js":
/*!*****************************************!*\
  !*** ./src/modules/removeDuplicates.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeDuplicates(sortedArray) {
  var newArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) newArray.push(sortedArray[i]);
  }
  return newArray;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeDuplicates);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/modules/Tree.js");
/* harmony import */ var _generateRandomInts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateRandomInts */ "./src/modules/generateRandomInts.js");


function printTreeTraversal(tree) {
  console.log("levelorder : ".concat(tree.levelOrderRecursive()));
  console.log("preorder : ".concat(tree.preorder()));
  console.log("postorder : ".concat(tree.postorder()));
  console.log("inorder : ".concat(tree.inorder()));
}
function printIfTreeIsBalaned(tree) {
  console.log("is the tree balanced ? ".concat(tree.isBalanced()));
}
function printInfosAboutTree(tree) {
  tree.prettyPrint();
  printIfTreeIsBalaned(tree);
  printTreeTraversal(tree);
}

/* const tree = new Tree(generateRandomArrayOfInt(4));

printInfosAboutTree(tree);

tree.insert(145);
tree.insert(122);
tree.insert(246);
tree.insert(257);

printInfosAboutTree(tree);

tree.rebalance();

printInfosAboutTree(tree); */

var tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__["default"]([1, 3, 6, 9, 2, 4, 10, 11, 4, 5]);
printInfosAboutTree(tree);
tree["delete"](10);
tree.prettyPrint();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7RUFDakNBLElBQUksQ0FBQ3BFLFdBQVcsRUFBRTtFQUNsQnFFLG9CQUFvQixDQUFDRCxJQUFJLENBQUM7RUFDMUJELGtCQUFrQixDQUFDQyxJQUFJLENBQUM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsSUFBSTFFLDZDQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RDRFLG1CQUFtQixDQUFDRixJQUFJLENBQUM7QUFDekJBLElBQUksVUFBTyxDQUFDLEVBQUUsQ0FBQztBQUNmQSxJQUFJLENBQUNwRSxXQUFXLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfLy4vc3JjL21vZHVsZXMvTm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVzX3dicGNrXy8uL3NyYy9tb2R1bGVzL1RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZVJhbmRvbUludHMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9yZW1vdmVEdXBsaWNhdGVzLmpzIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVzX3dicGNrXy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLl9yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBzZXQgZGF0YShuZXdEYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gIH1cblxuICBnZXQgcmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xuICB9XG5cbiAgc2V0IHJpZ2h0KHZhbHVlKSB7XG4gICAgdGhpcy5fcmlnaHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9XG5cbiAgc2V0IGxlZnQodmFsdWUpIHtcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImltcG9ydCBidWlsZFRyZWUgZnJvbSAnLi9idWlsZFRyZWUnO1xuaW1wb3J0IHJlbW92ZUR1cGxpY2F0ZXMgZnJvbSAnLi9yZW1vdmVEdXBsaWNhdGVzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9tZXJnZVNvcnQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKG9yaWdpbmFsQXJyYXkpIHtcbiAgICB0aGlzLnVuaXF1ZVNvcnRlZEFycmF5ID0gcmVtb3ZlRHVwbGljYXRlcyhtZXJnZVNvcnQob3JpZ2luYWxBcnJheSkpO1xuICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZSh0aGlzLnVuaXF1ZVNvcnRlZEFycmF5KTtcbiAgfVxuXG4gIGlzQUxlYWZOb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgPT09IG51bGw7XG4gIH1cblxuICBwcmV0dHlQcmludChub2RlID0gdGhpcy5yb290LCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKVxuICAgICAgdGhpcy5wcmV0dHlQcmludChcbiAgICAgICAgbm9kZS5yaWdodCxcbiAgICAgICAgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpXG4gICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gIH1cblxuICBjb250YWlucyh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBub2RlLmRhdGEgPiB2YWx1ZVxuICAgICAgPyB0aGlzLmNvbnRhaW5zKHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICA6IHRoaXMuY29udGFpbnModmFsdWUsIG5vZGUucmlnaHQpO1xuICB9XG5cbiAgaW5zZXJ0KHZhbHVlLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKHZhbHVlKSkge1xuICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5kYXRhIDwgdmFsdWUpXG4gICAgICAgIG5vZGUucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSwgbnVsbCwgbnVsbCk7XG4gICAgICBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5kYXRhID4gdmFsdWUpXG4gICAgICAgIG5vZGUubGVmdCA9IG5ldyBOb2RlKHZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBub2RlLmRhdGEgPiB2YWx1ZVxuICAgICAgICAgID8gdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdClcbiAgICAgICAgICA6IHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kKHZhbHVlLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsdWUpIHJldHVybiBub2RlO1xuICAgIHJldHVybiBub2RlLmRhdGEgPiB2YWx1ZVxuICAgICAgPyB0aGlzLmZpbmQodmFsdWUsIG5vZGUubGVmdClcbiAgICAgIDogdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIGNvdW50Q2hpbGQobm9kZSkge1xuICAgIGlmICh0aGlzLmlzQUxlYWZOb2RlKG5vZGUpKSByZXR1cm4gMDtcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsIHx8IG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVybiAxO1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgcGFyZW50Tm9kZShjaGlsZCwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmICh0aGlzLmlzQUxlYWZOb2RlKG5vZGUpIHx8IGNoaWxkID09PSB0aGlzLnJvb3QpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKG5vZGUubGVmdCA9PT0gY2hpbGQgfHwgbm9kZS5yaWdodCA9PT0gY2hpbGQpIHJldHVybiBub2RlO1xuICAgIHJldHVybiBub2RlLmRhdGEgPiBjaGlsZC5kYXRhXG4gICAgICA/IHRoaXMucGFyZW50Tm9kZShjaGlsZCwgbm9kZS5sZWZ0KVxuICAgICAgOiB0aGlzLnBhcmVudE5vZGUoY2hpbGQsIG5vZGUucmlnaHQpO1xuICB9XG5cbiAgZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0KG5vZGUsIHN0YXJ0ID0gbm9kZS5yaWdodCkge1xuICAgIGlmIChzdGFydC5sZWZ0ID09PSBudWxsKSByZXR1cm4gc3RhcnQ7XG4gICAgcmV0dXJuIHRoaXMuZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0KG5vZGUsIHN0YXJ0LmxlZnQpO1xuICB9XG5cbiAgbWFuYWdlRGVsZXRpb25Ob2RlV2l0aE9uZUNoaWxkKG5vZGUsIHBhcmVudCkge1xuICAgIGxldCBuZXdDaGlsZDtcbiAgICBub2RlLmxlZnQgPT09IG51bGwgPyAobmV3Q2hpbGQgPSBub2RlLnJpZ2h0KSA6IChuZXdDaGlsZCA9IG5vZGUubGVmdCk7XG4gICAgcGFyZW50LmRhdGEgPiBuZXdDaGlsZC5kYXRhXG4gICAgICA/IChwYXJlbnQubGVmdCA9IG5ld0NoaWxkKVxuICAgICAgOiAocGFyZW50LnJpZ2h0ID0gbmV3Q2hpbGQpO1xuICB9XG5cbiAgbWFuYWdlRGVsZXRpb25Ob2RlV2l0aE5vQ2hpbGQobm9kZSwgcGFyZW50KSB7XG4gICAgcGFyZW50LmRhdGEgPiBub2RlLmRhdGEgPyAocGFyZW50LmxlZnQgPSBudWxsKSA6IChwYXJlbnQucmlnaHQgPSBudWxsKTtcbiAgfVxuXG4gIG1hbmFnZURlbGV0aW9uTm9kZVdpdGhUd29DaGlsZHMobm9kZSkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMuZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0KG5vZGUpO1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RGF0YSA9IHJlcGxhY2VtZW50Tm9kZS5kYXRhO1xuICAgIHRoaXMuZGVsZXRlKHJlcGxhY2VtZW50RGF0YSk7XG4gICAgbm9kZS5kYXRhID0gcmVwbGFjZW1lbnREYXRhO1xuICB9XG5cbiAgZGVsZXRlKHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZCh2YWx1ZSk7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlKG5vZGUpO1xuICAgIGlmICh0aGlzLmNvdW50Q2hpbGQobm9kZSkgPT09IDApXG4gICAgICB0aGlzLm1hbmFnZURlbGV0aW9uTm9kZVdpdGhOb0NoaWxkKG5vZGUsIHBhcmVudCk7XG4gICAgZWxzZSBpZiAodGhpcy5jb3VudENoaWxkKG5vZGUpID09PSAxKSB7XG4gICAgICB0aGlzLm1hbmFnZURlbGV0aW9uTm9kZVdpdGhPbmVDaGlsZChub2RlLCBwYXJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hbmFnZURlbGV0aW9uTm9kZVdpdGhUd29DaGlsZHMobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc05vZGUobm9kZSwgdmFsdWVzKSB7XG4gICAgdmFsdWVzLnB1c2gobm9kZS5kYXRhKTtcbiAgfVxuXG4gIGxldmVsT3JkZXJSZWN1cnNpdmUoXG4gICAgcHJvY2Vzc05vZGUgPSB0aGlzLnByb2Nlc3NOb2RlLFxuICAgIG5vZGUgPSB0aGlzLnJvb3QsXG4gICAgcXVldWUgPSBbbm9kZV0sXG4gICAgdmFsdWVzID0gW11cbiAgKSB7XG4gICAgaWYgKHF1ZXVlWzBdID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBwcm9jZXNzTm9kZShub2RlLCB2YWx1ZXMpO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KTtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIHRoaXMubGV2ZWxPcmRlclJlY3Vyc2l2ZShwcm9jZXNzTm9kZSwgcXVldWVbMF0sIHF1ZXVlLCB2YWx1ZXMpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBsZXZlbE9yZGVySXRlcmF0aXZlKFxuICAgIHByb2Nlc3NOb2RlID0gdGhpcy5wcm9jZXNzTm9kZSxcbiAgICBxdWV1ZSA9IFt0aGlzLnJvb3RdLFxuICAgIHZhbHVlcyA9IFtdXG4gICkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9jZXNzTm9kZShxdWV1ZVswXSwgdmFsdWVzKTtcbiAgICAgIGlmIChxdWV1ZVswXS5sZWZ0ICE9IG51bGwpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdCk7XG4gICAgICBpZiAocXVldWVbMF0ucmlnaHQgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodCk7XG4gICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgLy8gPGxlZnQ+IDxyb290PiA8cmlnaHQ+XG4gIGlub3JkZXIocHJvY2Vzc05vZGUgPSB0aGlzLnByb2Nlc3NOb2RlLCByb290ID0gdGhpcy5yb290LCB2YWx1ZXMgPSBbXSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5pbm9yZGVyKHByb2Nlc3NOb2RlLCByb290LmxlZnQsIHZhbHVlcyk7XG4gICAgcHJvY2Vzc05vZGUocm9vdCwgdmFsdWVzKTtcbiAgICB0aGlzLmlub3JkZXIocHJvY2Vzc05vZGUsIHJvb3QucmlnaHQsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8vIDxyb290PiA8bGVmdD4gPHJpZ2h0PlxuICBwcmVvcmRlcihwcm9jZXNzTm9kZSA9IHRoaXMucHJvY2Vzc05vZGUsIHJvb3QgPSB0aGlzLnJvb3QsIHZhbHVlcyA9IFtdKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9jZXNzTm9kZShyb290LCB2YWx1ZXMpO1xuICAgIHRoaXMucHJlb3JkZXIocHJvY2Vzc05vZGUsIHJvb3QubGVmdCwgdmFsdWVzKTtcbiAgICB0aGlzLnByZW9yZGVyKHByb2Nlc3NOb2RlLCByb290LnJpZ2h0LCB2YWx1ZXMpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvLyA8bGVmdD4gPHJpZ2h0PiA8cm9vdD5cbiAgcG9zdG9yZGVyKHByb2Nlc3NOb2RlID0gdGhpcy5wcm9jZXNzTm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgdmFsdWVzID0gW10pIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMucG9zdG9yZGVyKHByb2Nlc3NOb2RlLCByb290LmxlZnQsIHZhbHVlcyk7XG4gICAgdGhpcy5wb3N0b3JkZXIocHJvY2Vzc05vZGUsIHJvb3QucmlnaHQsIHZhbHVlcyk7XG4gICAgcHJvY2Vzc05vZGUocm9vdCwgdmFsdWVzKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZGVwdGgobm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgY291bnQgPSAxKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHJldHVybiAwO1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUobm9kZSkgPT09IHJvb3QpIHJldHVybiBjb3VudDtcbiAgICByZXR1cm4gdGhpcy5kZXB0aCh0aGlzLnBhcmVudE5vZGUobm9kZSksIHRoaXMucm9vdCwgKytjb3VudCk7XG4gIH1cblxuICBoZWlnaHQobm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAodGhpcy5pc0FMZWFmTm9kZShub2RlKSkgcmV0dXJuIDA7XG4gICAgbGV0IGhlaWdodE9mTGVmdCA9IDA7XG4gICAgbGV0IGhlaWdodE9mUmlnaHQgPSAwO1xuICAgIGlmIChub2RlLmxlZnQgIT0gbnVsbCkgaGVpZ2h0T2ZMZWZ0ID0gMSArIHRoaXMuaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgaWYgKG5vZGUucmlnaHQgIT0gbnVsbCkgaGVpZ2h0T2ZSaWdodCA9IDEgKyB0aGlzLmhlaWdodChub2RlLnJpZ2h0KTtcbiAgICByZXR1cm4gaGVpZ2h0T2ZMZWZ0ID4gaGVpZ2h0T2ZSaWdodCA/IGhlaWdodE9mTGVmdCA6IGhlaWdodE9mUmlnaHQ7XG4gIH1cblxuICBpc0JhbGFuY2VkKG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgbGVmdEhlaWdodCA9IHRoaXMuaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgY29uc3QgcmlnaHRIZWlnaHQgPSB0aGlzLmhlaWdodChub2RlLnJpZ2h0KTtcbiAgICBpZiAoTWF0aC5hYnMobGVmdEhlaWdodCAtIHJpZ2h0SGVpZ2h0KSA+IDEpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5pc0JhbGFuY2VkKG5vZGUubGVmdCkgJiYgdGhpcy5pc0JhbGFuY2VkKG5vZGUucmlnaHQpO1xuICB9XG5cbiAgcmViYWxhbmNlKGFycmF5ID0gW10pIHtcbiAgICB0aGlzLmlub3JkZXIoKG5vZGUpID0+IGFycmF5LnB1c2gobm9kZS5kYXRhKSk7XG4gICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKGFycmF5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCByZW1vdmVEdXBsaWNhdGVzIGZyb20gJy4vcmVtb3ZlRHVwbGljYXRlcyc7XG5pbXBvcnQgbWVyZ2VTb3J0IGZyb20gJy4vbWVyZ2VTb3J0JztcblxuZnVuY3Rpb24gYnVpbGRUcmVlKHVuaXF1ZVNvcnRlZEFycmF5KSB7XG4gIC8vIGFycmF5IG11c3QgYmUgc29ydGVkIGFuZCBkdXBsaWNhdGVzIG11c3QgYmUgcmVtb3ZlZFxuICBpZiAodW5pcXVlU29ydGVkQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBjb25zdCBlbmQgPSB1bmlxdWVTb3J0ZWRBcnJheS5sZW5ndGg7XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIHN0YXJ0KSAvIDIpO1xuICBjb25zdCBsZWZ0U3ViYXJyYXkgPSB1bmlxdWVTb3J0ZWRBcnJheS5zbGljZSgwLCBtaWQpO1xuICBjb25zdCByaWdodFN1YmFycmF5ID0gdW5pcXVlU29ydGVkQXJyYXkuc2xpY2UobWlkICsgMSwgZW5kKTtcbiAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKFxuICAgIHVuaXF1ZVNvcnRlZEFycmF5W21pZF0sXG4gICAgYnVpbGRUcmVlKGxlZnRTdWJhcnJheSksXG4gICAgYnVpbGRUcmVlKHJpZ2h0U3ViYXJyYXkpXG4gICk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZFRyZWU7XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUludCgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQXJyYXlPZkludChsZW5ndGggPSA3LCBhcnJheSA9IFtdKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaChnZW5lcmF0ZVJhbmRvbUludCgpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUmFuZG9tQXJyYXlPZkludDtcbiIsImZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDIpXG4gICAgcmV0dXJuIGFycmF5WzBdID4gYXJyYXlbMV0gPyBbYXJyYXlbMV0sIGFycmF5WzBdXSA6IFthcnJheVswXSwgYXJyYXlbMV1dO1xuICBjb25zdCBmaXJzdEhhbGYgPSBhcnJheS5zbGljZSgwLCBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpKTtcbiAgY29uc3Qgc2Vjb25kSGFsZiA9IGFycmF5LnNsaWNlKGZpcnN0SGFsZi5sZW5ndGgsIGFycmF5Lmxlbmd0aCk7XG4gIGNvbnN0IHNvcnRlZEZpcnN0SGFsZiA9IG1lcmdlU29ydChmaXJzdEhhbGYpO1xuICBjb25zdCBzb3J0ZWRTZWNvbmRIYWxmID0gbWVyZ2VTb3J0KHNlY29uZEhhbGYpO1xuICBjb25zdCBtZXJnZWRMaXN0ID0gW107XG4gIHdoaWxlIChzb3J0ZWRGaXJzdEhhbGYubGVuZ3RoID4gMCAmJiBzb3J0ZWRTZWNvbmRIYWxmLmxlbmd0aCA+IDApIHtcbiAgICBzb3J0ZWRGaXJzdEhhbGZbMF0gPiBzb3J0ZWRTZWNvbmRIYWxmWzBdXG4gICAgICA/IG1lcmdlZExpc3QucHVzaChzb3J0ZWRTZWNvbmRIYWxmLnNwbGljZSgwLCAxKVswXSlcbiAgICAgIDogbWVyZ2VkTGlzdC5wdXNoKHNvcnRlZEZpcnN0SGFsZi5zcGxpY2UoMCwgMSlbMF0pO1xuICB9XG4gIG1lcmdlZExpc3QucHVzaCguLi5zb3J0ZWRGaXJzdEhhbGYsIC4uLnNvcnRlZFNlY29uZEhhbGYpO1xuICByZXR1cm4gbWVyZ2VkTGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0O1xuIiwiZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhzb3J0ZWRBcnJheSwgbmV3QXJyYXkgPSBbXSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZEFycmF5W2ldICE9PSBzb3J0ZWRBcnJheVtpICsgMV0pIG5ld0FycmF5LnB1c2goc29ydGVkQXJyYXlbaV0pO1xuICB9XG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRHVwbGljYXRlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyZWUgZnJvbSAnLi9UcmVlJztcbmltcG9ydCBnZW5lcmF0ZVJhbmRvbUFycmF5T2ZJbnQgZnJvbSAnLi9nZW5lcmF0ZVJhbmRvbUludHMnO1xuXG5mdW5jdGlvbiBwcmludFRyZWVUcmF2ZXJzYWwodHJlZSkge1xuICBjb25zb2xlLmxvZyhgbGV2ZWxvcmRlciA6ICR7dHJlZS5sZXZlbE9yZGVyUmVjdXJzaXZlKCl9YCk7XG4gIGNvbnNvbGUubG9nKGBwcmVvcmRlciA6ICR7dHJlZS5wcmVvcmRlcigpfWApO1xuICBjb25zb2xlLmxvZyhgcG9zdG9yZGVyIDogJHt0cmVlLnBvc3RvcmRlcigpfWApO1xuICBjb25zb2xlLmxvZyhgaW5vcmRlciA6ICR7dHJlZS5pbm9yZGVyKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHByaW50SWZUcmVlSXNCYWxhbmVkKHRyZWUpIHtcbiAgY29uc29sZS5sb2coYGlzIHRoZSB0cmVlIGJhbGFuY2VkID8gJHt0cmVlLmlzQmFsYW5jZWQoKX1gKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRJbmZvc0Fib3V0VHJlZSh0cmVlKSB7XG4gIHRyZWUucHJldHR5UHJpbnQoKTtcbiAgcHJpbnRJZlRyZWVJc0JhbGFuZWQodHJlZSk7XG4gIHByaW50VHJlZVRyYXZlcnNhbCh0cmVlKTtcbn1cblxuLyogY29uc3QgdHJlZSA9IG5ldyBUcmVlKGdlbmVyYXRlUmFuZG9tQXJyYXlPZkludCg0KSk7XG5cbnByaW50SW5mb3NBYm91dFRyZWUodHJlZSk7XG5cbnRyZWUuaW5zZXJ0KDE0NSk7XG50cmVlLmluc2VydCgxMjIpO1xudHJlZS5pbnNlcnQoMjQ2KTtcbnRyZWUuaW5zZXJ0KDI1Nyk7XG5cbnByaW50SW5mb3NBYm91dFRyZWUodHJlZSk7XG5cbnRyZWUucmViYWxhbmNlKCk7XG5cbnByaW50SW5mb3NBYm91dFRyZWUodHJlZSk7ICovXG5cbmNvbnN0IHRyZWUgPSBuZXcgVHJlZShbMSwgMywgNiwgOSwgMiwgNCwgMTAsIDExLCA0LCA1XSk7XG5cbnByaW50SW5mb3NBYm91dFRyZWUodHJlZSk7XG50cmVlLmRlbGV0ZSgxMCk7XG50cmVlLnByZXR0eVByaW50KCk7XG4iXSwibmFtZXMiOlsiTm9kZSIsImRhdGEiLCJsZWZ0IiwicmlnaHQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGF0YSIsIl9sZWZ0IiwiX3JpZ2h0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0Iiwic2V0IiwibmV3RGF0YSIsInZhbHVlIiwiYnVpbGRUcmVlIiwicmVtb3ZlRHVwbGljYXRlcyIsIm1lcmdlU29ydCIsIlRyZWUiLCJvcmlnaW5hbEFycmF5IiwidW5pcXVlU29ydGVkQXJyYXkiLCJyb290IiwiaXNBTGVhZk5vZGUiLCJub2RlIiwicHJldHR5UHJpbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbnMiLCJpbnNlcnQiLCJmaW5kIiwiY291bnRDaGlsZCIsInBhcmVudE5vZGUiLCJjaGlsZCIsImZpbmRUaGVTbWFsbGVzdE9mVGhlSGlnaGVzdCIsInN0YXJ0IiwibWFuYWdlRGVsZXRpb25Ob2RlV2l0aE9uZUNoaWxkIiwicGFyZW50IiwibmV3Q2hpbGQiLCJtYW5hZ2VEZWxldGlvbk5vZGVXaXRoTm9DaGlsZCIsIm1hbmFnZURlbGV0aW9uTm9kZVdpdGhUd29DaGlsZHMiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudERhdGEiLCJfZGVsZXRlIiwicHJvY2Vzc05vZGUiLCJ2YWx1ZXMiLCJwdXNoIiwibGV2ZWxPcmRlclJlY3Vyc2l2ZSIsInF1ZXVlIiwic2hpZnQiLCJsZXZlbE9yZGVySXRlcmF0aXZlIiwiaW5vcmRlciIsInByZW9yZGVyIiwicG9zdG9yZGVyIiwiZGVwdGgiLCJjb3VudCIsImhlaWdodCIsImhlaWdodE9mTGVmdCIsImhlaWdodE9mUmlnaHQiLCJpc0JhbGFuY2VkIiwibGVmdEhlaWdodCIsInJpZ2h0SGVpZ2h0IiwiTWF0aCIsImFicyIsInJlYmFsYW5jZSIsImFycmF5IiwiZW5kIiwibWlkIiwiZmxvb3IiLCJsZWZ0U3ViYXJyYXkiLCJzbGljZSIsInJpZ2h0U3ViYXJyYXkiLCJnZW5lcmF0ZVJhbmRvbUludCIsInJhbmRvbSIsImdlbmVyYXRlUmFuZG9tQXJyYXlPZkludCIsImkiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwic29ydGVkRmlyc3RIYWxmIiwic29ydGVkU2Vjb25kSGFsZiIsIm1lcmdlZExpc3QiLCJzcGxpY2UiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsInNvcnRlZEFycmF5IiwibmV3QXJyYXkiLCJwcmludFRyZWVUcmF2ZXJzYWwiLCJ0cmVlIiwicHJpbnRJZlRyZWVJc0JhbGFuZWQiLCJwcmludEluZm9zQWJvdXRUcmVlIl0sInNvdXJjZVJvb3QiOiIifQ==