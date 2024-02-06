// 3. Create a Map to store contact information (name, age, email, location) and implement a function to
// retrieve contact details by name.
let personInfo = new Map();
//Add
personInfo.set("Jon", {
  age: 30,
  mobile: 9520853046,
});
personInfo.set("Sam", {
  age: 24,
  mobile: 9520853046,
});
personInfo.set("Sammuls", {
  age: 20,
  mobile: 9520853046,
});

console.log(personInfo);

function getInfo(name){
    return personInfo.get(name)
}
console.log(getInfo('Jon'));