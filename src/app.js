function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "caa3ff8c1a9cb6c9d488a903d52ad2dc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
