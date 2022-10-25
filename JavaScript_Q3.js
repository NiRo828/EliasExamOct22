// A simple atoi() function

function myAtoi(str) {
  let result = 0;

  // Go through all characters of input string
  // update result
  // Take ASCII character of corresponding digit
  // subtract the code from '0' to get numerical
  // value and multiply res by 10 to shuffle
  // digits left to update running total

  for (let i = 0; i < str.length; ++i)
    result = result * 10 + str[i].charCodeAt(0) - "0".charCodeAt(0);

  // return result.
  return result;
}

// Driver code
let str = "89789";

// Function call
let val = myAtoi(str);
document.write(val);
