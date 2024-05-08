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

window.onload = function() {
  addCalendarIcon('rsCalendar');
};
