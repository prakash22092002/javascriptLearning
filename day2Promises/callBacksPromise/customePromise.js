

const promise = new Promise((res,rej)=>{
    res("this is the success promise data")
})

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})