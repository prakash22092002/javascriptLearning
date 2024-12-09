
const obj = {
    a : 10,
    x : function (){
        console.log(this.a)
    }
}

obj.x()


const obj1 = {
    name : "sumo",
    b : function (){
        const yall = ()=>{
            console.log(this.name)
        }
        yall()
    }
}

obj1.b()


function x(){
    console.log(this)
}

x()


console.log(this)