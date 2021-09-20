// Problem.
// Given the head of a singly linked list, return true if it is a palindrome, otherwise false.
// Rules
// JavaScript doesn't have this datatype but we can imitate it with a simple object with each next list member being nested in the previous object.
// The first and outermost object is the head.
// Each item should have 2 attributes, data and next.
// There is no permutation, so we determine palindromocity with the list as is..

// Use cases / Theorems
// First thought, just embracing the brute force and kind of wanting to see where it goes, was to use space and create a string to store the chars and compare to check for palindrome.

// Solution 1: Brute Force - Iteration plus space. Time = O(n), space = O(n).
// The comparison seems expensive.
const llpBruteForce = (list) => {
  let nextObject = list.head;
  let chars = "";
  while (nextObject.hasOwnProperty('next')) {
    const nextIndex = chars.indexOf(nextObject.data);
    if (nextIndex !== -1) {
      chars = chars.slice(0, nextIndex) + chars.slice(nextIndex + 1);
    }
    else {
      chars += nextObject.data;
    }
    nextObject = { ...nextObject.next };
  }
  return chars.length === 1 || chars.length === 1;
};
// Tests 1: Iteration
console.log(llpBruteForce({ head: { data: "r", next: { data: "a", next: { data: "d", next: { data: "a", next: { data: "r", next: null } } } } } })); // true
console.log(llpBruteForce({ head: { data: "q", next: { data: "w", next: { data: "d", next: { data: "v", next: null } } } } })); // true




// Performance


// What I learned


// Notes
