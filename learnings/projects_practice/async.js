const Start = document.querySelector("#start");
const Stop = document.querySelector("#stop");
let randomNum = Math.random();
let intervalId;
Start.addEventListener("click", function () {
  intervalId = setInterval(() => {
    let dat = new Date();
    document.querySelector("#para").innerHTML = dat.toLocaleTimeString();
  }, 1000);
});

Stop.addEventListener("click", function () {
  clearInterval(intervalId);
});
