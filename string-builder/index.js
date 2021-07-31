// Just iterate right?
function twoStrings(a, b) {
  let str = '';
  for (let i = 0, len = a.length; i < len; i++) {
    // str += a.substring(i, i+1) + b.substring(2*i, 2*i+2);
    // str += a[i] + b[2*i] + b[2*i+1];
    // str += a.slice(i, i+1) + b.slice(2*i, 2*i+2); // Second fastest
    str = str.concat(a.slice(i, i+1) + b.slice(2*i, 2*i+2)); // Fastest
    // str += a.charAt(i) + b.charAt(2*i) + b.charAt(2*i+1);
  }
  return str;
}

// Create an array first then convert back to string
// Slow as shit at large strings
function twoStringsRogueArray(a, b) {
  let str = []; // Not a string haha
  for (let i = 0, len = a.length; i < len; i++) {
    str.push(a.slice(i, i+1) + b.slice(2*i, 2*i+2)); // So slow but the fastest array method by orders of magnitude
    // str = [ ...str, a.slice(i, i+1), b.slice(2*i, 2*i+2)]; // Dogshit slow
    // str = str.concat(a.slice(i, i+1), b.slice(2*i, 2*i+2)); // Surprisingly the slowest by far. What happened, Array.prototype.concat(?)
  }
  return str.join(''); // Haha it was a string the whole time!
}

// The only other things I could think of was Regex, which is the machine code of the universe.
function twoStringsOneRegex(a, b) { // Actually 2 regeces
  let str = [];
  const matchesA = a.match(/.{1}/g);
  const matchesB = b.match(/.{2}/g);
  for (let i = 0, len = matchesA.length; i < len; i++) {
    str.push(matchesA[i], matchesB[i]);
  }
  return str.join('');
}

console.log(twoStrings('abcd', '12345678'));
console.log(twoStrings('madaxnxfxebnligiwfthdxrivmroagsvrucaxrosgzijmakkoommdxgcukevyeeknjycmmknipqyzocpfoabpmtdewnefipvzlzjmadaxnxfxebnligiwfthdxrivmroagsvrucaxrosgzijmakkoommdxgcukevyeeknjycmmknipqyzocpfoabpmtdewnefipvzlzj', '7104829097952869936272025242512351771475878009681563642484087112111596530070686212749403906985472389413408411115702612191600818970620323974727137004579426217689020504591711603894165472531538633436953771048290979528699362720252425123517714758780096815636424840871121115965300706862127494039069854723894134084111157026121916008189706203239747271370045794262176890205045917116038941654725315386334369537'));

// Performance for getting string values
// For shorter strings it didn't seem to matter which method I used.
// For longer strings like above (400 and 800 characters) String.prototype.slice() was better. It seemed to improve over the others a little bit as the string length increased.

// Performance for creating the string
// With smaller strings there was no consistent fastest method.
// With the longer strings String.prototype.concat() had a distinct advantage over the addition assignment operator (+=) and it also seemed to increase over the other.
// Something I didn't expect was that slice performed better with the += method than any other method with concat. Go slice. Go slice. It's your birthday.

// Performance for creating the string as an array first
// Because this comes up sometimes, and sometimes it is very useful, I also tried the array method.
// That is, creating it as an array first then converting it back to a string.
// This is slower for smaller strings but barely noticeable.
// For longer strings the performance degrades rapidly and fairly consistently with string length. Push was easily the fastest by a lot.

// Regex performance
// The only other approach I could think of was Regex and yeah since it returns an array you guessed it, it sucks ass.
// But if you want to look cool and make sure no one else at your company can ever touch your code then by all means use this method.

// Notes
// https://www.random.org/strings/?num=10&len=20&digits=on&unique=on&format=html&rnd=new
// Seriously have to look up the syntax for every single method except the array one
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// Not including String.prototype.substr() because it's legacy and not recommended
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
//
