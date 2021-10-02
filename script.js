const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
const solarButton = document.querySelector("#solar");
const body = document.body;

// Apply the cached theme on reload


// Button Event Handlers

darkButton.onclick = () => {
    body.classList.replace("light", "dark");
};

lightButton.onclick = () => {
    body.classList.replace("dark", "light");
};

solarButton.onclick = () => {
    body.classList.toggle("solar");
};
