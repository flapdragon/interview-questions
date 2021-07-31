
# Best Time to Buy and Sell Stonks

Difficulty: :hatching_chick:

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Each array member is a day but it doesn't matter. Each day could be an hour during a day. You are looking at indexes.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

We're assuming a market order buy, no short sells. Also, you know this isn't how trading works right? You don't go back in time and make orders unless you're a large corporation ayo!


**Example:**
```
prices = [14,3,9,7,10,3]
Maximum profit: 7
Buy on index 1 / day 2 at 3 and sell on index 4 / day 5 at 10, 10 - 3 = 7.
```
