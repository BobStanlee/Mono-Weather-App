import getForecastWeatherData from "./forecastweather";

async function updateHomeContent() {
    let resolvedDatas = getForecastWeatherData();

    resolvedDatas.then((resolvedData) => {
        console.log(resolvedData);

        let date = formatLastUpdated(resolvedData.current.last_updated);

        let homeContent = `
        <div class="home-container">
        <div class="header-info"><!--Header info-->
          <div class="loc-item">
            <span class="location">${resolvedData.location.name}</span>
            <p>Current Location</p>
          </div>
  
          <div class="set-item">
            <a href="#" id="location-icon">
              <img src="../src/img/Locations.png" alt="Location Icon">
            </a>
  
            <a href="#" id="settings-icon">
              <img src="../src/img/settings.png" alt="Settings Icon">
            </a>
          </div>
        </div>
        <div class="info-container">
          <p class="sync">in sync</p>
    
          <div class="date-N-temperature">
            <p class="date">${date}</p>
    
            <h1 class="temp">${Math.round(resolvedData.current.temp_c)}<span>°C</span></h1>
    
            <div class="temps">
              <span class="low-temp">
                <img src="../src/img/Down Arrow.png" alt="Down Arrow">
                ${Math.round(resolvedData.current.temp_c) - 6}°C
              </span>
    
              <span class="high-temp">
                <img src="../src/img/Up Arrow.png" alt="Down Arrow">
                ${Math.round(resolvedData.current.temp_c) + 4}°C
              </span>
            </div>
          </div>
    
          <div class="weather-image-item">
            <img src=${resolvedData.current.condition.icon} alt="weather-image" class="weather-image">
            <span class="weather-des">${resolvedData.current.condition.text}</span>
          </div>
    
          <div class="sunrise-sunset-container">
            <div class="sunrise-item">
              <img src="../src/img/sunrise.png" alt="Sunrise icon">
              <span class="time">${resolvedData.forecast.forecastday[0].astro.sunrise}</span>
            </div>
    
            <div class="sunset-item">
              <img src="../src/img/sunset.png" alt="Sunset icon">
              <span class="time">${resolvedData.forecast.forecastday[0].astro.sunset}</span>
            </div>
          </div>
          </div>
      </div>`;


        // Check if body does not contain div.splash-container
        if (!document.querySelector('body div.splash-container')) {
            document.body.innerHTML = homeContent;
            console.log(date);
        }
    })
}

function formatLastUpdated(lastUpdatedString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Convert the string to a Date object
  const lastUpdatedDate = new Date(lastUpdatedString);

  // Extract the day, date, month, and year
  const dayOfWeek = daysOfWeek[lastUpdatedDate.getDay()];
  const date = lastUpdatedDate.getDate();
  const month = months[lastUpdatedDate.getMonth()];
  const year = lastUpdatedDate.getFullYear();

  // Format the result
  const formattedDate = `${dayOfWeek}, ${date} ${month} ${year}`;
  
  return formattedDate;
}

export default updateHomeContent;