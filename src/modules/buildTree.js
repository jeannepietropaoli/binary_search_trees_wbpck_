import Node from './Node';

function buildTree(array) {
  // array must be sorted and duplicates must be removed
  if (array.length === 0) return null;
  const start = 0;
  const end = array.length;
  const mid = Math.floor((end - start) / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid + 1, end);
  const node = new Node(array[mid], buildTree(left), buildTree(right));
  return node;
}

export default buildTree;
