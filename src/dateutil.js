const monthTypes = {
  PREVIOUS: "previous",
  CURRENT: "current",
  NEXT: "next"
};

const pad = (number, padCharacter = "0") =>
  number < 10 ? padCharacter + number : number;

const iso8601 = ({ year, month, monthOffset, date }) => {
  const offset = {
    current: 0,
    previous: -1,
    next: 1
  };

  return `${year}-${pad(month + 1 + offset[monthOffset])}-${pad(date)}`;
};

const getLastDate = date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const getFirstDayIndex = date => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    .toDateString()
    .substring(0, 3);
  return dayNames.indexOf(firstDay);
};

const getDatesWithMetadata = date => {
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
};

const getCurrentDates = date => {
  const lastDate = getLastDate(date);
  return Array(lastDate)
    .fill()
    .map((_, i) => ({
      date: i + 1,
      iso: iso8601({
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        monthOffset: "current",
        date: i + 1
      })
    }));
};

const getPreviousDates = date => {
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
    .map((_, i) => ({
      date: start + i,
      iso: iso8601({
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        monthOffset: "previous",
        date: start + i
      })
    }));
};

const getNextDates = (date, daysSoFar) => {
  // 7 days * 6 rows (in a calendar)
  const totalDays = 42; // not the answer to all questions.
  const length = totalDays - daysSoFar;
  return Array(length)
    .fill()
    .map((_, i) => ({
      date: i + 1,
      iso: iso8601({
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        monthOffset: "next",
        date: i + 1
      })
    }));
};

export {
  monthTypes,
  iso8601,
  getLastDate,
  getFirstDayIndex,
  getDatesWithMetadata,
  getCurrentDates,
  getPreviousDates,
  getNextDates
};
