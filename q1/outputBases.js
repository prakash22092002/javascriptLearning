
input = ["10" ,  "20" , "30"]

const total = input.reduce((acc , el,i,arr)=>{
    return acc = acc + parseInt(el)
},0)

console.log(total);
