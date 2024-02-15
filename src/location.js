import getCurrentWeatherData from "./currentweather";
import updateHomeContent from "./home";

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

    let locationContent = document.querySelector('.location-content');

    let locations = ['Sunyani', 'Kumasi', 'Accra'];

    let allLocItems = [];

    // Use Promise.all to wait for all promises to resolve
    await Promise.all(locations.map(async (location) => {
        let resolvedData = await getCurrentWeatherData(location);
        let node = createLocationItem(resolvedData);
        locationContent.appendChild(node);
        allLocItems.push(node);
    }));

    handleClicks();
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

    return locationItem;
}

function handleClicks() {
    const locItems = document.querySelectorAll('.location-item');
    const backBtn = document.querySelector('.title-item');
    const addBtn = document.querySelector('.addbtn');

    console.log(locItems);

    locItems.forEach((item) => {
        item.addEventListener('click', ()=> {
            const name = item.querySelector('.city').textContent;

            updateHomeContent(name);
        })
    })
}

export default updateLocation;