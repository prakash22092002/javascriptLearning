

function factory(firstName,lastName,age){
    return {
        firstName : firstName,
        lastName : lastName,
        age : age,
        greet : function(){
            return `welcome ${this.firstName} ${this.lastName} to the website`
        }
    }
}

let s1 = factory("prakash" , "paudel" , 21)
console.log(s1.greet());

// factory car obj

function car(make,model,year){
    return {
        make : make,
        model : model,
        year : year,

    }
}

console.log(car("aaudi","a4",2018));

// creating the private properties using a factory function 

function createCounter(){
    let count = 0
    return {
        increment : function(){
            count+=1
            console.log(count)
        },
        decrement : function(){
            count-=1
            console.log(count)
        }

    }
}
const fun1 = createCounter()

fun1.increment()
fun1.increment()
fun1.increment()
fun1.decrement()
