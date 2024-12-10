

let count = 0
let storeIntervals
document.querySelector("button").addEventListener("click",debounceBtnFn)

function debounceBtnFn(){
    clearInterval(storeIntervals)
    storeIntervals = setTimeout(()=>{
        count+=1
        console.log(count)
    },500)
}