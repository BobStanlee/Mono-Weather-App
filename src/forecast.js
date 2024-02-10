import getForecastWeatherData from "./forecastweather";

async function updateForecast() {
    let resolvedDatas = getForecastWeatherData();
    let infoContainer = document.querySelector('.info-container');

    resolvedDatas.then((resolvedData) => {
        console.log(resolvedData);

        let content = `
        <div class="forecast">
        <h2>Forecast</h2>
        <div class="hourly-forecast">
          <h3>Hourly Forecast</h3>
          <div class="hourly-container">
            <div class="hour-item">
              <span class="time">10:00</span>
              <img src="../src/img/Drizzle.png" alt="" class="weather-img">
            </div>

            <div class="hour-item">
              <span class="time">10:00</span>
              <img src="../src/img/Drizzle.png" alt="" class="weather-img">
            </div>
          </div>
        </div>

        <div class="daily-forecast">
          <h3>Daily Forecast</h3>
          <div class="daily-container">
            <div class="daily-item">
              <span class="date">26 Dec</span>
              <img src="../src/img/Drizzle.png" alt="weather-img" class="weather-img">
              <span class="high-temp">
                <img src="../src/img/Up Arrow.png" alt="Up Arrow">
                26°C
              </span>

              <span class="low-temp">
                <img src="../src/img/Down Arrow.png" alt="Down Arrow">
                16°C
              </span>
            </div>

            <div class="daily-item">
              <span class="date">26 Dec</span>
              <img src="../src/img/Drizzle.png" alt="weather-img" class="weather-img">
              <span class="high-temp">
                <img src="../src/img/Up Arrow.png" alt="Up Arrow">
                26°C
              </span>

              <span class="low-temp">
                <img src="../src/img/Down Arrow.png" alt="Down Arrow">
                16°C
              </span>
            </div>
          </div>
        </div>
      </div>
        `

        infoContainer.innerHTML = '';
        infoContainer.innerHTML = content;
    });
}

export default updateForecast;