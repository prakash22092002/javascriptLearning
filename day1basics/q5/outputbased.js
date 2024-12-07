

// calculate the factorial using fec

const n = 3

function fact(n){
    if(n==0){
        return 0
    }
    return n + fact(n-1)
}

console.log(fact(n));