function displayInfo(name, role) {
  console.log(`Name is ${name} And Role is ${role}`);
}

// By Call
displayInfo.call(null,"Sagar", "Software Engineer");

//By Apply 

displayInfo.apply(null,['Harsh','Manager'])

function greet(){
  console.log(`Hi ${this.name}`);
}
const person = {
  name:'Sams'
}
const boundGreet = greet.bind(person)
boundGreet()