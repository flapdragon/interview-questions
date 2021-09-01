# Reverse a Linked List

Reverse a linked list. Do it in place and in one pass.
 - JavaScript doesn't have this datatype but we can imitate it with a simple object with each next list member being nested in the previous object.
 - The first and outermost object is the head.
 - Each item should have 2 attributes, data and next.

**Basic Examples:**
```
Input: { head: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } }
Output: { head: { data: 4, next: { data: 3, next: { data: 2, next: { data: 1, next: null } } } } }
```
