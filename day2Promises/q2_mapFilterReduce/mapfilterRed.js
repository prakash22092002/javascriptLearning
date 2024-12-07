// double the even numbers and sum them

arr = [1 , 2 , 3 , 4 , 5]

const temp = arr.map((el,i)=>{
    if(el%2==0){
        return el*2
    }
    else{
        return el
    }
}).reduce((acc,el,i,arr)=>{
    return acc = acc+el
},0)



console.log(arr);
console.log(temp);