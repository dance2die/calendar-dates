class CalendarDates {
  getDateMatrix(date) {
    const dates = this.getDates(date);
    const daysInAWeek = 7; // 7 days in a week.

    // https://stackoverflow.com/a/39838921/4035
    return dates.reduce(
      (rows, key, index) =>
        (index % daysInAWeek === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );
  }

  getDates(date) {
    let result = [];

    const prevMonthDates = this.getPreviousDates(date);
    const currMonthDates = this.getCurrentDates(date);
    result = result.concat(prevMonthDates).concat(currMonthDates);

    const nextMonthDates = this.getNextDates(date, result.length);
    result = result.concat(nextMonthDates);

    return result;
  }

  getCurrentDates(date) {
    const lastDate = getLastDate(date);
    return Array(lastDate)
      .fill()
      .map((_, i) => i + 1);
  }

  getPreviousDates(date) {
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

  getNextDates(date, daysSoFar) {
    // 7 days * 6 rows (in a calendar)
    const totalDays = 42; // not the answer to all questions.
    const length = totalDays - daysSoFar;
    return Array(length)
      .fill()
      .map((_, i) => i + 1);
  }
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

export default CalendarDates;
