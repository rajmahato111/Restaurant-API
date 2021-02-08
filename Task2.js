
//Coding Question 1:

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function recur(digits, i, str) {
  if (i === digits.length) {

    console.log(str);
    return;
  }
  let sum = 0;


  for (let j = i; j <= (i + 1, digits.length - 1); j++) {
    sum = sum * 10 + digits[j];

   
    if (sum > 0 && sum <= 26) {
      recur(digits, j + 1, str + alphabet.charAt(sum - 1));
    }
  }
}

var number = 123124,
  output = [],
  sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
  output.push(+sNumber.charAt(i));
}

var str = "";
recur(output, 0, str);

// Time Complexity of both above-discussed method is exponential 
// and requires additional space for the recursion.


//Coding Question 2:

// Function to find the maximum
// profit with two transactions
// on a given list of stock prices
function maxProfit( price,  n)
{
    var buy1, profit1, buy2, profit2;
 
    // Set initial buying values to
    // Integer.MAX_VALUE as we want to 
    // minimize it
    buy1 = buy2 = Number.MAX_VALUE;
 
    // Set initial selling values to
    // zero as we want to maximize it
    profit1 = profit2 = 0;
 
    for(let i = 0; i < n; i++) 
    {
        // Money lent to buy the stock
        // should be minimum as possible.
        // buy1 tracks the minimum possible
        // stock to buy from 0 to i-1.
        buy1 = Math.min(buy1, price[i]);
 
        // Profit after selling a stock
        // should be maximum as possible.
        // profit1 tracks maximum possible
        // profit we can make from 0 to i-1.
        profit1 = Math.max(profit1, price[i] - buy1);
 
        // Now for buying the 2nd stock,
        // we will integrate profit made
        // from selling the 1st stock
        buy2 = Math.min(buy2, price[i] - profit1);
 
        // Profit after selling a 2 stocks
        // should be maximum as possible.
        // profit2 tracks maximum possible
        // profit we can make from 0 to i-1.
        profit2 = Math.max(profit2, price[i] - buy2);
    }
    return profit2;
}
 

    var price = [ 7, 2, 4, 8, 7];
    var n = price.length;
     
    console.log("Maximum Profit = " + maxProfit(price, n));


    // Time complexity: O(N) 
    // Auxiliary Space: O(1)