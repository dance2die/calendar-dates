const CalendarDates = require("calendar-dates");
// "sut" means "System Under Test".
const sut = new CalendarDates();

test("Dates for April of 2018", () => {
  const actual = sut.getDates(new Date(2018, 3));
  // prettier-ignore
  const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12];
  expect(actual).toEqual(expected);
});

test("Dates for May of 2018", () => {
  const actual = sut.getDates(new Date(2018, 4));
  // prettier-ignore
  const expected = [29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9];
  expect(actual).toEqual(expected);
});
