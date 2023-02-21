import Node from './Node';
import removeDuplicates from './removeDuplicates';
import mergeSort from './mergeSort';

function buildTree(uniqueSortedArray) {
  // array must be sorted and duplicates must be removed
  if (uniqueSortedArray.length === 0) return null;
  const start = 0;
  const end = uniqueSortedArray.length;
  const mid = Math.floor((end - start) / 2);
  const leftSubarray = uniqueSortedArray.slice(0, mid);
  const rightSubarray = uniqueSortedArray.slice(mid + 1, end);
  const node = new Node(
    uniqueSortedArray[mid],
    buildTree(leftSubarray),
    buildTree(rightSubarray)
  );
  return node;
}

export default buildTree;
