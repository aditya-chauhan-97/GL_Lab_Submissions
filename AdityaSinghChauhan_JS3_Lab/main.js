const api = {
    key:  "73a44f94f2f47980115525ea8e7b9aba",
    base: "https://api.openweathermap.org/data/2.5/weather"
  }
  
  
  const searchBox = document.querySelector(".search-box");
  searchBox.addEventListener('keypress', setQuery);
  
  function setQuery(e) {
    if (e.keyCode === 13) {
      getWeatherInfo(searchBox.value);
    }
  }
  
  function getWeatherInfo(cityName) {
    const url = `${api.base}?q=${cityName}&units=metric&appid=${api.key}`;
    fetch(url)
      .then(weather => {
        return weather.json();
      }).then((response) => {
        if (response.cod === 200) {
          displayResults(response);
        } else {
          alert(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  
  }
  
  function displayResults(weatherInfo) {
    let city = document.querySelector('.city');
    city.innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weatherInfo.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weatherInfo.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weatherInfo.main.temp_min)}°c / ${Math.round(weatherInfo.main.temp_max)}°c`;
  }
  
  function dateBuilder(d) {
  
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    const DATE_FORMAT_OPTIONS = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }
    return d.toLocaleDateString("en-US",DATE_FORMAT_OPTIONS)
  }