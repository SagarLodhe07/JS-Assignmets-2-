const person1 = {
  name: "Sagar",
  age: 25,
};
const person2 = {
  name: "Sourav",
  age: 26,
};

function introduce() {
  console.log(`Hello i'm ${this.name},and I'm ${this.age} year old.`);
}
introduce.call(person2);
