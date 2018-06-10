const monthTypes = {
  PREVIOUS: "previous",
  CURRENT: "current",
  NEXT: "next"
};

class CalendarDates {
  async getDates(date) {
    let result = [];

    const prevMonthDates = getPreviousDates(date).map(date => ({
      date,
      type: monthTypes.PREVIOUS
    }));
    const currMonthDates = getCurrentDates(date).map(date => ({
      date,
      type: monthTypes.CURRENT
    }));
    result = result.concat(prevMonthDates).concat(currMonthDates);

    const nextMonthDates = getNextDates(date, result.length).map(date => ({
      date,
      type: monthTypes.NEXT
    }));
    result = result.concat(nextMonthDates);

    return result;
  }

  async getMatrix(date) {
    const dates = getDatesWithMetadata(date);
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
}

function getDateMatrix(date) {
  const dates = getDates(date);
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

async function getDateMatrixAsync(date) {
  return getDateMatrix(date);
}

function getDateMatrixWithMetadata(date) {
  const dates = getDatesWithMetadata(date);
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

async function getDateMatrixWithMetadataAsync(date) {
  return getDateMatrixWithMetadata(date);
}

function getDates(date) {
  return getDatesWithMetadata(date).map(metadata => metadata.date);
}

async function getDatesAsync(date) {
  return getDates(date);
}

function getDatesWithMetadata(date) {
  let result = [];

  const prevMonthDates = getPreviousDates(date).map(date => ({
    date,
    type: monthTypes.PREVIOUS
  }));
  const currMonthDates = getCurrentDates(date).map(date => ({
    date,
    type: monthTypes.CURRENT
  }));
  result = result.concat(prevMonthDates).concat(currMonthDates);

  const nextMonthDates = getNextDates(date, result.length).map(date => ({
    date,
    type: monthTypes.NEXT
  }));
  result = result.concat(nextMonthDates);

  return result;
}

async function getDatesWithMetadataAsync(date) {
  return getDatesWithMetadata(date);
}

function getCurrentDates(date) {
  const lastDate = getLastDate(date);
  return Array(lastDate)
    .fill()
    .map((_, i) => i + 1);
}

async function getCurrentDatesAsync(date) {
  return getCurrentDates(date);
}

function getPreviousDates(date) {
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

async function getPreviousDatesAsync(date) {
  return getPreviousDates(date);
}

function getNextDates(date, daysSoFar) {
  // 7 days * 6 rows (in a calendar)
  const totalDays = 42; // not the answer to all questions.
  const length = totalDays - daysSoFar;
  return Array(length)
    .fill()
    .map((_, i) => i + 1);
}

async function getNextDatesAsync(date, daysSoFar) {
  return getNextDates(date, daysSoFar);
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
