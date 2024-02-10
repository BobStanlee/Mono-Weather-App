import splashContent from "./splash";
import getCurrentWeatherData from "./currentweather";
import updateHomeContent from "./home";

// Run the function on page load
window.addEventListener('load', splashContent);

// Run the update home content after the splash content has finish doing its thing
// setTimeout(() => {
//     updateHomeContent();
// }, 5000)
