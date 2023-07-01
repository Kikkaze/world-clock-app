function miamiDate() {
  let miamiElement = document.querySelector("#miami");
  let miamiDateElement = miamiElement.querySelector(".date");
  miamiDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMM D, YYYY");
  let miamiTimeElement = miamiElement.querySelector(".time");
  miamiTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss");
}
miamiDate();
setInterval(miamiDate, 1000);

function romeDate() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  romeDateElement.innerHTML = moment().tz("Europe/Rome").format("MMM D, YYYY");
  let romeTimeElement = romeElement.querySelector(".time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("HH:mm:ss");
}
romeDate();
setInterval(romeDate, 1000);

function dubaiTime() {
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  dubaiDateElement.innerHTML = moment().tz("Asia/Dubai").format("MMM D, YYYY");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  dubaiTimeElement.innerHTML = moment().tz("Asia/Dubai").format("HH:mm:ss");
}
dubaiTime();
setInterval(dubaiTime, 1000);
