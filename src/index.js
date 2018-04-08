const l = console.log;

// if (document.readyState === "complete") {
//   l("document is already ready, just execute code here");
//   main();
// } else {
//   document.addEventListener("DOMContentLoaded", function() {
//     l("document was not ready, place code here");
//     main();
//   });
// }

main();

function setInnerContent(content) {
  document.querySelector("#app").innerHTML = content;
}

function main() {
  // setInnerContent("<h1>hi!</h1>");
  // 8/1/2018
  const dates = getCalendarDates(new Date(2018, 7, 1));
  let content = "";
  for (let i = 0; i < 42; i++) {
    if (i % 7 === 0 && i !== 0) content += `<br />`;
    content += `${dates[i]} `;
  }
  setInnerContent(content);
}

function getCalendarDates(date) {
  let result = [];

  const prevMonthDates = getPreviousMonthDates(date);
  const currMonthDates = getCurrentMonthDates(date);
  result = result.concat(prevMonthDates).concat(currMonthDates);

  const nextMonthDates = getNextMonthDates(date, result.length);
  result = result.concat(nextMonthDates);

  return result;
}

function getNextMonthDates(date, daysSoFar) {
  // 7 days * 6 rows (in a calendar)
  const totalDays = 42; // not the answer to all questions.
  const length = totalDays - daysSoFar;
  return Array(length)
    .fill()
    .map((_, i) => i + 1);
}

function getCurrentMonthDates(date) {
  const lastDate = getLastDate(date);
  return Array(lastDate)
    .fill()
    .map((_, i) => i + 1);
}

function getPreviousMonthDates(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const prevMonth = Math.min(month - 1, 11);
  const prevDate = new Date(year, prevMonth);

  const prevMonthLastDate = getLastDate(prevDate);
  const firstDayIndex = getFirstDayIndex(date);
  const start = prevMonthLastDate - firstDayIndex + 1;
  const length = prevMonthLastDate - start + 1;

  return Array(length)
    .fill()
    .map((_, i) => start + i);
}

function getLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getFirstDayIndex(date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    .toDateString()
    .substring(0, 3);
  return dayNames.indexOf(firstDay);
}
