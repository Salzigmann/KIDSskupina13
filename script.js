// script.js

// Temni način
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Obnovi stanje temnega načina ob nalaganju
window.onload = () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Prikaz datuma ob nalaganju
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('sl-SI', options);
    }
};

// Razširitev besedila na karticah
const toggleText = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('expanded');
        const button = document.querySelector(`[data-target='${id}']`);
        if (button) {
            button.textContent = element.classList.contains('expanded') ? 'Prikaži manj' : 'Prikaži več';
        }
    }
};

// CookieClicker igra
let clickCount = 0;
const updateClickCounter = () => {
    clickCount++;
    const counterElement = document.getElementById('click-counter');
    if (counterElement) {
        const suffix = clickCount === 1 ? 'klik' : (clickCount % 100 >= 2 && clickCount % 100 <= 4 ? 'klika' : 'klikov');
        counterElement.textContent = `${clickCount} ${suffix}`;
    }
};

// Povečanje slike knjige ob kliku (dodatna funkcionalnost)
const enlargeBookImage = (imgId) => {
    const imgElement = document.getElementById(imgId);
    if (imgElement) {
        imgElement.classList.toggle('enlarged');
    }
};
