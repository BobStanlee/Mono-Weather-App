import getCurrentWeatherData from "./currentweather";
import getForecastWeatherData from "./forecastweather";

async function updateLocation() {
    let defaultContent = `
        <div class="location-container">
            <div class="header">
                <div class="title-item">
                    <img src="../src/img/Back Icon.png" alt="Back">
                    <span>Select City</span>
                </div>

                <div class="addbtn">
                    <img src="../src/img/Add Location.png" alt="Add Button" class="add-btn">
                </div>
            </div>

            <div class="location-content">
       
            </div>
        </div>
    `

    document.body.innerHTML = '';
    document.body.innerHTML = defaultContent;

    let locations = ['Sunyani', 'Kumasi', 'Accra'];

    locations.forEach((location) => {
        let forecastDataPromise = getCurrentWeatherData(location);

        forecastDataPromise.then((resolvedData) => {
            createLocationItem(resolvedData);
        })
    })
}

function createLocationItem(resolvedData) {
    const locationItem = document.createElement('div');
    const locInfo = document.createElement('div');
    const weatherItem = document.createElement('div');

    locationItem.classList.add('location-item');
    locInfo.classList.add('loc-info');
    weatherItem.classList.add('weather-item');

    const citySpan = document.createElement('span');
    const tempSpan = document.createElement('span');
    const conditionSpan = document.createElement('span');

    citySpan.classList.add('city');
    tempSpan.classList.add('temp');
    conditionSpan.classList.add('condition');

    citySpan.textContent = `${resolvedData.location.name}`;
    tempSpan.textContent = `${Math.round(resolvedData.current.temp_c)}°C`;
    conditionSpan.textContent = `${resolvedData.current.condition.text}`;

    const weatherIcon = document.createElement('img');

    weatherIcon.classList.add('weather-icon');
    weatherIcon.src = `${resolvedData.current.condition.icon}`;

    locInfo.appendChild(citySpan);
    locInfo.appendChild(tempSpan);
    locInfo.appendChild(conditionSpan);

    weatherItem.appendChild(weatherIcon);

    locationItem.appendChild(locInfo);
    locationItem.appendChild(weatherItem);

    let locationContent = document.querySelector('.location-content');

    locationContent.appendChild(locationItem);
}

function handleClicks() {
    const title = document.querySelector('.title-item');
    const addBtn = document.querySelector('.addbtn');

    
}

export default updateLocation;