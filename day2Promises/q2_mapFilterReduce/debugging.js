

const nums = [10, 20, 30];
let result = nums.map((n) => n / 0)
result.filter((n) => n > 0); 
console.log(result.reduce((acc , el , i , arr)=> {
    return acc+=el
},0));
