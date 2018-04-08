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
}

function getCalendarDates(date) {
  l(`date=${date}`);
  const result = [];

  // Get Previous Month's Dates
  const prevMonthDates = getPreviousMonthDates(date);
  console.log(`prevMonthDates=${prevMonthDates}`);
  result.push(prevMonthDates);

  // Get Current Month's Dates
  const currMonthDates = getCurrentMonthDates(date);
  console.log(`currMonthDates=${currMonthDates}`);
  result.push(currMonthDates);

  // // Get Next Month's Dates
  // const nextMonthDates = getNextMonthDates(date);
  // result.push(nextMonthDates);
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
