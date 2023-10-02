const Syn = Symbol("key1");
const User = {
  name: "Karthik",
  "full Name": "Karto C",
  age: "18",
  location: "NBng",
  days: ["Monday", "TuesDay"],
  [Syn]: "newKet",
};
console.log(User.name);
console.log(User[Syn]);

User.name = "Karto";
//Object.freeze(User);will not allow to add anything to object
console.log(User);

User.greeting = function () {
  console.log(`hello Morning , ${this.days}`);
};
console.log(User.greeting());
