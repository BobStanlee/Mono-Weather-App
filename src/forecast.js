import getForecastWeatherData from "./forecastweather";

async function updateForecast() {

  let resolvedDatas = getForecastWeatherData();

  createForecast();

  let hourlyContainer = document.querySelector('.hourly-container');
  let dailyContainer = document.querySelector('.daily-container');

    resolvedDatas.then((resolvedData) => {
        let forecastHourly = resolvedData.forecast.forecastday[0].hour;
        let forecastDaily = resolvedData.forecast.forecastday[0].day;
        let forecastDailyDate = resolvedData.forecast.forecastday[0].date;
        
        forecastHourly.forEach((hour) => {
          createHourItem(hour,hourlyContainer);
        })

        createDailyItem(forecastDaily, dailyContainer, forecastDailyDate);
    });
}

function createForecast() {
    const infoContainer = document.querySelector('.info-container');
    const forecastContainer = document.createElement('div');
    const h2 = document.createElement('h2');

    h2.textContent = 'Forecast';
    forecastContainer.classList.add('forecast');

    const hourlyDiv = document.createElement('div');
    const dailyDiv = document.createElement('div');

    hourlyDiv.classList.add('hourly-forecast');
    dailyDiv.classList.add('daily-forecast');

    const hourlyh3 = document.createElement('h3');
    const dailyh3 = document.createElement('h3');

    hourlyh3.textContent = 'Hourly Forecast';
    dailyh3.textContent = 'Daily Forecast';

    hourlyDiv.appendChild(hourlyh3);
    dailyDiv.appendChild(dailyh3);

    const hourlyContainer = document.createElement('div');
    const dailyContainer = document.createElement('div');

    hourlyContainer.classList.add('hourly-container');
    dailyContainer.classList.add('daily-container');

    hourlyDiv.appendChild(hourlyContainer);
    dailyDiv.appendChild(dailyContainer);


    forecastContainer.appendChild(h2);

    forecastContainer.appendChild(hourlyDiv);
    forecastContainer.appendChild(dailyDiv);

    infoContainer.appendChild(forecastContainer);
}


function createHourItem(hourlyForcast, hourlyContainer) {
    let hourItem = document.createElement('div');
    let timeSpan = document.createElement('span');
    let weatherImg = document.createElement('img');

    hourItem.classList.add('hour-item');
    timeSpan.classList.add('time');
    weatherImg.classList.add('weather-img');

    weatherImg.src = hourlyForcast.condition.icon;
    timeSpan.textContent = formatTime(hourlyForcast.time);

    hourItem.appendChild(timeSpan);
    hourItem.appendChild(weatherImg);

    hourlyContainer.appendChild(hourItem);
}

function createDailyItem(dailyForcast, dailyContainer, date) {
    let dailyItem = document.createElement('div');
    let dateSpan = document.createElement('span');
    let weatherImg = document.createElement('img');

    let highTSpan = document.createElement('span');
    let lowTSpan = document.createElement('span');

    dailyItem.classList.add('daily-item');
    dateSpan.classList.add('date');
    weatherImg.classList.add('weather-img');
    highTSpan.classList.add('high-temp');
    lowTSpan.classList.add('low-temp');

    dateSpan.textContent = formatDate(date);
    weatherImg.src = dailyForcast.condition.icon;

    let upArrowHighImg = document.createElement('img');
    let downArrowlowImg = document.createElement('img');

    upArrowHighImg.src = '../src/img/Up Arrow.png';
    downArrowlowImg.src = '../src/img/Down Arrow.png';

    highTSpan.textContent = Math.round(dailyForcast.maxtemp_c);
    lowTSpan.textContent = Math.round(dailyForcast.mintemp_c);

    highTSpan.appendChild(upArrowHighImg);
    lowTSpan.appendChild(downArrowlowImg);

    dailyItem.appendChild(dateSpan);
    dailyItem.appendChild(weatherImg);
    dailyItem.appendChild(highTSpan);
    dailyItem.appendChild(lowTSpan);

    dailyContainer.appendChild(dailyItem);
}

function formatTime(timeString) {
  // Create a Date object from the time string
  const dateTime = new Date(timeString);

  // Get the hours and minutes
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  // Format the result as "hh:mm"
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return formattedTime;
}

function formatDate(dateString) {
  // Create a Date object from the date string
  const dateObject = new Date(dateString);

  // Get the day and month
  const day = dateObject.getDate();
  
  // Array of month names (adjust as needed)
  const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const monthIndex = dateObject.getMonth();
  const month = monthNames[monthIndex];

  // Format the result as "dd MMM"
  const formattedDate = `${day.toString().padStart(2, '0')} ${month}`;

  return formattedDate;
}

export default updateForecast;