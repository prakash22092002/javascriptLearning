
const completedAssignment = new Promise((res , rej)=>{
    const isCompleted = true
    isCompleted ? res("yes the assignment was completed") : rej("the assignment wasnt completed")
})

completedAssignment
    .then((data)=>console.log(data))
    .catch((err)=> console.log(err))


    
const promise = new Promise((res,rej)=>{
    res("this is the success promise data")
})

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

