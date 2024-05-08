// Calendar Icon
function addCalendarIcon(iconClass) {
    var currentDate = new Date();
    var iconElements = document.getElementsByClassName(iconClass);

    if (iconElements.length > 0) {
        Array.from(iconElements).forEach(function(iconElement) {
        var day = currentDate.getDate();
        var monthIndex = currentDate.getMonth();
        var year = currentDate.getFullYear();

        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];

        iconElement.innerHTML = '<time datetime="' + year + '-' + (monthIndex + 1) + '-' + day + '" class="icon">' +
            '<em>' + getDayOfWeek(currentDate) + '</em>' +
            '<strong>' + monthNames[monthIndex] + '</strong>' +
            '<span>' + day + '</span>' +
            '</time>';
        });
    }
}
  
function getDayOfWeek(date) {
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return daysOfWeek[date.getDay()];
}

// Clock Icon
function addClockIcon(iconClass) {
    var currentTime = new Date();
    var iconElements = document.getElementsByClassName(iconClass);

    if (iconElements.length > 0) {
        Array.from(iconElements).forEach(function(iconElement) {
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;

            var html = '<time class="icon">' +
                generateDigitalNumber(parseInt(hours.toString()[0])) +
                generateDigitalNumber(parseInt(hours.toString()[1])) +
                '<span class="separator">:</span>' + // Trennzeichen
                generateDigitalNumber(parseInt(minutes.toString()[0])) +
                generateDigitalNumber(parseInt(minutes.toString()[1])) +
                '</time>';

            iconElement.innerHTML = html;
        });
    }
}
  
// Digital Clock Icon
function addClockIcon(iconClass) {
    var currentTime = new Date();
    var iconElements = document.getElementsByClassName(iconClass);

    if (iconElements.length > 0) {
        Array.from(iconElements).forEach(function(iconElement) {
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        iconElement.innerHTML = '<time class="icon">' +
            '<span class="hours">' + hours + '</span>' +
            '<span class="separator">:</span>' +
            '<span class="minutes">' + minutes + '</span>' +
            '</time>';
        });
    }
}

// Analog Clock Icon
function addAnalogClockIcon(iconClass) {
    var iconElements = document.getElementsByClassName(iconClass);

    if (iconElements.length > 0) {
        Array.from(iconElements).forEach(function(iconElement) {
        var clockFace = document.createElement('div');
        clockFace.classList.add('clock-face');

        var hourHand = document.createElement('div');
        hourHand.classList.add('hour-hand');
        var minuteHand = document.createElement('div');
        minuteHand.classList.add('minute-hand');
        var secondHand = document.createElement('div');
        secondHand.classList.add('second-hand');

        iconElement.appendChild(clockFace);
        clockFace.appendChild(hourHand);
        clockFace.appendChild(minuteHand);
        clockFace.appendChild(secondHand);

        updateAnalogClock(iconElement);

        setInterval(function() {
            updateAnalogClock(iconElement);
        }, 1000);
        });
    }
}
  
function updateAnalogClock(iconElement) {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var hourDegrees = (hours % 12) * 30 + minutes / 2 + 180; // Füge 90 Grad hinzu, um die Ausgangsrotation zu korrigieren
    var minuteDegrees = minutes * 6 + seconds / 10 + 180;
    var secondDegrees = seconds * 6;

    iconElement.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    iconElement.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    iconElement.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
} 

window.onload = function() {
    addCalendarIcon('rsCalendar');
    addClockIcon('rsClock');
    addAnalogClockIcon('rsAnalogClock');
};
