let hoursText = document.querySelector(".hours");
let minutesText = document.querySelector(".minutes");
let secondsText = document.querySelector(".seconds");
let ampmText = document.querySelector(".ampm");

setInterval(() => {
  let date = new Date();

  // geting Date
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // checking cases
  let label = hours < 12 ? "AM" : "PM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  // output
  hoursText.innerText = hours;
  minutesText.innerText = minutes;
  secondsText.innerText = seconds;
  ampmText.innerText = label;
});
