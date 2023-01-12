
// function fib(n){ // tc => 2^n
//     if(n <= 1) return n
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(6));


// using dp 

// function fib(n){ // tc => n || sc => n 
//     let dp = [0,1];
//     for(let i = 2; i <= n; i++){
//         dp[i] = dp[i-1] + dp[i-2];
//     }
//     return dp[n]
// }
// console.log(fib(6));

function fib(n , dp){ // tc => n  || sc => n
    if(n == 0 || n == 1 ) return n;

    if(dp[n] !== -1) return dp[n];

    dp[n] = fib(n-1, dp) + fib(n-2,dp)

    return dp[n]
}
let n = 6;
let dp = Array(n+1).fill(-1);

// console.log(fib(n,dp));

