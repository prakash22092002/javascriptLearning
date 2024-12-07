
const num = [1,2,3,4,5]

const freq = num.reduce((acc,el)=>{
    if (el%2==0){
        acc['even'] = (acc['even'] || 0) + 1
    }
    else{
        acc['odd'] = (acc['odd'] || 0) + 1
    }
    return acc
},{})

console.log(freq);