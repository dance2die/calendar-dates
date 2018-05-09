const CalendarDates = require("../dist/calendardates.cjs");
// import CalendarDates from "../src/index";
// "sut" means "System Under Test".
const sut = new CalendarDates();

const april2018 = new Date(2018, 3);
const may2018 = new Date(2018, 4);

test("Dates for April of 2018", () => {
  const actual = sut.getDates(april2018);
  // prettier-ignore
  const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12];
  expect(actual).toEqual(expected);

  // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
  return sut
    .getDatesAsync(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix for April of 2018", () => {
  const actual = sut.getDateMatrix(april2018);
  // prettier-ignore
  const expected = [ 
    [ 1, 2, 3, 4, 5, 6, 7 ],
    [ 8, 9, 10, 11, 12, 13, 14 ],
    [ 15, 16, 17, 18, 19, 20, 21 ],
    [ 22, 23, 24, 25, 26, 27, 28 ],
    [ 29, 30, 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10, 11, 12 ]
  ];

  expect(actual).toEqual(expected);

  // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
  return sut
    .getDateMatrixAsync(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Dates for May of 2018", () => {
  const actual = sut.getDates(may2018);
  // prettier-ignore
  const expected = [29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9];
  expect(actual).toEqual(expected);

  // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
  return sut
    .getDatesAsync(may2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix for May of 2018", () => {
  const actual = sut.getDateMatrix(may2018);
  // prettier-ignore
  const expected = [ 
    [ 29, 30, 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10, 11, 12 ],
    [ 13, 14, 15, 16, 17, 18, 19 ],
    [ 20, 21, 22, 23, 24, 25, 26 ],
    [ 27, 28, 29, 30, 31, 1, 2 ],
    [ 3, 4, 5, 6, 7, 8, 9 ]
  ];

  expect(actual).toEqual(expected);

  // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
  return sut
    .getDateMatrixAsync(may2018)
    .then(actual => expect(actual).toEqual(expected));
});
