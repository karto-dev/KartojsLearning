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
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/");
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    console.log(String(xhr.responseText));
    document.getElementById("para1").innerText = String(xhr.responseText);
  }
};

xhr.send();
