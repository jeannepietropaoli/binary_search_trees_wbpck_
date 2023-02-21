function mergeSort(array) {
  if (array.length === 1) return array;
  if (array.length === 2)
    return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];
  const firstHalf = array.slice(0, Math.floor(array.length / 2));
  const secondHalf = array.slice(firstHalf.length, array.length);
  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);
  const mergedList = [];
  while (sortedFirstHalf.length > 0 && sortedSecondHalf.length > 0) {
    sortedFirstHalf[0] > sortedSecondHalf[0]
      ? mergedList.push(sortedSecondHalf.splice(0, 1)[0])
      : mergedList.push(sortedFirstHalf.splice(0, 1)[0]);
  }
  mergedList.push(...sortedFirstHalf, ...sortedSecondHalf);
  return mergedList;
}

export default mergeSort;
