// Problem
// Reverse a linked list. Do it in place and in one pass.
// Rules
// JavaScript doesn't have this datatype but we can imitate it with a simple object with each next list member being nested in the previous object.
// The first and outermost object is the head.
// Each item should have 2 attributes, data and next.

// Use cases / Theorems
// I want to do one where I don't update the object in place. I know that the real test here is to do it in place but in JavaScript mutating
// objects is usually a lot slower than creating new ones based on the original. I want to compare the performance of mutable vs immutable at the end.
// Also, just creating a new one as you go is significantly easier.

// Solution 0: Immutable Force
// This is for comparison.
const llMostlyImmutable = function(linkedList) {
  let currentObject = linkedList.head;
  let previousObject = { data: currentObject.data, next: null };
  let tempObject = {};
  while (currentObject.hasOwnProperty('next') && currentObject.next !== null) {
    tempObject = { ...previousObject };
    currentObject = { ...currentObject.next };
    previousObject = { data: currentObject.data, next: tempObject };
  }
  return { head: { ...previousObject } };
}
// Tests 0: Immutable
console.log(llMostlyImmutable({ head: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } })); // 4, 3, 2, 1


// Solution 1: Brute Force.
// ll = linkedList
const llBruteForce = function(linkedList) {
  return linkedList;
}
// Tests 1: Brute Force
// console.log(llBruteForce({ head: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } })); // 4, 3, 2, 1

// What I learned

// Notes
// https://www.interviewbit.com/problems/reverse-linked-list/
// https://en.wikipedia.org/wiki/Linked_list
