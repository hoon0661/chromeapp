const API_KEY = "c5bf70503882c71db48436245d185d2c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const type = document.querySelector("#weather-type");
      const temp = document.querySelector("#temp");
      const city = document.querySelector("#city");
      type.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
