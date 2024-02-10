import getForecastWeatherData from "./forecastweather";

let forecastDataPromise = getForecastWeatherData();

async function updateDetails() {
    forecastDataPromise.then((resolvedData) => {
        console.log(resolvedData);

        let infoContainer = document.querySelector('.info-container');

        let detailContent = `
                <div class="details">
                <h2>Details</h2>

                <div class="precipitation-item">
                <span class="des">Precipitation</span>
                <span class="value">${resolvedData.current.precip_mm} mm</span>
                </div>

                <div class="wind-item">
                <span class="des">SE Wind</span>
                <span class="value">${resolvedData.current.wind_kph} km/h</span>
                </div>
                
                <div class="humidity-item">
                <span class="des">Humidity</span>
                <span class="value">${resolvedData.current.humidity} %</span>
                </div>
                
                <div class="visibility-item">
                <span class="des">Visibility</span>
                <span class="value">${resolvedData.current.vis_km} km</span>
                </div>
                
                <div class="uv-item">
                <span class="des">UV</span>
                <span class="value">${classifyUVIndex(resolvedData.current.uv)}</span>
                </div>
                
                <div class="pressure-item">
                <span class="des">Pressure</span>
                <span class="value">${resolvedData.current.pressure_mb} hPa</span>
                </div>
            </div>
      `;

        infoContainer.innerHTML = detailContent;
    })
}

export default updateDetails;