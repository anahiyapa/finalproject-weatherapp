function displayTemperature(response) {
  let cityElement = document.querySelector("#cityinput");
  let temperatureElement = document.querySelector("#temperature-city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "caa3ff8c1a9cb6c9d488a903d52ad2dc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
