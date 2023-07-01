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

function showSelectedCityTime(event) {
  let otherCitiesElement = document.querySelector("#other-cities");
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("Los_Angeles", "Seattle").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  otherCitiesElement.innerHTML = `
  <div class="row">
   <div class="col">   
    <div class="selected-city">
        <h2>${cityName}</h2>
        <p class="date">${cityTime.format("MMM D, YYYY")}</p>
        <p class="time">${cityTime.format("HH:mm:ss")}</p>
    </div>
   </div>
  </div>`;
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", showSelectedCityTime);
