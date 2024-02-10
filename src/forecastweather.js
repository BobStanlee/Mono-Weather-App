const apiKey = 'f89648074bac4104939211917240602';
const forecastApiUrl = 'https://api.weatherapi.com/v1/forecast.json?';

async function getForecastWeatherData(city = 'sunyani') {
    try {
      const responds = await fetch(
        `${forecastApiUrl}` + `key=${apiKey}` + `&q=${city}`
      );
  
      if (!responds.ok) {
        // If the response status is not ok, throw an error
        throw new Error(`Failed to fetch data. Status: ${responds.status}`);
      }
  
      const data = await responds.json();
      return data;
    } catch (error) {
      // Handle the error here
      console.error('Error fetching weather data:', error.message);
      throw error; // Optionally rethrow the error to propagate it to the caller
    }
  }
  
  export default getForecastWeatherData;
  