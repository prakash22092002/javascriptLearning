

const arr = ["hellow" , 42 , true]

const value = arr.reduce((acc,el,i,arr)=>{
    return acc += el

},"")

console.log(value);