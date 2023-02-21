function removeDuplicates(sortedArray, newArray = []) {
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) newArray.push(sortedArray[i]);
  }
  return newArray;
}

export default removeDuplicates;
