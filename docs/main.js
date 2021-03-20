// Global variable declarations
const dateInput = document.getElementById('nav-date-input');
dateInput.addEventListener('input', function() { getSign('input') }, false);

let astroSign = null;



// Zodiac Function
function getSign(date) {
    // local variables --> formatting date string
    const dateFormatted = date.split('-');
    const whichMonth = dateFormatted[0] + 1;
    const whichDay = dateFormatted[1];

    // Zodiac algarithm 
    if ((whichMonth == 12 && whichDay >= 22) || (whichMonth == 1 && whichDay <= 19)) {
        whichSign = "Cap";
    } else if ((whichMonth == 11 && whichDay >= 22) || (whichMonth == 12 && whichDay <= 21)) {
        whichSign = "Sag";
    } else if ((whichMonth == 10 && whichDay >= 24) || (whichMonth == 11 && whichDay <= 21)) {
        whichSign = "Sco";
    } else if ((whichMonth == 9 && whichDay >= 23) || (whichMonth == 10 && whichDay <= 23)) {
        whichSign = "Lib";
    } else if ((whichMonth == 8 && whichDay >= 23) || (whichMonth == 9 && whichDay <= 22)) {
        whichSign = "Vir";
    } else if ((whichMonth == 7 && whichDay >= 23) || (whichMonth == 8 && whichDay <= 22)) {
        whichSign = "Leo";
    } else if ((whichMonth == 6 && whichDay >= 22) || (whichMonth == 7 && whichDay <= 22)) {
        whichSign = "Can";
    } else if ((whichMonth == 5 && whichDay >= 21) || (whichMonth == 6 && whichDay <= 21)) {
        whichSign = "Gem";
    } else if ((whichMonth == 4 && whichDay >= 20) || (whichMonth == 5 && whichDay <= 20)) {
        whichSign = "Tau";
    } else if ((whichMonth == 3 && whichDay >= 21) || (whichMonth == 4 && whichDay <= 19)) {
        whichSign = "Ari";
    } else if ((whichMonth == 2 && whichDay >= 19) || (whichMonth == 3 && whichDay <= 20)) {
        whichSign = "Pis";
    } else if ((whichMonth == 1 && whichDay >= 20) || (whichMonth == 2 && whichDay <= 18)) {
        whichSign = "Aqu";
    }
    // return sign to update sign value
    return whichSign;
}