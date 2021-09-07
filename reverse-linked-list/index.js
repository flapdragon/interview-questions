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

// Solution 1: Iterative and immutable, in one pass, but not in place. O(n)
// Iteration almost implies that you can't do it in place. You would have to create new keys or something and I don't know if that's truly "in place".
// ll = linkedList
const llIterative = function(linkedList) {
  let nextObject = linkedList.head;
  let currentObject = { data: nextObject.data, next: null };
  let previousObject = {};
  while (nextObject.hasOwnProperty('next') && nextObject.next !== null) {
    previousObject = { ...currentObject };
    nextObject = { ...nextObject.next };
    currentObject = { data: nextObject.data, next: previousObject };
  }
  return { head: { ...currentObject } };
}
// Tests 1: Iterative
console.log(llIterative({ head: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } })); // 4, 3, 2, 1


// Solution 2: Recursion, in one pass, sort of in place. O(n)
// It's difficult to deal with the head inside the recursion function so I moved that logic to the function invocation.
const llRecursion = function(linkedList) {
  if (!linkedList || !linkedList.next) {
    return linkedList;
  }
  let temp = llRecursion(linkedList.next);
  linkedList.next.next = linkedList;
  linkedList.next = null;
  return temp;
}
// Tests 2: Recursion
const list = { head: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } };
const result = llRecursion(list.head);
console.log({ head: { ...result } }); // 4, 3, 2, 1


// Performance
// Recursion seems to be consistently a little faster for this simple test.

// What I learned
// Zounds I thought I knew how recursion works better than I actually did lol 🤣

// Notes
// https://www.interviewbit.com/problems/reverse-linked-list/
// https://en.wikipedia.org/wiki/Linked_list
