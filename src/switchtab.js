import updateDetails from "./details";
import updateHomeContent from "./home";
import updateForecast from "./forecast";

function switchtabs() {
    let btns = document.querySelectorAll(".sync span");
    let infoContainer = document.querySelector(".info-container");
    
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (
          btn.classList.contains("details") &
          !infoContainer.querySelector(".details")
        ) {
          updateDetails();
        } else if (
          btn.classList.contains("forecast") &
          !infoContainer.querySelector(".forecast")
        ) {
            infoContainer.innerHTML = '';
            updateForecast();
        } else if (
          btn.classList.contains("home") &&
          !infoContainer.querySelector(".home")
        ) {
          updateHomeContent();
        }
      });
    });
}

export default switchtabs;