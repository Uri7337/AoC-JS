const { execFile } = require('child_process');

// Cesta k Chrome.exe bez uvozovek
//W11
//const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
//Linux
const chromePath = '/usr/bin/google-chrome';


// URL, které se má otevřít
const url = 'https://adventofcode.com/2015/day/3';

// Spustíme Chrome v app-režimu (bez lišty)
execFile(chromePath, [`--app=${url}`], (err) => {
    if (err) {
        console.error('Nepodařilo se spustit Chrome:', err);
    } else {
        console.log('Chrome spuštěn v app-režimu.');
    }
});
