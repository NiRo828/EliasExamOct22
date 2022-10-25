function isPalindrome(str) {
  // Replacing the white-space
  let s1 = str.split(" ").join("");
  // Converting string to lower-case
  s1 = s1.toLowerCase();
  // Reversing the string
  let s2 = s1.split("").reverse().join("");
  // Comparing the result
  return true ? s1 == s2 : false;
}

//test sentencePallindrome()
let str = "Kayak SOS Kayak";
if (isPalindrome(str)) console.log("The Sentence is palindrome");
else console.log("I'm Sorry the Sentence is not palindrome");
