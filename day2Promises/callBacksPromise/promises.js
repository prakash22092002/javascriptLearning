

function orderFood(cb){
    setTimeout(()=>{
        console.log('ordered food...');
        cb()
    },3000)
}

function orderPlaced(cb){
    setTimeout(()=>{
        console.log("food order placed...");
        cb()
    },1000)
}

function preparingFood(cb){
    setTimeout(()=>{
        console.log("preparing food...");
        cb()
    },2000)
}

function outTodelivery(cb){
    setTimeout(()=>{
        console.log("food prepared and out to delivery...");
        cb()
    },5000)
}

function deliveredFood(){
    setTimeout(()=>{
        console.log("enjoy your food...."); 
    },4000)
}

// orderFood( ()=>{
//     orderPlaced( ()=>{
//         preparingFood( ()=>{
//             outTodelivery( ()=>{
//                 deliveredFood()
//             } )
//         } )
//     } )
// } )


// it just makes an call back hell so to over come this we used promises





// orderFood()
// orderPlaced()
// preparingFood()
// outTodelivery()
// deliveredFood(