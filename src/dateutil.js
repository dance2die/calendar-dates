const monthTypes = {
    PREVIOUS: "previous",
    CURRENT: "current",
    NEXT: "next"
};

const pad = (number, padCharacter = "0") =>
    number < 10 ? padCharacter + number : number;

const iso8601 = date =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

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

const dateMapper = dateCount => mapper =>
    Array(dateCount)
        .fill()
        .map(mapper);

const getCurrentDates = currentDate => {
    const lastDate = getLastDate(currentDate);
    return dateMapper(lastDate)((_, i) => {
        const date = i + 1;
        currentDate.setDate(date);
        return {
            date,
            iso: iso8601(currentDate)
        };
    });
};

const getPreviousDates = currentDate => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const prevMonth = Math.min(month - 1, 11);
    const prevDate = new Date(year, prevMonth);

    const prevMonthLastDate = getLastDate(prevDate);
    const firstDayIndex = getFirstDayIndex(currentDate);
    const start = prevMonthLastDate - firstDayIndex + 1;
    const length = prevMonthLastDate - start + 1;

    return dateMapper(length)((_, i) => {
        const date = start + i;
        prevDate.setDate(date);
        return {
            date,
            iso: iso8601(prevDate)
        };
    });
};

const getNextDates = (currentDate, daysSoFar) => {
    // 7 days * 6 rows (in a calendar)
    const totalDays = 42; // not the answer to all questions.
    const length = totalDays - daysSoFar;

    const nextMonth =
        currentDate.getMonth() + 1 === 12 ? 0 : currentDate.getMonth() + 1;
    let nextYear =
        nextMonth === 0
            ? currentDate.getFullYear() + 1
            : currentDate.getFullYear();
    const nextDate = new Date(nextYear, nextMonth);

    return dateMapper(length)((_, i) => {
        const date = i + 1;
        nextDate.setDate(date);
        return {
            date,
            iso: iso8601(nextDate)
        };
    });
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
