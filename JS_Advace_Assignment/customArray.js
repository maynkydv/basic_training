function CustomArray() {
  this.arr = [];
  this.size = 0;
}

CustomArray.prototype.push = function (item) {
  this.arr[this.size] = item;
  this.size++;
  this.arr.length = this.size;
};

CustomArray.prototype.pop = function () {
  if (this.size === 0)
    return undefined;

  const item = this.arr[--this.size];
  delete this.arr[this.size];
  this.arr.length = this.size;
  return item;
};

CustomArray.prototype.shift = function () {
  if (this.size === 0) return undefined;
  const item = this.arr[0];
  for (let i = 1; i < this.size; i++) {
    this.arr[i - 1] = this.arr[i];
  }
  delete this.arr[--this.size];
  this.arr.length = this.size;
  return item;
};

CustomArray.prototype.unshift = function () {
  //if no arguments
  if (arguments.length == 0) {
    for (let i = 1; i < this.size; i++) {
      this.arr[i - 1] = this.arr[i];
    }
    this.size--;
    this.arr.length = this.size;
    return this.arr
  }
  //if arguments are there
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
  for (let i = 0; i < this.size; i++) {
    newArr.push(this.arr[i]);
  }
  this.arr = newArr;
  this.size = newArr.length;
  return newArr;
}



// - splice
CustomArray.prototype.splice = function () {
  let start = arguments[0];
  let end = start + arguments[1] - 1;

  if (end >= this.size) return undefined;

  let newArr = [];
  for (let i = 0; i <= start; i++) {
    newArr.push(this.arr[i]);
  }
  for (let i = 2; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
  for (let i = end + 1; i < this.size; i++) {
    newArr.push(this.arr[i]);
  }

  this.arr = newArr;
  this.size = newArr.length;
  return this.arr;
}

// - indexOf
CustomArray.prototype.indexOf = function (ele) {
  for (let i = 0; i < this.size; i++) {
    if (this.arr[i] === ele) return i;
  }
  return null;
}



// - forEach
CustomArray.prototype.forEach = function (callback) {
  for (let i = 0; i < this.size; i++) {
    callback(this.arr[i], i);
  }
  return;
}

CustomArray.prototype.length = function () {
  return this.size;
};


const arrObj = new CustomArray();
arrObj.push(1);
arrObj.push(12);
arrObj.push(14);
arrObj.push(15);
arrObj.push(176);
arrObj.push(234);
arrObj.push(56);
console.log(arrObj.pop());
console.log(arrObj.shift());
console.log(arrObj.unshift(1,2,4,5));
console.log(arrObj.splice(0, 3, 232, 2345, 24566));


console.log(arrObj.arr);
console.log(arrObj.indexOf(12));



