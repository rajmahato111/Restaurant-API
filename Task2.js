
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

function maxProfitWithKTrans(prices, k) {
    if (!prices.length) return 0;
    const profits = [];
    for (let t = 0; t < k + 1; t++) {
      const row = new Array(prices.length).fill(0);
      profits.push(row);
    }
    for (let t = 1; t < k + 1; t++) {
      let maxSoFar = -Infinity;
      for (let d = 1; d < prices.length; d++) {
        maxSoFar = Math.max(maxSoFar, profits[t - 1][d - 1] - prices[d - 1]);
        profits[t][d] = Math.max(profits[t][d - 1], maxSoFar + prices[d]);
      }
    }
    return profits[k][prices.length - 1];
  }
  
  const maxprofit = maxProfitWithKTrans([7, 2, 4, 8, 7], 2);
  console.log(maxprofit);
  
//   time complexity:-  O(nk) time 
//   space complexity:- O(nk) space