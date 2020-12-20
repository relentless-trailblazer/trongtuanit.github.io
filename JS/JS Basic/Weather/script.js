// http://openweathermap.org/img/wn/01n.png
// console.log(forecast);
// console.log(current);
const _API_KEY_ = "dc8b52016af085a0201eec7b7dc3b719";
let cityName = "hanoi";
var forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=en`;
var current = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=en`;
const date = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(forecast);
const getDate = document.getElementById("date");
getDate.innerHTML =  weekday[date.getDay()];


//<div class="ele"><div id="hour">1h</div><img src="" alt="" id="description"><div class="tempByHour">14</div></div><div class="ele"><div id="hour">1h</div><img src="" alt="" id="description"><div class="tempByHour">12</div></div><div class="ele"><div id="hour">1h</div><img src="" alt="" id="description"><div class="tempByHour">12</div></div><div class="ele"><div id="hour">1h</div><img src="" alt="" id="description"><div class="tempByHour">16</div></div><div class="ele"><div id="hour">1h</div><img src="" alt="" id="description"><div class="tempByHour">20</div></div>

async function fetchDataForecast(forecast) {
  try {
    const res = await fetch(forecast);
    const data = await res.json();
    console.log(data);
    const main = document.getElementById("main")
    const str = [];
    for(var i = 0; i < 5; ++i) {
      var linkIco =`http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
      var time = new Date(data.list[i].dt * 1000);
      var temp = data.list[i].main.temp;
      var convert = parseFloat(temp).toFixed(0);
      str[i] = `<div class="ele"><div id="hour">${time.getHours()}h</div><img src="${linkIco}" alt="" id="description"><div class="tempByHour">${convert} <sup>o</sup> </div></div>`
    }
    console.log(str.join(''));
    main.innerHTML = str.join('');
  } catch (error) {
    console.log(err.message);
    alert("Invalid city name!");
  }
}



async function fetchDataCurrent(current) {
  try {
    const resCurrent = await fetch(current);
    const dataCurrent = await resCurrent.json();
    console.log(dataCurrent);
    if(dataCurrent.message == "city not found") {
      alert("Invalid city name!");
      return;
    }


    const description = document.getElementById("description");
    const temp = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const ico = document.getElementById("currentIco");
    const cityName = document.getElementById("cityName");



    cityName.innerHTML = dataCurrent.name;
    ico.src = `http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}.png`;
    humidity.innerHTML = `Humidity: ${dataCurrent.main.humidity}%`;
    temp.innerHTML = dataCurrent.main.temp + "<sup>o<span>C</span></sup>";
    description.innerHTML = dataCurrent.weather[0].description[0].toUpperCase() + dataCurrent.weather[0].description.slice(1);

  } catch (error) {
    console.log(err.message);
    alert("Invalid city name!");
  }
}


fetchDataForecast(forecast);
fetchDataCurrent(current);



function searchForecast() {
  cityName = document.getElementById("typeCityName").value.toLowerCase();
  var forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`;
  var current = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`;
  fetchDataForecast(forecast);
  fetchDataCurrent(current);

}



