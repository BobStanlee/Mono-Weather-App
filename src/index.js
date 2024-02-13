import splashContent from "./splash";
import updateHomeContent from "./home";
import updateForecast from "./forecast";

// Run the function on page load
window.addEventListener('load', splashContent);

// Run the update home content after the splash content has finish doing its thing
setTimeout(() => {
    updateHomeContent();
}, 5200);