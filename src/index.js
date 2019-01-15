const monthTypes = {
  PREVIOUS: "previous",
  CURRENT: "current",
  NEXT: "next"
};

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function iso8601(date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
    date.getUTCDate()
  )}`;
}

class CalendarDates {
  getDates(date) {
    return new Promise(resolve =>
      resolve(
        getDatesWithMetadata(date).then(dates =>
          dates.map(metadata => metadata)
        )
      )
    );
  }

  getMatrix(date) {
    const daysInAWeek = 7; // 7 days in a week.

    // https://stackoverflow.com/a/39838921/4035
    return new Promise(resolve => {
      resolve(
        getDatesWithMetadata(date).then(dates =>
          dates.reduce(
            (rows, key, index) =>
              (index % daysInAWeek === 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
            []
          )
        )
      );
    });
  }
}

function getDatesWithMetadata(date) {
  return new Promise(resolve => {
    let result = [];

    const previousDates = getPreviousDates(date).map(({ date, iso }) => ({
      date,
      iso,
      type: monthTypes.PREVIOUS
    }));

    const currentDates = getCurrentDates(date).map(({ date, iso }) => ({
      date,
      iso,
      type: monthTypes.CURRENT
    }));
    result = result.concat(previousDates).concat(currentDates);

    const nextDates = getNextDates(date, result.length).map(
      ({ date, iso }) => ({
        date,
        iso,
        type: monthTypes.NEXT
      })
    );

    resolve(result.concat(nextDates));
  });
}

function getCurrentDates(date) {
  const lastDate = getLastDateOfMonth(date);
  return Array(lastDate)
    .fill()
    .map((_, i) => {
      date.setDate(i + 1);
      return { date: i + 1, iso: iso8601(date) };
    });
}

function getPreviousDates(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const prevMonth = Math.min(month - 1, 11);
  const prevDate = new Date(year, prevMonth);

  const prevMonthLastDate = getLastDateOfMonth(prevDate);
  const firstDayIndex = getFirstDayIndex(date);
  const start = prevMonthLastDate - firstDayIndex + 1;
  const length = prevMonthLastDate - start + 1;

  return Array(length)
    .fill()
    .map((_, i) => {
      prevDate.setDate(start + i);
      return {
        date: start + i,
        iso: iso8601(prevDate)
      };
    });
}

function getNextDates(date, daysSoFar) {
  // 7 days * 6 rows (in a calendar)
  const totalDays = 42; // not the answer to all questions.
  const length = totalDays - daysSoFar;

  const nextMonth = date.getMonth() + 1 === 12 ? 0 : date.getMonth() + 1;
  let nextYear = nextMonth === 0 ? date.getFullYear() + 1 : date.getFullYear();
  const nextDate = new Date(nextYear, nextMonth);

  return Array(length)
    .fill()
    .map((_, i) => {
      nextDate.setDate(i + 1);
      return {
        date: i + 1,
        iso: iso8601(nextDate)
      };
    });
}

function getLastDateOfMonth(date) {
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
