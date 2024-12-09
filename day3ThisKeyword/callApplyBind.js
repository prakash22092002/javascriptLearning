


const obj1 = {
    // name : "prakash",
    x : function(detail){
        const [lastname , age] = [...detail]
        console.log(this.name + lastname +", my age is "+age )
    }
}

const personData ={
    name : "prakash"
}

obj1.x.apply(personData , [["paudel"  , 21]])