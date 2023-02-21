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
  function Tree(array) {
    _classCallCheck(this, Tree);
    this.root = (0,_buildTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_removeDuplicates__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_mergeSort__WEBPACK_IMPORTED_MODULE_2__["default"])(array)));
  }
  _createClass(Tree, [{
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
      if (node.left === null && node.right === null) return 0;
      if (node.left === null || node.right === null) return 1;
      return 2;
    }
  }, {
    key: "parentNode",
    value: function parentNode(child) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (node.left === null && node.right === null || child === this.root) return undefined;
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
    key: "delete",
    value: function _delete(value) {
      var node = this.find(value);
      var parent = this.parentNode(node);
      if (this.countChild(node) === 0) parent.data > node.data ? parent.left = null : parent.right = null;else if (this.countChild(node) === 1) {
        var newChild;
        node.left === null ? newChild = node.right : newChild = node.left;
        parent.data > newChild.data ? parent.left = newChild : parent.right = newChild;
      } else {
        var replacementNode = this.findTheSmallestOfTheHighest(node);
        var replacementData = replacementNode.data;
        this["delete"](replacementData);
        node.data = replacementData;
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
      if (node.left === null && node.right === null) return 0;
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

function buildTree(array) {
  // array must be sorted and duplicates must be removed
  if (array.length === 0) return null;
  var start = 0;
  var end = array.length;
  var mid = Math.floor((end - start) / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid + 1, end);
  var node = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](array[mid], buildTree(left), buildTree(right));
  return node;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildTree);

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
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort */ "./src/modules/mergeSort.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./src/modules/Tree.js");


console.log((0,_mergeSort__WEBPACK_IMPORTED_MODULE_0__["default"])([1, 6, 2, 9, 10, 22, 13]));
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
var tree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"](generateRandomArrayOfInt(4));
tree.prettyPrint();
console.log("is the tree balanced ? ".concat(tree.isBalanced()));
console.log("levelorder : ".concat(tree.levelOrderRecursive()));
console.log("preorder : ".concat(tree.preorder()));
console.log("postorder : ".concat(tree.postorder()));
console.log("inorder : ".concat(tree.inorder()));
tree.insert(145);
tree.insert(122);
tree.insert(246);
tree.insert(257);
tree.prettyPrint();
console.log("is the tree balanced ? ".concat(tree.isBalanced()));
console.log(tree.levelOrderRecursive());
tree.rebalance();
tree.prettyPrint();
console.log("is the tree balanced ? ".concat(tree.isBalanced()));
console.log(tree.levelOrderRecursive());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCd0QsSUFBSSxDQUFDekIsVUFBVSxFQUFFLEVBQUc7QUFDMUQ5QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NELElBQUksQ0FBQ3JDLG1CQUFtQixFQUFFLENBQUM7QUFDdkNsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NELElBQUksQ0FBQ2hDLFFBQVEsRUFBRSxDQUFDO0FBQzVCdkIsT0FBTyxDQUFDQyxHQUFHLENBQUNzRCxJQUFJLENBQUMvQixTQUFTLEVBQUUsQ0FBQztBQUM3QnhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0QsSUFBSSxDQUFDakMsT0FBTyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfLy4vc3JjL21vZHVsZXMvTm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVzX3dicGNrXy8uL3NyYy9tb2R1bGVzL1RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9yZW1vdmVEdXBsaWNhdGVzLmpzIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVzX3dicGNrXy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZXNfd2JwY2tfL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlc193YnBja18vLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLl9yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBzZXQgZGF0YShuZXdEYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gIH1cblxuICBnZXQgcmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xuICB9XG5cbiAgc2V0IHJpZ2h0KHZhbHVlKSB7XG4gICAgdGhpcy5fcmlnaHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9XG5cbiAgc2V0IGxlZnQodmFsdWUpIHtcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImltcG9ydCBidWlsZFRyZWUgZnJvbSAnLi9idWlsZFRyZWUnO1xuaW1wb3J0IHJlbW92ZUR1cGxpY2F0ZXMgZnJvbSAnLi9yZW1vdmVEdXBsaWNhdGVzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9tZXJnZVNvcnQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKHJlbW92ZUR1cGxpY2F0ZXMobWVyZ2VTb3J0KGFycmF5KSkpO1xuICB9XG5cbiAgcHJldHR5UHJpbnQobm9kZSA9IHRoaXMucm9vdCwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpIHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbClcbiAgICAgIHRoaXMucHJldHR5UHJpbnQoXG4gICAgICAgIG5vZGUucmlnaHQsXG4gICAgICAgIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKVxuICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG5cbiAgY29udGFpbnModmFsdWUsIG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZS5kYXRhID4gdmFsdWVcbiAgICAgID8gdGhpcy5jb250YWlucyh2YWx1ZSwgbm9kZS5sZWZ0KVxuICAgICAgOiB0aGlzLmNvbnRhaW5zKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIGluc2VydCh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmICghdGhpcy5jb250YWlucyh2YWx1ZSkpIHtcbiAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUuZGF0YSA8IHZhbHVlKVxuICAgICAgICBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUsIG51bGwsIG51bGwpO1xuICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUuZGF0YSA+IHZhbHVlKVxuICAgICAgICBub2RlLmxlZnQgPSBuZXcgTm9kZSh2YWx1ZSwgbnVsbCwgbnVsbCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5kYXRhID4gdmFsdWVcbiAgICAgICAgICA/IHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICAgICAgOiB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluZCh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSByZXR1cm4gbm9kZTtcbiAgICByZXR1cm4gbm9kZS5kYXRhID4gdmFsdWVcbiAgICAgID8gdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICA6IHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gIH1cblxuICBjb3VudENoaWxkKG5vZGUpIHtcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgfHwgbm9kZS5yaWdodCA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBwYXJlbnROb2RlKGNoaWxkLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgaWYgKChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgfHwgY2hpbGQgPT09IHRoaXMucm9vdClcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKG5vZGUubGVmdCA9PT0gY2hpbGQgfHwgbm9kZS5yaWdodCA9PT0gY2hpbGQpIHJldHVybiBub2RlO1xuICAgIHJldHVybiBub2RlLmRhdGEgPiBjaGlsZC5kYXRhXG4gICAgICA/IHRoaXMucGFyZW50Tm9kZShjaGlsZCwgbm9kZS5sZWZ0KVxuICAgICAgOiB0aGlzLnBhcmVudE5vZGUoY2hpbGQsIG5vZGUucmlnaHQpO1xuICB9XG5cbiAgZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0KG5vZGUsIHN0YXJ0ID0gbm9kZS5yaWdodCkge1xuICAgIGlmIChzdGFydC5sZWZ0ID09PSBudWxsKSByZXR1cm4gc3RhcnQ7XG4gICAgcmV0dXJuIHRoaXMuZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0KG5vZGUsIHN0YXJ0LmxlZnQpO1xuICB9XG5cbiAgZGVsZXRlKHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZCh2YWx1ZSk7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlKG5vZGUpO1xuICAgIGlmICh0aGlzLmNvdW50Q2hpbGQobm9kZSkgPT09IDApXG4gICAgICBwYXJlbnQuZGF0YSA+IG5vZGUuZGF0YSA/IChwYXJlbnQubGVmdCA9IG51bGwpIDogKHBhcmVudC5yaWdodCA9IG51bGwpO1xuICAgIGVsc2UgaWYgKHRoaXMuY291bnRDaGlsZChub2RlKSA9PT0gMSkge1xuICAgICAgbGV0IG5ld0NoaWxkO1xuICAgICAgbm9kZS5sZWZ0ID09PSBudWxsID8gKG5ld0NoaWxkID0gbm9kZS5yaWdodCkgOiAobmV3Q2hpbGQgPSBub2RlLmxlZnQpO1xuICAgICAgcGFyZW50LmRhdGEgPiBuZXdDaGlsZC5kYXRhXG4gICAgICAgID8gKHBhcmVudC5sZWZ0ID0gbmV3Q2hpbGQpXG4gICAgICAgIDogKHBhcmVudC5yaWdodCA9IG5ld0NoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5maW5kVGhlU21hbGxlc3RPZlRoZUhpZ2hlc3Qobm9kZSk7XG4gICAgICBjb25zdCByZXBsYWNlbWVudERhdGEgPSByZXBsYWNlbWVudE5vZGUuZGF0YTtcbiAgICAgIHRoaXMuZGVsZXRlKHJlcGxhY2VtZW50RGF0YSk7XG4gICAgICBub2RlLmRhdGEgPSByZXBsYWNlbWVudERhdGE7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc05vZGUobm9kZSwgdmFsdWVzKSB7XG4gICAgdmFsdWVzLnB1c2gobm9kZS5kYXRhKTtcbiAgfVxuXG4gIGxldmVsT3JkZXJSZWN1cnNpdmUoXG4gICAgcHJvY2Vzc05vZGUgPSB0aGlzLnByb2Nlc3NOb2RlLFxuICAgIG5vZGUgPSB0aGlzLnJvb3QsXG4gICAgcXVldWUgPSBbbm9kZV0sXG4gICAgdmFsdWVzID0gW11cbiAgKSB7XG4gICAgaWYgKHF1ZXVlWzBdID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBwcm9jZXNzTm9kZShub2RlLCB2YWx1ZXMpO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KTtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIHRoaXMubGV2ZWxPcmRlclJlY3Vyc2l2ZShwcm9jZXNzTm9kZSwgcXVldWVbMF0sIHF1ZXVlLCB2YWx1ZXMpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBsZXZlbE9yZGVySXRlcmF0aXZlKFxuICAgIHByb2Nlc3NOb2RlID0gdGhpcy5wcm9jZXNzTm9kZSxcbiAgICBxdWV1ZSA9IFt0aGlzLnJvb3RdLFxuICAgIHZhbHVlcyA9IFtdXG4gICkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9jZXNzTm9kZShxdWV1ZVswXSwgdmFsdWVzKTtcbiAgICAgIGlmIChxdWV1ZVswXS5sZWZ0ICE9IG51bGwpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdCk7XG4gICAgICBpZiAocXVldWVbMF0ucmlnaHQgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodCk7XG4gICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgLy8gPGxlZnQ+IDxyb290PiA8cmlnaHQ+XG4gIGlub3JkZXIocHJvY2Vzc05vZGUgPSB0aGlzLnByb2Nlc3NOb2RlLCByb290ID0gdGhpcy5yb290LCB2YWx1ZXMgPSBbXSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5pbm9yZGVyKHByb2Nlc3NOb2RlLCByb290LmxlZnQsIHZhbHVlcyk7XG4gICAgcHJvY2Vzc05vZGUocm9vdCwgdmFsdWVzKTtcbiAgICB0aGlzLmlub3JkZXIocHJvY2Vzc05vZGUsIHJvb3QucmlnaHQsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8vIDxyb290PiA8bGVmdD4gPHJpZ2h0PlxuICBwcmVvcmRlcihwcm9jZXNzTm9kZSA9IHRoaXMucHJvY2Vzc05vZGUsIHJvb3QgPSB0aGlzLnJvb3QsIHZhbHVlcyA9IFtdKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9jZXNzTm9kZShyb290LCB2YWx1ZXMpO1xuICAgIHRoaXMucHJlb3JkZXIocHJvY2Vzc05vZGUsIHJvb3QubGVmdCwgdmFsdWVzKTtcbiAgICB0aGlzLnByZW9yZGVyKHByb2Nlc3NOb2RlLCByb290LnJpZ2h0LCB2YWx1ZXMpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvLyA8bGVmdD4gPHJpZ2h0PiA8cm9vdD5cbiAgcG9zdG9yZGVyKHByb2Nlc3NOb2RlID0gdGhpcy5wcm9jZXNzTm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgdmFsdWVzID0gW10pIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMucG9zdG9yZGVyKHByb2Nlc3NOb2RlLCByb290LmxlZnQsIHZhbHVlcyk7XG4gICAgdGhpcy5wb3N0b3JkZXIocHJvY2Vzc05vZGUsIHJvb3QucmlnaHQsIHZhbHVlcyk7XG4gICAgcHJvY2Vzc05vZGUocm9vdCwgdmFsdWVzKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgZGVwdGgobm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgY291bnQgPSAxKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHJldHVybiAwO1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUobm9kZSkgPT09IHJvb3QpIHJldHVybiBjb3VudDtcbiAgICByZXR1cm4gdGhpcy5kZXB0aCh0aGlzLnBhcmVudE5vZGUobm9kZSksIHRoaXMucm9vdCwgKytjb3VudCk7XG4gIH1cblxuICBoZWlnaHQobm9kZSA9IHRoaXMucm9vdCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVybiAwO1xuICAgIGxldCBoZWlnaHRPZkxlZnQgPSAwO1xuICAgIGxldCBoZWlnaHRPZlJpZ2h0ID0gMDtcbiAgICBpZiAobm9kZS5sZWZ0ICE9IG51bGwpIGhlaWdodE9mTGVmdCA9IDEgKyB0aGlzLmhlaWdodChub2RlLmxlZnQpO1xuICAgIGlmIChub2RlLnJpZ2h0ICE9IG51bGwpIGhlaWdodE9mUmlnaHQgPSAxICsgdGhpcy5oZWlnaHQobm9kZS5yaWdodCk7XG4gICAgcmV0dXJuIGhlaWdodE9mTGVmdCA+IGhlaWdodE9mUmlnaHQgPyBoZWlnaHRPZkxlZnQgOiBoZWlnaHRPZlJpZ2h0O1xuICB9XG5cbiAgaXNCYWxhbmNlZChub2RlID0gdGhpcy5yb290KSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGxlZnRIZWlnaHQgPSB0aGlzLmhlaWdodChub2RlLmxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gdGhpcy5oZWlnaHQobm9kZS5yaWdodCk7XG4gICAgaWYgKE1hdGguYWJzKGxlZnRIZWlnaHQgLSByaWdodEhlaWdodCkgPiAxKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuaXNCYWxhbmNlZChub2RlLmxlZnQpICYmIHRoaXMuaXNCYWxhbmNlZChub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIHJlYmFsYW5jZShhcnJheSA9IFtdKSB7XG4gICAgdGhpcy5pbm9yZGVyKChub2RlKSA9PiBhcnJheS5wdXNoKG5vZGUuZGF0YSkpO1xuICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiIsImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSkge1xuICAvLyBhcnJheSBtdXN0IGJlIHNvcnRlZCBhbmQgZHVwbGljYXRlcyBtdXN0IGJlIHJlbW92ZWRcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gYXJyYXkubGVuZ3RoO1xuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBzdGFydCkgLyAyKTtcbiAgY29uc3QgbGVmdCA9IGFycmF5LnNsaWNlKDAsIG1pZCk7XG4gIGNvbnN0IHJpZ2h0ID0gYXJyYXkuc2xpY2UobWlkICsgMSwgZW5kKTtcbiAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGFycmF5W21pZF0sIGJ1aWxkVHJlZShsZWZ0KSwgYnVpbGRUcmVlKHJpZ2h0KSk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZFRyZWU7XG4iLCJmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAyKVxuICAgIHJldHVybiBhcnJheVswXSA+IGFycmF5WzFdID8gW2FycmF5WzFdLCBhcnJheVswXV0gOiBbYXJyYXlbMF0sIGFycmF5WzFdXTtcbiAgY29uc3QgZmlyc3RIYWxmID0gYXJyYXkuc2xpY2UoMCwgTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKSk7XG4gIGNvbnN0IHNlY29uZEhhbGYgPSBhcnJheS5zbGljZShmaXJzdEhhbGYubGVuZ3RoLCBhcnJheS5sZW5ndGgpO1xuICBjb25zdCBzb3J0ZWRGaXJzdEhhbGYgPSBtZXJnZVNvcnQoZmlyc3RIYWxmKTtcbiAgY29uc3Qgc29ydGVkU2Vjb25kSGFsZiA9IG1lcmdlU29ydChzZWNvbmRIYWxmKTtcbiAgY29uc3QgbWVyZ2VkTGlzdCA9IFtdO1xuICB3aGlsZSAoc29ydGVkRmlyc3RIYWxmLmxlbmd0aCA+IDAgJiYgc29ydGVkU2Vjb25kSGFsZi5sZW5ndGggPiAwKSB7XG4gICAgc29ydGVkRmlyc3RIYWxmWzBdID4gc29ydGVkU2Vjb25kSGFsZlswXVxuICAgICAgPyBtZXJnZWRMaXN0LnB1c2goc29ydGVkU2Vjb25kSGFsZi5zcGxpY2UoMCwgMSlbMF0pXG4gICAgICA6IG1lcmdlZExpc3QucHVzaChzb3J0ZWRGaXJzdEhhbGYuc3BsaWNlKDAsIDEpWzBdKTtcbiAgfVxuICBtZXJnZWRMaXN0LnB1c2goLi4uc29ydGVkRmlyc3RIYWxmLCAuLi5zb3J0ZWRTZWNvbmRIYWxmKTtcbiAgcmV0dXJuIG1lcmdlZExpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDtcbiIsImZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoc29ydGVkQXJyYXksIG5ld0FycmF5ID0gW10pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWRBcnJheVtpXSAhPT0gc29ydGVkQXJyYXlbaSArIDFdKSBuZXdBcnJheS5wdXNoKHNvcnRlZEFycmF5W2ldKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUR1cGxpY2F0ZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlU29ydCc7XG5pbXBvcnQgVHJlZSBmcm9tICcuL1RyZWUnO1xuXG5jb25zb2xlLmxvZyhtZXJnZShbMSwgNiwgMiwgOSwgMTAsIDIyLCAxM10pKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JbnQoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUFycmF5T2ZJbnQobGVuZ3RoID0gNywgYXJyYXkgPSBbXSkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goZ2VuZXJhdGVSYW5kb21JbnQoKSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCB0cmVlID0gbmV3IFRyZWUoZ2VuZXJhdGVSYW5kb21BcnJheU9mSW50KDQpKTtcbnRyZWUucHJldHR5UHJpbnQoKTtcbmNvbnNvbGUubG9nKGBpcyB0aGUgdHJlZSBiYWxhbmNlZCA/ICR7dHJlZS5pc0JhbGFuY2VkKCl9YCk7XG5jb25zb2xlLmxvZyhgbGV2ZWxvcmRlciA6ICR7dHJlZS5sZXZlbE9yZGVyUmVjdXJzaXZlKCl9YCk7XG5jb25zb2xlLmxvZyhgcHJlb3JkZXIgOiAke3RyZWUucHJlb3JkZXIoKX1gKTtcbmNvbnNvbGUubG9nKGBwb3N0b3JkZXIgOiAke3RyZWUucG9zdG9yZGVyKCl9YCk7XG5jb25zb2xlLmxvZyhgaW5vcmRlciA6ICR7dHJlZS5pbm9yZGVyKCl9YCk7XG5cbnRyZWUuaW5zZXJ0KDE0NSk7XG50cmVlLmluc2VydCgxMjIpO1xudHJlZS5pbnNlcnQoMjQ2KTtcbnRyZWUuaW5zZXJ0KDI1Nyk7XG50cmVlLnByZXR0eVByaW50KCk7XG5jb25zb2xlLmxvZyhgaXMgdGhlIHRyZWUgYmFsYW5jZWQgPyAke3RyZWUuaXNCYWxhbmNlZCgpfWApO1xuY29uc29sZS5sb2codHJlZS5sZXZlbE9yZGVyUmVjdXJzaXZlKCkpO1xuXG50cmVlLnJlYmFsYW5jZSgpO1xudHJlZS5wcmV0dHlQcmludCgpO1xuY29uc29sZS5sb2coYGlzIHRoZSB0cmVlIGJhbGFuY2VkID8gJHt0cmVlLmlzQmFsYW5jZWQoKX1gKTtcbmNvbnNvbGUubG9nKHRyZWUubGV2ZWxPcmRlclJlY3Vyc2l2ZSgpKTtcbmNvbnNvbGUubG9nKHRyZWUucHJlb3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0cmVlLnBvc3RvcmRlcigpKTtcbmNvbnNvbGUubG9nKHRyZWUuaW5vcmRlcigpKTtcbiJdLCJuYW1lcyI6WyJOb2RlIiwiZGF0YSIsImxlZnQiLCJyaWdodCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kYXRhIiwiX2xlZnQiLCJfcmlnaHQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJzZXQiLCJuZXdEYXRhIiwidmFsdWUiLCJidWlsZFRyZWUiLCJyZW1vdmVEdXBsaWNhdGVzIiwibWVyZ2VTb3J0IiwiVHJlZSIsImFycmF5Iiwicm9vdCIsInByZXR0eVByaW50Iiwibm9kZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInByZWZpeCIsImlzTGVmdCIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWlucyIsImluc2VydCIsImZpbmQiLCJjb3VudENoaWxkIiwicGFyZW50Tm9kZSIsImNoaWxkIiwiZmluZFRoZVNtYWxsZXN0T2ZUaGVIaWdoZXN0Iiwic3RhcnQiLCJfZGVsZXRlIiwicGFyZW50IiwibmV3Q2hpbGQiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudERhdGEiLCJwcm9jZXNzTm9kZSIsInZhbHVlcyIsInB1c2giLCJsZXZlbE9yZGVyUmVjdXJzaXZlIiwicXVldWUiLCJzaGlmdCIsImxldmVsT3JkZXJJdGVyYXRpdmUiLCJpbm9yZGVyIiwicHJlb3JkZXIiLCJwb3N0b3JkZXIiLCJkZXB0aCIsImNvdW50IiwiaGVpZ2h0IiwiaGVpZ2h0T2ZMZWZ0IiwiaGVpZ2h0T2ZSaWdodCIsImlzQmFsYW5jZWQiLCJsZWZ0SGVpZ2h0IiwicmlnaHRIZWlnaHQiLCJNYXRoIiwiYWJzIiwicmViYWxhbmNlIiwiZW5kIiwibWlkIiwiZmxvb3IiLCJzbGljZSIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzb3J0ZWRGaXJzdEhhbGYiLCJzb3J0ZWRTZWNvbmRIYWxmIiwibWVyZ2VkTGlzdCIsInNwbGljZSIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic29ydGVkQXJyYXkiLCJuZXdBcnJheSIsImkiLCJtZXJnZSIsImdlbmVyYXRlUmFuZG9tSW50IiwicmFuZG9tIiwiZ2VuZXJhdGVSYW5kb21BcnJheU9mSW50IiwidHJlZSJdLCJzb3VyY2VSb290IjoiIn0=