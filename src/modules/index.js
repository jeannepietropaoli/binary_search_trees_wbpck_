import merge from './mergeSort';
import Tree from './Tree';

console.log(merge([1, 6, 2, 9, 10, 22, 13]));

function generateRandomInt() {
  return Math.floor(Math.random() * 100);
}

function generateRandomArrayOfInt(length = 7, array = []) {
  for (let i = 1; i <= length; i++) {
    array.push(generateRandomInt());
  }
  return array;
}

const tree = new Tree(generateRandomArrayOfInt(4));
tree.prettyPrint();
console.log(`is the tree balanced ? ${tree.isBalanced()}`);
console.log(`levelorder : ${tree.levelOrderRecursive()}`);
console.log(`preorder : ${tree.preorder()}`);
console.log(`postorder : ${tree.postorder()}`);
console.log(`inorder : ${tree.inorder()}`);

tree.insert(145);
tree.insert(122);
tree.insert(246);
tree.insert(257);
tree.prettyPrint();
console.log(`is the tree balanced ? ${tree.isBalanced()}`);
console.log(tree.levelOrderRecursive());

tree.rebalance();
tree.prettyPrint();
console.log(`is the tree balanced ? ${tree.isBalanced()}`);
console.log(tree.levelOrderRecursive());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
