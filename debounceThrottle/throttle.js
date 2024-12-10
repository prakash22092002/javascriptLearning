


document.querySelector("button").addEventListener("click",throttleFn)

let isAvaliableToClick = true
let count = 0

function throttleFn(){

    if(isAvaliableToClick){
        isAvaliableToClick = false
        setTimeout(()=>{
            count += 1
            console.log(count)
            isAvaliableToClick = true
        },2000)
    }
}