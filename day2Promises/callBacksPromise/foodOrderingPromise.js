// order food
// started preparing
// out to deliver
// enjoy your meal

function orderFood(preparingFood){
    return new Promise((res,rej)=>{
        res("ordered")
        console.log("ordere food sucessfully");
        preparingFood()
    }).then((data)=>{
        console.log(data)
    })
}

function preparingFood(deliveredFood){

    return new Promise((res,rej)=>{
        res("preparing rejected")
        console.log("prepared")
        deliveredFood()
    }).then((data)=>{
        console.log(data)
    })

}

function deliveringFood(enjoyFood){
    return new Promise((res,rej)=>{
        res("delivering food")
        console.log("delivering")
        enjoyFood()
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