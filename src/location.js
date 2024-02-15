import getCurrentWeatherData from "./currentweather";
import updateHomeContent from "./home";

let locations = ['Sunyani', 'Kumasi', 'Accra'];

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

        <div class="get-city-container">
            <div class="city-input-item">
                <label for="city">Enter Your Preferred City Here:</label>
                <input type="text" name="city" class="city" id="city" required>
                <button type="submit" class="search-item">
                <img src="../src/img/Locations.png" alt="">
                <span>Add City</span>
                </button>
            </div>
        </div>
    `

    document.body.innerHTML = '';
    document.body.innerHTML = defaultContent;

    let locationContent = document.querySelector('.location-content');

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

    locItems.forEach((item) => {
        item.addEventListener('click', ()=> {
            const name = item.querySelector('.city').textContent;

            updateHomeContent(name);
        })
    })

    backBtn.addEventListener('click', ()=> {
        updateHomeContent();
    })

    addBtn.addEventListener('click', ()=> {
        const modal = document.querySelector('.get-city-container');
        const input = document.querySelector('.get-city-container .city-input-item input');
        const addCityBtn = document.querySelector('.get-city-container .city-input-item button'); 
        
        modal.classList.add('show-modal');

        modal.addEventListener('keydown', (e)=> {
            if (e.keyCode == 13 && input.value.length > 1) {
                modal.classList.remove('show-modal');
                let cityName = input.value;

                locations.push(cityName);
                updateLocation();
            }
        })

        addCityBtn.addEventListener('click', () => {
            if (input.value.length > 1) {
                modal.classList.remove('show-modal')
                modal.classList.remove('show-modal');
                let cityName = input.value;

                locations.push(cityName);
                updateLocation();
            }
        })
    })
}

export default updateLocation;