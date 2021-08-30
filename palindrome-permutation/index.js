// Problem
// Given a string consisting of lowercase letters, figure out whether any permutation of this string is a palindrome.
// Rules
// Input must be a string consisting of only lowercase letters. I am treating case is irrelevant and toLowerCasing everything.
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

function hasPalindrome(str) {
  const uniques = String.prototype.concat(...new Set(str));
  // Ok I'm looping
  let odds = [];
  for (let i = 0, len = uniques.length; i < len; i++) {
    const pattern = new RegExp(uniques[i], 'g');
    const count = (str.match(pattern) || []).length;
    // console.log(uniques[i], pattern, count, str.match(/a/g));
    if (count % 2) {
      odds.push(count);
    }
    if (odds.length > 1) {
      return false;
    }
  }
  return true;
}

// What I learned

// Tests
console.log(hasPalindrome("aab"));
console.log(hasPalindrome("abccccba"));
console.log(hasPalindrome("abc"));
console.log(hasPalindrome("abccccbd"));
console.log(hasPalindrome("aabbccdd"));
console.log(hasPalindrome("code"));
console.log(hasPalindrome("tacocat"));

// Notes
// https://www.lintcode.com/problem/916/
// https://stackoverflow.com/a/37932364/5293704
// https://stackoverflow.com/a/5016327/5293704
