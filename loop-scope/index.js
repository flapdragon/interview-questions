// The purpose of this test is to test block scope on JavaScript loops.
// It might sound ridiculous because there was no such thing as block scope in JavaScript until ES6.

// NOTE: I'm using other names for i since I don't want to scope these code blocks or comment them out. The code is meant to be able to run without modifications and still be clear and useful.
// So in this first case please understand a = i and normally this would be for (var i = 0; i < 10; i++) {...

// for loop using var to declare index.
for (var a = 0; a < 10; a++) { // Index a is declared using var inside the loop code context.
  // console.log(a);
} // End of loop code block.
console.log(typeof a !== 'undefined' ? 'a is defined outside the loop and a=' + a : 'a is not defined outside the loop'); // Index a is in the global scope and available outside of loop.

// for loop using let for declaring index.
for (let b = 0; b < 10; b++) { // Index b is declared using let inside the loop context.
  // console.log(b);
} // End of loop code block.
console.log(typeof b !== 'undefined' ?  'b is defined outside the loop and b=' + b : 'b is not defined outside the loop'); // Index b is in not the global scope and is only available inside the loop scope.

// Just to be clear, variable declaration using var is scoped, just not block scoped. It is scoped to the level above the current level, or the parent level.
// In the case of for loops that is the global context. Nest it one level deeper and it will be scoped to that nested level.
// for loop using var inside a function
(function whatIsMyPurposeToPrvoideScopeOhGod() {
  for (var c = 0; c < 10; c++) { // Index c is declared using var inside the loop context, which is inside the function context.
    // console.log(c);
  }
  console.log('c is defined inside the function and c=' + c); // c is in scope, the local function scope, but still up a level from the loop like always with var.
})(); // I don't believe an IIFE causes any weird scoping issues that would add an additional layer here. Should be the same as function x(){}; x();
console.log(typeof c !== 'undefined' ? 'c is defined outside the loop and c=' + c : 'c is not defined outside the loop'); // Index c is in not the global scope and is only available inside the loop scope.

// I thought to myself, what about a for loop with a break?
const arr = [ 0, 'test', 1, 'banana', 7, 10 ];
const arrLen = arr.length;
for (var d = 0; d < arrLen; d++) {
  if (arr[d] === 7) {
    break;
  }
}
console.log(typeof d !== 'undefined' ? 'd is defined outside the loop and d=' + d : 'd is not defined outside the loop'); // Index d is in the global scope and available outside of loop.
// break has no bearing on scope or the index variable. Of course it doesn't, but I proved it to myself.

// do...while Loop using let
let e = 0; // I mean, the index variable is declared in the global scope, outside the loop, because it's a do...while loop so you can expect it to still be available once the loop has completed.
do {
  e++;
  // console.log(e);
} while (e < 5); // End of loop.
console.log(typeof e !== 'undefined' ? 'e is defined outside the loop and e=' + e : 'e is not defined outside the loop'); // Index e is in the global scope and available outside of loop.

// while loop using let
let f = 0;
let x = 0; // Variables declared before loop context.
while (f < 3) {
  f++;
  x += f;
} // End of loop.
console.log(typeof f !== 'undefined' ? 'f is defined outside the loop and f=' + f : 'f is not defined outside the loop'); // Index f is in the global scope and available outside of loop as you would expect.

// while loop with continue. Same as do...while. 'i' was declared outside the loop in the global scope.
let g = 0;
let y = 0; // Variables declared before loop context.
while (g < 5) {
  g++;
  if (g === 3) {
    continue;
  }
  y += g;
  // console.log(y);
}
console.log(typeof g !== 'undefined' ? 'g is defined outside the loop and g=' + g : 'g is not defined outside the loop'); // Index variable g is still available in the global scope. Same as break, continue has no effect on scope or g.

// for...in loop, over an object's properties.
const obj = { a: 1, b: 2, c: function(){}, d: [0,1], e: 5 };
for (var h in obj) { // Index variable declared using var. h in this case will be the property name.
  // console.log(h, obj[h]);
}
console.log(typeof h !== 'undefined' ? 'h is defined outside the loop and h=' + h : 'h is not defined outside the loop'); // Index variable h is still available in the global scope, because var.

// for...in loop, over an object's properties.
const obj2 = { a: 12, d: 'a', g: function(){}, j: { a: 0 }, m: 5*2 };
for (let i in obj2) { // Index variable declared using var. We got to i. Nice.
  // console.log(i, obj2[i]);
}
console.log(typeof i !== 'undefined' ? 'i is defined outside the loop and i=' + i : 'i is not defined outside the loop'); // Index variable i is not available in the global scope, because let.

// for...of loop using var. for...of was introduced in ES6.
const arr2 = [ 202, 3.14, [1,4,3], 'b' ]; // This array is a mess.
for (var j1 of arr2) { // var
   // console.log(j1);
}
console.log(typeof j1 !== 'undefined' ? 'j1 is defined outside the loop and j1=' + j1 : 'j1 is not defined outside the loop'); // Index variable j1 is available outside the loop an in the global scope because of var.
// Even though it's a new type of loop from ES6, the loop itself is not block scoped.

// for...of loop with let
const arr3 = [ 202, 3.14, [1,4,3], 'b' ]; // This array is a mess.
for (let j2 of arr2) { // let
   // console.log(j2);
}
console.log(typeof j2 !== 'undefined' ? 'j2 is defined outside the loop and j2=' + j2 : 'j2 is not defined outside the loop'); // Index variable j2 is not available in the global scope, because let.

// What about variables declared inside the loop? I'm glad you asked Jared.
for (var k = 0; k < 10; k++) { // var
  var k1 = 1000; // var
  const k2 = 'dialogues'; // const
  // console.log(k, k1, k2);
}
console.log(typeof k !== 'undefined' ? 'k is defined outside the loop and k=' + k : 'k is not defined outside the loop');; // k (var) is in global scope.
console.log(typeof k1 !== 'undefined' ? 'k1 is defined outside the loop and k1=' + k1 : 'k1 is not defined outside the loop'); // k1 (var) is in global scope.
console.log(typeof k2 !== 'undefined' ? 'k2 is defined outside the loop and k2=' + k2 : 'k2 is not defined outside the loop'); // Variable k2 declared inside loop code block using const is not available in the global scope.
// Code inside the loop, between the {}s, is the same scope as the loop declaration itself, for (...).

// Conclusion
// In JavaScript, no loop provides block scope and all loops are the same in this regard.
// Loop operations such as break and continue have effect on this fact.
// Only let and const have any impact and those keywords are always scoped to the current block, in this case the loop, and not the parent scope. This is because of the way const and let work and has nothing to do with loops whatsoever.
// var is scoped to the parent context.
// Using var and const/let in the same code feels greasy.

// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
// https://stackoverflow.com/questions/18465211/javascript-loop-variable-scope
// https://www.javascripttutorial.net/es6/javascript-for-of/
