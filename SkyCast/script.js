const apiKey = '78f1fea9258af444b20ec946a88d1296';
const weatherDisplay = document.getElementById('weatherDisplay');
const cityNameElem = document.getElementById('cityName');
const weatherDesc = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const cityInput = document.getElementById('cityInput');
const recentList = document.getElementById('recentList');
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('skycast-theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('skycast-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeatherByCity(city);
});

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      fetchWeatherByCoords(latitude, longitude);
    }, () => alert('Location access denied'));
  } else {
    alert('Geolocation not supported');
  }
});

function fetchWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetchWeather(url, city);
}

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
}

function fetchWeather(url, manualCity = null) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) throw new Error(data.message);
      updateWeather(data);
      if (manualCity) updateSearchHistory(manualCity);
    })
    .catch(err => alert('Error: ' + err.message));
}

function updateWeather(data) {
  weatherDisplay.classList.remove('hidden');
  cityNameElem.textContent = data.name;
  weatherDesc.textContent = data.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} m/s`;
  setWeatherBackground(data.weather[0].description);
}

function setWeatherBackground(condition) {
  const conditionLower = condition.toLowerCase();

  let bg = '';

  if (conditionLower.includes('clear')) bg = 'clear.jpg';
  else if (conditionLower.includes('cloud')) bg = 'cloudy.jpg';
  else if (conditionLower.includes('rain')) bg = 'rainy.jpg';
  else if (conditionLower.includes('thunderstorm')) bg = 'storm.jpg';
  else if (conditionLower.includes('snow')) bg = 'snow.jpg';
  else bg = 'sunny.jpg';

  document.body.style.backgroundImage = `url('./assets/images/${bg}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  console.log('Condition received:', conditionLower);
}

function updateSearchHistory(city) {
  let history = JSON.parse(localStorage.getItem('skycast-history')) || [];
  history.unshift(city);
  history = [...new Set(history)].slice(0, 5);
  localStorage.setItem('skycast-history', JSON.stringify(history));
  renderSearchHistory();
}

function renderSearchHistory() {
  let history = JSON.parse(localStorage.getItem('skycast-history')) || [];
  recentList.innerHTML = '';
  history.forEach(city => {
    const li = document.createElement('li');
    li.textContent = city;
    li.className = 'pointer';
    li.onclick = () => {
      cityInput.value = city;
      fetchWeatherByCity(city);
    };
    recentList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSearchHistory();
});
