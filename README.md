# binary*search_trees_wbpck*

## Description

Project inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific Full Stack JavaScript Path : https://www.theodinproject.com/paths/full-stack-javascript

The goal of this project is to build a Balanced Binary Tree.

## Skills to practice

- Creating classes (constructor, parameters, getters, setters and methods)
- Implement a binary tree abstract data structure by creating custom Tree and Node classes and a buildTree function
- Using recursion

## Features

BuildTree function should take an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (without duplicates). The buildTree function should return the level-0 root node.

Node class should have the following methods :

- Data getter and setter
- Left and right children getter and setter

Tree class should have :

- A root attribute which uses the return value of buildTree function

  And the following methods :

- prettyPrint() to visualize the generated binary search tree
- insert(value) and delete(value)
- find(value) which returns the node with the given value
- levelOrderReursive() which accepts another function as a parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function.The function should return an array of values if no function is given
- levelOrderIterative()
- inorder(), preorder(), and postorder() that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.
- height(node) which returns the height of a node. Height is defined as the number of edges in longest path from a given node to a leaf node
- depth(node) which returns the depth of a node. Depth is defined as the number of edges in path from a given node to the tree’s root node
- -isBalanced() which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1
- rebalance() ich rebalances an unbalanced tree

## Test

Simple driver script that does the following:

- Create a binary search tree from an array of random numbers.
- Confirm that the tree is balanced by calling isBalanced
- Print out all elements in level, pre, post, and in order
- Unbalance the tree by adding several numbers > 100
- Confirm that the tree is unbalanced by calling isBalanced
- Balance the tree by calling rebalance
- Confirm that the tree is balanced by calling isBalanced
- Print out all elements in level, pre, post, and in order
