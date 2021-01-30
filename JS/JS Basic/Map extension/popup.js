// http://openweathermap.org/img/wn/01n.png
// console.log(forecast);
// console.log(current);


navigator.geolocation.getCurrentPosition( 
  (position) =>{
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const _API_KEY_ = "dc8b52016af085a0201eec7b7dc3b719";
    let cityName = "hanoi";
    
    // const current = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=en`;
    const current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_API_KEY_}`;
    console.log(current);
    const date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const getDate = document.getElementById("date");
    getDate.innerHTML =  weekday[date.getDay()];



    async function fetchDataCurrent(current) {
      try {
        const resCurrent = await fetch(current);
        const dataCurrent = await resCurrent.json();
        if(dataCurrent.message == "city not found") {
          alert("Invalid city name!");
          return;
        }
        const description = document.getElementById("description");
        var temp = document.getElementById("temperature");
        const humidity = document.getElementById("humidity");
        const ico = document.getElementById("currentIco");
        const cityName = document.getElementById("cityName");
    
        const tempC = dataCurrent.main.temp - 273.15;
        console.log(tempC);
        cityName.innerHTML = dataCurrent.name;
        ico.src = `http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}.png`;
        humidity.innerHTML = `Humidity: ${dataCurrent.main.humidity}%`;
        temp.innerHTML = tempC + "<sup>o<span>C</span></sup>";
        description.innerHTML = dataCurrent.weather[0].description[0].toUpperCase() + dataCurrent.weather[0].description.slice(1);
    
      } catch (error) {
        console.log(err.message);
      }
    }
    
    
    
    fetchDataCurrent(current);


  },
  () =>{alert("Enable access location!")}
);











