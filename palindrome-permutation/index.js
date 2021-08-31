// Problem
// Given a string consisting of lowercase letters, figure out whether any permutation of this string is a palindrome.
// Rules
// Input must be a string consisting of only lowercase letters. I am treating case as irrelevant and toLowerCasing everything. Also there are no spaces.
// Output should be true/false, but it is cool to see the palindrome(s).
// Note: neither the string nor the palindrome have to be a word. At first I was thinking of normal palindromes but for this exercise it can be any random string of letters.

// Use cases / Theorems
// I'm still doing the thing where I solve it on my own first without looking it up because I don't want to be a little punk. I promise to try not to loop or sort.
// 1
// If the length of the string is an odd number, for example 5, and there is an even number of each individual letter for length - 1 characters, in this case 2, and 1 unique character, the string is a palindrome.
// Example: aabcbbb. There are 2 As, 4 Bs, and 1 C, therefore at least 1 permutation is a palindrome: abbcbba, babcbab, etc.
// If the length of the string is an even number, and there is an even number of all individual letters, then the string is a palindrome.
// Example: aabbcccc, 2 As, 2Bs, 4 Cs, it's a spicy palindrome: abccccba, cbaccabc, etc.
// You could frame it more succinctly as: the string has no more than 1 letter that occurs an odd number of times.

// Random theories have occured to me, such as getting the numerical value of the letters and summing them, and the ratio of the length of the string to the length of the unique characters. As tempting as those
// are the only thing that seems to define a palindrome string is that it contains 0 or 1 characters that occur an odd number of times. That's it.

// Solutions
// Assuming there can be no more than one letter that occurs an odd number of times, what is the fastest way to find the count of each letter and find all the oddballs?
// I am getting the list of unique letters, then looping over that (damnit) and counting using regex and adding the odd ones to an array.
// If the array reaches length 2 then return falsey.

// 1. Original no look solution
function hasPalindrome(str) {
  const uniques = String.prototype.concat(...new Set(str));
  let odds = [];
  for (let i = 0, len = uniques.length; i < len; i++) {
    const pattern = new RegExp(uniques[i], 'g');
    const count = (str.match(pattern) || []).length;
    if (count % 2) {
      odds.push(count);
    }
    if (odds.length > 1) {
      return false;
    }
  }
  return true;
}

// 1. Tests
console.log(hasPalindrome("aab"));
console.log(hasPalindrome("abccccba"));
console.log(hasPalindrome("abc"));
console.log(hasPalindrome("abccccbd"));
console.log(hasPalindrome("aabbccdd"));
console.log(hasPalindrome("code"));
console.log(hasPalindrome("tacocat"));

// 2. Looked up solution
// Iterate over original string one character at a time
// Create a new string/array to store characters. If current character in loop is in new set, then remove it from new set. Otherwise add it.
// At the end check for the length of the set. It should be 0 or 1, <= 1.
function hasPalindrome2(str) {
  let charSet = [];
  for (let i = 0, len = str.length; i < len; i++) {
    const letter = str[i];
    const letterIndex = charSet.indexOf(letter);
    if (letterIndex > -1) {
      charSet.splice(letterIndex, 1);
    }
    else {
      charSet.push(str[i]);
    }
  }
  return charSet.length <= 1;
}

// 2. Tests
console.log("------------------------------------");
console.log(hasPalindrome2("aab"));
console.log(hasPalindrome2("abccccba"));
console.log(hasPalindrome2("abc"));
console.log(hasPalindrome2("abccccbd"));
console.log(hasPalindrome2("aabbccdd"));
console.log(hasPalindrome2("code"));
console.log(hasPalindrome2("tacocat"));

// What I learned
// Even though I didn't loop over the original set I still created a unique set from it, which is just as expensive, and the looped over the new set and then counted instances of memebers of the new set
// in the old set, basically looping and even more expensive. I need to remember how some of these methods work and that many of them also loop to do their job.
// Iterating once like solution 2 and then doing actions on the new smaller set is much cheaper.
// I haven't done one of these in 3 weeks so I'm not going to be hard on myself. Literally forgot this was my issue every time before though lol. I remember now.

// Notes
// https://www.lintcode.com/problem/916/
// Solution 1
// https://stackoverflow.com/a/37932364/5293704
// https://stackoverflow.com/a/5016327/5293704
// Solution 2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Did you know that you can click on the rocket progress bar on https://jsben.ch/ and it will change it to where you clicked? It was slow and I got bored.
