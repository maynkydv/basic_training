
// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    let l1 = array[0];
    let l2 = array[1];
  
    if (l2 > l1) {
      l2 = l1;
      l1 = array[1];
    }
  
    array.forEach((item) => {
      if (item > l1) {
        l2 = l1;
        l1 = item;
      } else if (item < l1 && item > l2) {
        l2 = item;
      }
    });
    return l2;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    freq = {};
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char >= "a" && char <= "z") {
        if (freq[char] == null) {
          freq[char] = 0;
        }
        freq[char]++;
      }
    }
    // console.log(freq);
    return freq;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    let result = {};
    for (const k in unflatObject) {
      if (typeof unflatObject[k] === "object") {
        const temp = flatten(unflatObject[k]);
        for (const j in temp) {
          result[k + "." + j] = temp[j];
        }
      } else {
        result[k] = unflatObject[k];
      }
    }
    console.log(result);
    return result;
  }

  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    let result = {};
    for (const key in flatObject) {
      let substrings = key.split(".");
      let temp = result;
      for (let i = 0; i < substrings.length - 1; i++) {
        if (!(substrings[i] in temp)) {
          if (isFinite(substrings[i + 1])) {
            temp[substrings[i]] = [];
          } else {
            temp[substrings[i]] = {};
          }
        }
        temp = temp[substrings[i]];
      }
      temp[substrings[substrings.length - 1]] = flatObject[key];
    }
    console.log(result);
    return result;
  }
  
  