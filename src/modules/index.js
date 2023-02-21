import Tree from './Tree';
import generateRandomArrayOfInt from './generateRandomInts';

function printTreeTraversal(tree) {
  console.log(`levelorder : ${tree.levelOrderRecursive()}`);
  console.log(`preorder : ${tree.preorder()}`);
  console.log(`postorder : ${tree.postorder()}`);
  console.log(`inorder : ${tree.inorder()}`);
}

function printIfTreeIsBalaned(tree) {
  console.log(`is the tree balanced ? ${tree.isBalanced()}`);
}

function printInfosAboutTree(tree) {
  tree.prettyPrint();
  printIfTreeIsBalaned(tree);
  printTreeTraversal(tree);
}

const tree = new Tree(generateRandomArrayOfInt(4));

printInfosAboutTree(tree);

tree.insert(145);
tree.insert(122);
tree.insert(246);
tree.insert(257);

printInfosAboutTree(tree);

tree.rebalance();

printInfosAboutTree(tree);
