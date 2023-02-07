// Display current time
const currentTime = document.querySelector('#current-time');

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  currentTime.innerHTML = time;
}, 1000);


// Temperature conversion
const temperatureInput = document.querySelector('#temperature');
const unitInput = document.querySelector('#unit');
const convertButton = document.querySelector('#convert');
const resultUnit = document.querySelector('#result-unit');
const resultTemperature = document.querySelector('#result-temperature');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature(e) {
  e.preventDefault();

  let temperature = temperatureInput.value;
  let unit = unitInput.value;

  if (temperature === '') {
    alert('Please enter a temperature');
    return;
  }

  switch (unit) {
    case 'celsius':
      resultUnit.innerHTML = 'Fahrenheit:';
      resultTemperature.innerHTML = `${Math.round((temperature * 9) / 5 + 32)}°F`;
      break;
    case 'fahrenheit':
      resultUnit.innerHTML = 'Celsius:';
      resultTemperature.innerHTML = `${Math.round(((temperature - 32) * 5) / 9)}°C`;
      break;
    case 'kelvin':
      resultUnit.innerHTML = 'Celsius:';
      resultTemperature.innerHTML = `${Math.round(temperature - 273.15)}°C`;
      break;
  }
}
