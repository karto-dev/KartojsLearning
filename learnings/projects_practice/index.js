const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((element) => {
  console.log(element);
  element.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.id == "blue") {
      body.style.background = event.target.id;
    }
    if (event.target.id == "red") {
      body.style.background = event.target.id;
    }
  });
});

const clock = document.getElementById("clock");
setInterval(function () {
  let dat = new Date();
  clock.innerText = dat.toLocaleString();
}, 1000);
