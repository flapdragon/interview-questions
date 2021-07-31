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

// Tests
console.log(timeTravelTrading([14,3,9,7,10,3]));
console.log(timeTravelTrading([7,1,5,3,6,4]));
console.log(timeTravelTrading([7,6,4,3,1]));
console.log(timeTravelTrading([12,7,3,4,9,1]));

// Performance
// The first one is the fastest by almost 2x even with such a small array.
// I'm assuming it's because of the array sort, which you know is the main difference.

// Notes
// There were no notes.
