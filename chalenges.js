//////////
/*
        It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]

        */

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
console.log("======arrayDiff =======");
console.log(arrayDiff([1, 2, 3, 4], [7, 2, 5]));

/////////// another solution
function array_diff(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}

console.log(array_diff([1, 2, 2, 2, 3], [2]) == [1, 3]);

////////////
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */
function duplicateEncode(word) {
  // Convert the word to lowercase for case insensitivity
  word = word.toLowerCase();

  // Initialize an empty string to store the result
  let result = "";

  // Create an object to store character counts
  const charCount = {};

  // Count occurrences of each character
  for (let char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Construct the result string based on character counts
  for (let char of word) {
    if (charCount[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function countVowels(str) {
  let countVowels = ["a", "e", "u", "i", "o"];
  let count = 0;

  for (let char of str) {
    if (countVowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("=========== countVowels =========");
console.log("apple => " + countVowels("apple"));
console.log("world => " + countVowels("world"));
console.log("hello => " + countVowels("hello"));
console.log("blblbl => " + countVowels("blbl"));

//======= Another solution ===========
function count_owels(str) {
  const vowelRegex = /[aeiou]/g;
  const matches = str.match(vowelRegex);
  return matches ? matches.length : 0;
}
//======= Another solution ===========
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function get_count(str) {
  let countVowels = ["a", "e", "u", "i", "o"];
  let count = 0;

  return str.split("").filter((x) => countVowels.includes(x)).length;
  // return (str.match(/[aeiou]/ig)||[]).length;
}
console.log("=========== get_count =========");
console.log("apple => " + get_count("apple"));
console.log("world => " + get_count("world"));
console.log("hello => " + get_count("hello"));
console.log("blblbl => " + get_count("blbl"));
//======= Another solution ===========
function get_count2(str) {
  var vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}

/*
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  If the function is passed a valid PIN string, return true, else return false.
  
  Examples (Input --> Output)
    "1234"   -->  true
    "12345"  -->  false
    "a234"   -->  false
*/

function isVlaidPIN(pin){
    if(pin.length === 4  || pin.length === 6){
        for(let dig of pin){
            if(dig < '0' || dig > '9'){
                return false;
            }
        }
        return true
    }else{
        return false;
    }
}

console.log("=========== isVlaidCode =========");
console.log('1234 =>' + isVlaidPIN('1234'));
console.log('12345=>' + isVlaidPIN('12345'));
console.log('12346=>' + isVlaidPIN('123456'));
console.log('1234a6=>' + isVlaidPIN('1234a6'));
console.log('a234=>' + isVlaidPIN('a234'));

//======= Another solution ===========
function isVlaid_PIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        return pin.split('').every(char => !isNaN(parseInt(char)));
    } else {
        return false;
    }
}

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

*/

function binaryArrayToNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      result = result * 2 + arr[i];
  }
  return result;
}

console.log(binaryArrayToNumber([0, 0, 0, 1]));  // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0]));  // Output: 2
console.log(binaryArrayToNumber([0, 1, 0, 1]));  // Output: 5
console.log(binaryArrayToNumber([1, 0, 0, 1]));  // Output: 9
console.log(binaryArrayToNumber([0, 1, 1, 0]));  // Output: 6
console.log(binaryArrayToNumber([1, 1, 1, 1]));  // Output: 15
console.log(binaryArrayToNumber([1, 0, 1, 1]));  // Output: 11

// ========= another slotion ==========

// const binaryArrayToNumber = arr => {
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function sumMultiples(number) {
  if (number <= 0) {
      return 0;
  }

  let sum = 0;
  for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
  }

  return sum;
}

console.log('======= sumMultiples =======');
console.log('10 => ' + sumMultiples(10));
console.log('11 => ' + sumMultiples(11));
console.log('15 => ' + sumMultiples(15));
console.log('21 => ' + sumMultiples(21));
console.log('-21 => ' + sumMultiples(-21));

// ================= another slotion =========
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/