import updateHomeContent from "./home";

function updateSettings() {
    let settingsContent = `
        <div class="settings-container">
            <div class="header">
                <div class="backbtn">
                    <img src="../src/img/Back Icon.png" alt="">
                    <span>Settings</span>
                </div>
            </div>

            <div class="theme">
            <h1>Theme</h1>
            <div class="dark-container">
                <div class="dark-item">
                    <span class="title">Dark Theme</span>
                    <span class="des">Join the Dark Side!</span>
                </div>

                <img src="../src/img/Check.png" alt="">
            </div>

            <div class="light-container">
                <div class="light-item">
                    <span class="title">Light Theme</span>
                    <span class="des">Let There be Light!</span>
                </div>

                <img src="../src/img/Check.png" alt="" class="show">
            </div>
            </div>

            <div class="about">
            <h1>About</h1>
            <div class="about-container">
                <div class="about-item">
                    <span class="title">About Weather</span>
                    <span class="des">Read a bit more about the app.</span>
                </div>
            </div>

            <div class="team-container">
                <div class="team-item">
                    <span class="title">The Team</span>
                    <span class="des">Get to know the team that made Weather a reality.</span>
                </div>
            </div>
            </div>
        </div>
    `;

    document.body.innerHTML = settingsContent;

    handleClicks();
}

function handleClicks() {
    const header = document.querySelector('.settings-container .header');
    const darkTheme = document.querySelector('.dark-container');
    const lightTheme = document.querySelector('.light-container');
    const darkCheck = document.querySelector('.settings-container .theme .dark-container img');
    const lightCheck = document.querySelector('.settings-container .theme .light-container img')

    header.addEventListener('click', () => {
        updateHomeContent();
    });

    darkTheme.addEventListener('click', () => {
        setDarkMode();
        darkCheck.classList.add('show');
        lightCheck.classList.remove('show');
    });

    lightTheme.addEventListener('click', () => {
        setLightMode();
        lightCheck.classList.add('show');
        darkCheck.classList.remove('show');
    });
}

function setDarkMode() {
    // Set dark mode variables
    document.documentElement.style.setProperty('--White', '#000');
    document.documentElement.style.setProperty('--black', '#FFF');
    document.documentElement.style.setProperty('--translucent', '#616161');
    // Add more variables as needed
}

function setLightMode() {
    // Set light mode variables
    document.documentElement.style.setProperty('--White', '#FFF');
    document.documentElement.style.setProperty('--black', '#000');
    document.documentElement.style.setProperty('--translucent', '#616161');
    // Add more variables as needed
}

export default updateSettings;