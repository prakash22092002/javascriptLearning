// sort by age in desc order

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

data.sort((a,b)=>{
    return b.age - a.age
})

console.log(data);