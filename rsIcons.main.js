// Funktion zum Hinzufügen des Kalender-Icons
function addCalendarIcon(elementId) {
  var currentDate = new Date();
  var dateSpan = document.getElementById(elementId);
  var day = currentDate.getDate();
  var monthIndex = currentDate.getMonth();
  var year = currentDate.getFullYear();

  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

  dateSpan.innerHTML = '<time datetime="' + year + '-' + (monthIndex + 1) + '-' + day + '" class="icon">' +
    '<em>' + getDayOfWeek(currentDate) + '</em>' +
    '<strong>' + monthNames[monthIndex] + '</strong>' +
    '<span>' + day + '</span>' +
    '</time>';
}

// Funktion zum Abrufen des Wochentags
function getDayOfWeek(date) {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}

window.onload = function() {
  var calendarIconElement = document.getElementById('rsCalendar');
  if (calendarIconElement) {
    addCalendarIcon('rsCalendar');
  }
};
