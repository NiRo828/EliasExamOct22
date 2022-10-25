function findSingle(arr, arr_size) {
  // Do XOR of all elements and return
  let result = arr[0];
  for (let i = 1; i < arr_size; i++) result = result ^ arr[i];

  return result;
}

// test
let arr = [2, 3, 5, 4, 5, 3, 4];
let arr_length = arr.length;
document.write("Element occurring once is " + findSingle(arr, arr_length));
