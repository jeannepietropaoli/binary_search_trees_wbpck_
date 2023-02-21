function generateRandomInt() {
  return Math.floor(Math.random() * 100);
}

function generateRandomArrayOfInt(length = 7, array = []) {
  for (let i = 1; i <= length; i++) {
    array.push(generateRandomInt());
  }
  return array;
}

export default generateRandomArrayOfInt;
