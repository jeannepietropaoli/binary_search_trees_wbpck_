import buildTree from './buildTree';
import removeDuplicates from './removeDuplicates';
import mergeSort from './mergeSort';
import Node from './Node';

class Tree {
  constructor(array) {
    this.root = buildTree(removeDuplicates(mergeSort(array)));
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null)
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }

  contains(value, node = this.root) {
    if (node === null) return false;
    if (node.data === value) return true;
    return node.data > value
      ? this.contains(value, node.left)
      : this.contains(value, node.right);
  }

  insert(value, node = this.root) {
    if (!this.contains(value)) {
      if (node.right === null && node.data < value)
        node.right = new Node(value, null, null);
      else if (node.left === null && node.data > value)
        node.left = new Node(value, null, null);
      else {
        node.data > value
          ? this.insert(value, node.left)
          : this.insert(value, node.right);
      }
    }
  }

  find(value, node = this.root) {
    if (node === null) return undefined;
    if (node.data === value) return node;
    return node.data > value
      ? this.find(value, node.left)
      : this.find(value, node.right);
  }

  countChild(node) {
    if (node.left === null && node.right === null) return 0;
    if (node.left === null || node.right === null) return 1;
    return 2;
  }

  parentNode(child, node = this.root) {
    if ((node.left === null && node.right === null) || child === this.root)
      return undefined;
    if (node.left === child || node.right === child) return node;
    return node.data > child.data
      ? this.parentNode(child, node.left)
      : this.parentNode(child, node.right);
  }

  findTheSmallestOfTheHighest(node, start = node.right) {
    if (start.left === null) return start;
    return this.findTheSmallestOfTheHighest(node, start.left);
  }

  delete(value) {
    const node = this.find(value);
    const parent = this.parentNode(node);
    if (this.countChild(node) === 0)
      parent.data > node.data ? (parent.left = null) : (parent.right = null);
    else if (this.countChild(node) === 1) {
      let newChild;
      node.left === null ? (newChild = node.right) : (newChild = node.left);
      parent.data > newChild.data
        ? (parent.left = newChild)
        : (parent.right = newChild);
    } else {
      const replacementNode = this.findTheSmallestOfTheHighest(node);
      const replacementData = replacementNode.data;
      this.delete(replacementData);
      node.data = replacementData;
    }
  }

  processNode(node, values) {
    values.push(node.data);
  }

  levelOrderRecursive(
    processNode = this.processNode,
    node = this.root,
    queue = [node],
    values = []
  ) {
    if (queue[0] === undefined) return;
    processNode(node, values);
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
    queue.shift();
    this.levelOrderRecursive(processNode, queue[0], queue, values);
    return values;
  }

  levelOrderIterative(
    processNode = this.processNode,
    queue = [this.root],
    values = []
  ) {
    while (queue.length > 0) {
      processNode(queue[0], values);
      if (queue[0].left != null) queue.push(queue[0].left);
      if (queue[0].right != null) queue.push(queue[0].right);
      queue.shift();
    }
    return values;
  }

  // <left> <root> <right>
  inorder(processNode = this.processNode, root = this.root, values = []) {
    if (root === null) return;
    this.inorder(processNode, root.left, values);
    processNode(root, values);
    this.inorder(processNode, root.right, values);
    return values;
  }

  // <root> <left> <right>
  preorder(processNode = this.processNode, root = this.root, values = []) {
    if (root === null) return;
    processNode(root, values);
    this.preorder(processNode, root.left, values);
    this.preorder(processNode, root.right, values);
    return values;
  }

  // <left> <right> <root>
  postorder(processNode = this.processNode, root = this.root, values = []) {
    if (root === null) return;
    this.postorder(processNode, root.left, values);
    this.postorder(processNode, root.right, values);
    processNode(root, values);
    return values;
  }

  depth(node, root = this.root, count = 1) {
    if (node === root) return 0;
    if (this.parentNode(node) === root) return count;
    return this.depth(this.parentNode(node), this.root, ++count);
  }

  height(node = this.root) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 0;
    let heightOfLeft = 0;
    let heightOfRight = 0;
    if (node.left != null) heightOfLeft = 1 + this.height(node.left);
    if (node.right != null) heightOfRight = 1 + this.height(node.right);
    return heightOfLeft > heightOfRight ? heightOfLeft : heightOfRight;
  }

  isBalanced(node = this.root) {
    if (node === null) return true;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance(array = []) {
    this.inorder((node) => array.push(node.data));
    this.root = buildTree(array);
  }
}

export default Tree;
