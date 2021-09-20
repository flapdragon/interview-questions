# Reverse a Linked List

Given the head of a singly linked list, return true if it is a palindrome, otherwise false.
 - JavaScript doesn't have this datatype but we can imitate it with a simple object with each next list member being nested in the previous object.
 - The first and outermost object is the head.
 - Each item should have 2 attributes, data and next.
 - There is no permutation, so we determine palindromocity with the list as is.

**Basic Examples:**
```
Input: { head: { data: "r", next: { data: "a", next: { data: "d", next: { data: "a", next: { data: "r", next: null } } } } } }
Output: true

Input: { head: { data: "q", next: { data: "w", next: { data: "d", next: { data: "v", next: null } } } } }
Output: false
```
