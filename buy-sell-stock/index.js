// I'm just spitballing here but iterate through the array and find the item that's the highest from each point for the biggest profit.
// This one is pretty easy.
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
// Basically you're iterating, keeping track of the best one and comparing each loop to the best one.
// Very simple math, no Math.max on an array and no new arrays created.
function timeTravelTradingActualMath(prices) {
  let minprice = Number.MAX_SAFE_INTEGER ;
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
console.log(timeTravelTrading([14,3,9,7,10,3]));
console.log(timeTravelTrading([7,1,5,3,6,4]));
console.log(timeTravelTrading([7,6,4,3,1]));
console.log(timeTravelTrading([12,7,3,4,9,1]));

// Performance
// The first one is the fastest by almost 2x over my second even with such a small array.
// I'm assuming it's because of the array sort, which you know is the main difference.
// But the last one with the simple math solution is the fastest one by 50% over my fastest one, timeTravelTrading.
// My fastest one does touch the array twice, once with an actual loop and again by doing a search of the remaining array. Sort of an O(n + n) instead of O(n^2).
// Am I overcomplicating things? No, it is the internet who are wrong.

// Notes
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
