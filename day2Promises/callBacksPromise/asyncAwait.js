
function bookCab(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("cab booked")
            res("cab is on the way...")
        }, 2000);
    })
}

function arrivingCab(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("cab has reached your current location");
            res("requesting for OTP")
        }, 3000);
    })
}

function requestOTP(){
    const otp = "12345"
    const customerOtp = "12345"
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            customerOtp==otp ? (
                console.log("otp matched successfully"),
                res("ride started , happy journey")
            ) : (
                rej("otp missmatched ! try again later")
            )
        },2000)
    })
}

async function cabBookingProcess() {
    try{
        await bookCab()
        await arrivingCab()
        await requestOTP()
    }catch(err){
        console.log(err)
    }
}

cabBookingProcess()