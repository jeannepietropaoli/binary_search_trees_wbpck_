class Node {
  constructor(data, left, right) {
    this._data = data;
    this._left = left;
    this._right = right;
  }

  get data() {
    return this._data;
  }

  set data(newData) {
    this._data = newData;
  }

  get right() {
    return this._right;
  }

  set right(value) {
    this._right = value;
  }

  get left() {
    return this._left;
  }

  set left(value) {
    this._left = value;
  }
}

export default Node;
