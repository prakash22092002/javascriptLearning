
// implement async function
// takes an array of input
// multiply each number by 3
// filter out and return only the odd numbers
// use find sun() to sum the number of filtered odd numbers

function inputArray(arr){
   return new Promise((res , rej)=>{
    arr.length>0 ?(
        arr = [...arr , arr[arr.length -1]+1],        
        res(arr)
    ) : rej("no arr value present...")
   })
}

function filtering(arrValue){
    return new Promise((res,rej)=>{
        const filteredData = arrValue.filter((el,i)=>{
            return el%2!=0
        })
        filteredData.length>0 ? res(filteredData) : rej("cant filter data ...the data is empty")
    })
}

function reducing(filterOdd){
    return new Promise((res,rej)=>{
        const reducedData = filterOdd.reduce((acc,el)=>{
            return acc = acc+el
        },0)
        res(reducedData)
    })
}

async function operations (){
    var arr = []
    try{
        const arrValue = await inputArray(arr=[1 , 2 , 3 , 4 , 5 , 6])
        console.log(arrValue)

        const filterOdd = await filtering(arrValue)
        console.log(filterOdd)

        const reduceOdd = await reducing(filterOdd)
        console.log(reduceOdd)
    }
    catch(err){
        console.log(err);
    }
}

operations()