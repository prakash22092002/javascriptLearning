// order food
// started preparing
// out to deliver
// enjoy your meal

function orderFood(){
    return new Promise((res,rej)=>{
        res("ordered")
        console.log("ordere food sucessfully")
    }).then((data)=>{
        console.log(data)
    })
}

function preparingFood(){

    return new Promise((res,rej)=>{
        res("preparing rejected")
        console.log("prepared")
        
    }).then((data)=>{
        console.log(data)
    })

}

function deliveringFood(){
    return new Promise((res,rej)=>{
        res("delivering food")
        console.log("delivering")
        
    }).then((data)=>{
        console.log(data)
    })
}

function enjoyFood(){
    return new Promise((res,rej)=>{
        res("delivered")
        console.log("enjoy food")
    }).then((data)=>{
        console.log(data)
    })
}

orderFood()
    .then(()=>preparingFood())
    .then(()=>deliveringFood())
    .then(()=>enjoyFood())
    .catch((err)=>console.log(err))