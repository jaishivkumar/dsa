function sort01(arr){
    let i = 0;
    let j = arr.length-1;

    while(i <= j){
        if(arr[j] !== 1){
            [arr[i] , arr[j]] = [arr[j] ,arr[i]];
            i++;
            j--;
        }else{
            j--;  
        }
    }
    return arr;
}

// console.log(sort01([1,0,1,0,1,0,1,0,0,0,1]))

function peirOfArr(arr){
    let map = {};
    for(let value of arr){
        map[value] = (map[value] || 0 )+1;
    }

    for(let key in map){
        if(map[key] % 2 !== 0) console.log(key);
    }
}
// peirOfArr([1,5,2,8,4,8,1,7,4,5])


function cosecutiveMaxSumOf3(arr){
    let maxSum = -Infinity;
    let sum = 0;
    for(let i = 0; i < 3; i++){
        sum += arr[i]
    }

    for(let i = 3; i < arr.length; i++){
        // console.log(sum)
        sum = sum - arr[i-3] + arr[i];
        maxSum = Math.max(sum ,maxSum); 
    }
    console.log(maxSum)
}

cosecutiveMaxSumOf3([1,5,1,8,2,100,4,40,6,5]) // 144