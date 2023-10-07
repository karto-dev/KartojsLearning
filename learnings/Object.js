const newUser = {};
newUser.id = "123";
newUser.email = "abdx.gmail.com";
newUser.instruct = "Karto";
console.log(newUser);

const regularUser = {
  email: "abs@gmail.com",
  fullame: {
    userfullname: {
      firstname: "Karto",
      lastname: "devops",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname); // to avoid errors and to check Key exists add ? marks for the Keys

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//{} is the Target object otheres are the Source
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

// console.log(newUser.hasOwnProperty("email"));

const { email: em } = newUser;
console.log(em);

const coding = ["js", { java: "newval" }, "php", "python"];
const val = coding.forEach((item) => {
  console.log(item.java);
});

const mynums = [1, 2, 3, 4, 5, 6, 7];
console.log(mynums.filter((num) => num > 4));

