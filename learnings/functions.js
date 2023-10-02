function mys(name = "bdf") {
  return `${name} Morning`;
}
console.log(mys("Karto"));

function mys(...numbers) {
  return `${numbers} Morning`;
}
console.log(mys(100, 200, 300));

 const userkar = {
   username: "karto",
   price: 100,
   welcomef: function () {
     console.log(`${this.username} , Welcome`);
     console.log(this);
   },
 };
// userkar.welcomef();
// userkar.username = "san";
userkar.welcomef();

// function full() {
 //   console.log(this);
 //   //global data
 // }
 // full();

const newFun = () => {
   const username = " jshbhb";
   console.log(username);
 };
// newFun();

// implicit arrow function
const aadTwo = (num1, num2) => num1 + num2;
console.log(aadTwo(3, 4));