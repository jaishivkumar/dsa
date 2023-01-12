function maxSum(arr,k) {
    let sum = 0;
    let maxSum = 0;
    for(let i =0; i < k; i++ ){
        sum += arr[i] 
    }
    for(let i = k; i < arr.length; i++){
      sum = sum - arr[i - k] + arr[i];
      maxSum = Math.max(sum , maxSum)
    }
    return maxSum;
  }         
  
  console.log(maxSum([2,5,1,8,2,9,1],3))