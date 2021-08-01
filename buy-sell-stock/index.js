// EVen though I thought of a better solution first, I still want to include the brute force method here.
// 1. Because brute force has been my reliable companion and 2. I want to be able to compare it for performance reasons as a baseline.
// This is definitely O(n²) or O(n^2) if you're old as shit like me. Can you read that little superscript guy?
// 🥈 Second place for the underdog
function bruteForce(stonks) {
  let biggestProfit = 0;
  for (let i = 0, len = stonks.length-2; i < len; i++) { // length - 2 because there is no reason to buy on the last day
    for (let j = i+1, len = stonks.length-1; j < len; j++) {
      biggestProfit = stonks[j] - stonks[i] > biggestProfit ? stonks[j] - stonks[i] : biggestProfit;
    }
  }
  return biggestProfit;
}

// I'm just spitballing here but iterate through the array and find the item that's the highest from each point for the biggest profit.
// My first thought was probably O(n + n), slightly better than O(n^2).
// This problem is pretty easy.
// 🥉 Third place for the overcomplicated solution.
function timeTravelTrading(stonks) {
  let biggestProfit = 0;
  for (let i = 0, len = stonks.length-2; i < len; i++) { // length - 2 because there is no reason to buy on the last day
    const subProfit = Math.max(...stonks.slice(i+1)) - stonks[i];
    biggestProfit = subProfit > biggestProfit ? subProfit : biggestProfit;
  }
  return biggestProfit;
}

// The only other way I can think of is to sort and then grab the highest one that way.
// But I'm still iterating and then finding the highest one based on each index.
// I would like to think this O(n + n).
function timeTravelTradingSort(stonks) {
  let biggestProfit = 0;
  for (let i = 0, len = stonks.length-1; i < len; i++) {
    let remainingDays = stonks.slice(i+1);
    remainingDays.sort((a, b) => a-b);
    const subProfit = remainingDays.pop() - stonks[i];
    biggestProfit = subProfit > biggestProfit ? subProfit : biggestProfit;
  }
  return biggestProfit;
}

// This is some math I hadn't thought of. Found on the leetcode better solution.
// Basically you're iterating only once, keeping track of the best one and comparing each loop to the best one. O(n).
// Very simple math, no Math.max on an array and no new arrays created.
// 🥇 1st place for O(n)
function timeTravelTradingOnlyMath(prices) {
  // From the Java based solution. Number.MAX_SAFE_INTEGER is pretty expensive in JavaScript so I'd recommened a cheaper method.
  // let minprice = Number.MAX_SAFE_INTEGER;
  // For a real world solution you would need to make sure this number is higher than anything in the array without touching the array to find the max because again that is expensive.
  // Since in this case I am both the stock market and the programmer I'll just say 1000000 because I don't know of any stocks that are worth $1000000.
  let minprice = 1000000;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    }
    else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
}

// Tests
console.log(bruteForce([14,3,9,7,10,3]));
console.log(timeTravelTrading([14,3,9,7,10,3]));
console.log(timeTravelTrading([7,1,5,3,6,4]));
console.log(timeTravelTrading([7,6,4,3,1]));
console.log(timeTravelTrading([12,7,3,4,9,1]));
console.log(timeTravelTradingOnlyMath([14,3,9,7,10,3]));

// Performance
// MY first one (timeTravelTrading, not bruteForce) is faster by almost 2x over my second (timeTravelTradingSort) even with such a small array.
// I'm assuming it's because of the array sort, which, you know, is the only difference. Really just comparing Math.max to array.sort + pop.
// But the last one with the simple math solution is the fastest one by 50% over my fastest one, timeTravelTrading.
// My fastest one does touch the array twice, once with an actual loop and again by doing a search of the remaining array. Sort of an O(n + n) instead of O(n^2).
// I was surprised to find that good ol' brute force is actually was the fastest solution for small arrays, if Number.MAX_SAFE_INTEGER is used by the best solution.
// After replacing Number.MAX_SAFE_INTEGER, which I have never seen in the wild, and is just stupid to use in JavaScript, again I adapted this code from a Java solution
// where I'm sure it works fine, after replacing it with a more manageable hard-coded number, timeTravelTradingOnlyMath works the best by far.
// So my solution was the slowest, even though I avoided O(n²) directly with loops I was even slower by doing more array handling.
// Am I overcomplicating things? No, it is the internet who are wrong.

// Notes
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
