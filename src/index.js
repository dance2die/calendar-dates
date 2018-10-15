import { getDatesWithMetadata } from "./dateutil";

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

export default CalendarDates;
