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

test("Dates with Metadata for April of 2018", () => {
  const actual = sut.getDatesWithMetadata(april2018);
  // prettier-ignore
  const expected = [
    {date: 1, type: 'current'}, {date: 2, type: 'current'}, {date: 3, type: 'current'}, {date: 4, type: 'current'}, {date: 5, type: 'current'}, {date: 6, type: 'current'}, {date: 7, type: 'current'}, 
    {date: 8, type: 'current'}, {date: 9, type: 'current'}, {date: 10, type: 'current'}, {date: 11, type: 'current'}, {date: 12, type: 'current'}, {date: 13, type: 'current'}, {date: 14, type: 'current'}, 
    {date: 15, type: 'current'}, {date: 16, type: 'current'}, {date: 17, type: 'current'}, {date: 18, type: 'current'}, {date: 19, type: 'current'}, {date: 20, type: 'current'}, {date: 21, type: 'current'}, 
    {date: 22, type: 'current'}, {date: 23, type: 'current'}, {date: 24, type: 'current'}, {date: 25, type: 'current'}, {date: 26, type: 'current'}, {date: 27, type: 'current'}, {date: 28, type: 'current'}, 
    {date: 29, type: 'current'}, {date: 30, type: 'current'}, {date: 1, type: 'next'}, {date: 2, type: 'next'}, {date: 3, type: 'next'}, {date: 4, type: 'next'}, {date: 5, type: 'next'}, 
    {date: 6, type: 'next'}, {date: 7, type: 'next'}, {date: 8, type: 'next'}, {date: 9, type: 'next'}, {date: 10, type: 'next'}, {date: 11, type: 'next'}, {date: 12, type: 'next'}];
  expect(actual).toEqual(expected);

  return sut
    .getDatesWithMetadataAsync(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Dates with Metadata for May of 2018", () => {
  const actual = sut.getDatesWithMetadata(may2018);
  // prettier-ignore
  const expected = [
    { date: 29, type: "previous" },{ date: 30, type: "previous" },{ date: 1, type: "current" },{ date: 2, type: "current" },{ date: 3, type: "current" },{ date: 4, type: "current" },{ date: 5, type: "current" },
    { date: 6, type: "current" },{ date: 7, type: "current" },{ date: 8, type: "current" },{ date: 9, type: "current" },{ date: 10, type: "current" },{ date: 11, type: "current" },{ date: 12, type: "current" },
    { date: 13, type: "current" },{ date: 14, type: "current" },{ date: 15, type: "current" },{ date: 16, type: "current" },{ date: 17, type: "current" },{ date: 18, type: "current" },{ date: 19, type: "current" },
    { date: 20, type: "current" },{ date: 21, type: "current" },{ date: 22, type: "current" },{ date: 23, type: "current" },{ date: 24, type: "current" },{ date: 25, type: "current" },{ date: 26, type: "current" },
    { date: 27, type: "current" },{ date: 28, type: "current" },{ date: 29, type: "current" },{ date: 30, type: "current" },{ date: 31, type: "current" },{ date: 1, type: "next" },{ date: 2, type: "next" },
    { date: 3, type: "next" },{ date: 4, type: "next" },{ date: 5, type: "next" },{ date: 6, type: "next" },{ date: 7, type: "next" },{ date: 8, type: "next" },{ date: 9, type: "next" }
  ];
  expect(actual).toEqual(expected);

  return sut
    .getDatesWithMetadataAsync(may2018)
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

test("Date Matrix with Metadata for April of 2018", () => {
  const actual = sut.getDateMatrixWithMetadata(april2018);
  // prettier-ignore
  const expected = [
    [{date: 1, type: 'current'}, {date: 2, type: 'current'}, {date: 3, type: 'current'}, {date: 4, type: 'current'}, {date: 5, type: 'current'}, {date: 6, type: 'current'}, {date: 7, type: 'current'}], 
    [{date: 8, type: 'current'}, {date: 9, type: 'current'}, {date: 10, type: 'current'}, {date: 11, type: 'current'}, {date: 12, type: 'current'}, {date: 13, type: 'current'}, {date: 14, type: 'current'}], 
    [{date: 15, type: 'current'}, {date: 16, type: 'current'}, {date: 17, type: 'current'}, {date: 18, type: 'current'}, {date: 19, type: 'current'}, {date: 20, type: 'current'}, {date: 21, type: 'current'}], 
    [{date: 22, type: 'current'}, {date: 23, type: 'current'}, {date: 24, type: 'current'}, {date: 25, type: 'current'}, {date: 26, type: 'current'}, {date: 27, type: 'current'}, {date: 28, type: 'current'}], 
    [{date: 29, type: 'current'}, {date: 30, type: 'current'}, {date: 1, type: 'next'}, {date: 2, type: 'next'}, {date: 3, type: 'next'}, {date: 4, type: 'next'}, {date: 5, type: 'next'}], 
    [{date: 6, type: 'next'}, {date: 7, type: 'next'}, {date: 8, type: 'next'}, {date: 9, type: 'next'}, {date: 10, type: 'next'}, {date: 11, type: 'next'}, {date: 12, type: 'next'}]
  ];

  expect(actual).toEqual(expected);

  return sut
    .getDateMatrixWithMetadataAsync(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix with Metadata for May of 2018", () => {
  const actual = sut.getDateMatrixWithMetadata(may2018);
  // prettier-ignore
  const expected = [
    [{ date: 29, type: "previous" },{ date: 30, type: "previous" },{ date: 1, type: "current" },{ date: 2, type: "current" },{ date: 3, type: "current" },{ date: 4, type: "current" },{ date: 5, type: "current" }],
    [{ date: 6, type: "current" },{ date: 7, type: "current" },{ date: 8, type: "current" },{ date: 9, type: "current" },{ date: 10, type: "current" },{ date: 11, type: "current" },{ date: 12, type: "current" }],
    [{ date: 13, type: "current" },{ date: 14, type: "current" },{ date: 15, type: "current" },{ date: 16, type: "current" },{ date: 17, type: "current" },{ date: 18, type: "current" },{ date: 19, type: "current" }],
    [{ date: 20, type: "current" },{ date: 21, type: "current" },{ date: 22, type: "current" },{ date: 23, type: "current" },{ date: 24, type: "current" },{ date: 25, type: "current" },{ date: 26, type: "current" }],
    [{ date: 27, type: "current" },{ date: 28, type: "current" },{ date: 29, type: "current" },{ date: 30, type: "current" },{ date: 31, type: "current" },{ date: 1, type: "next" },{ date: 2, type: "next" }],
    [{ date: 3, type: "next" },{ date: 4, type: "next" },{ date: 5, type: "next" },{ date: 6, type: "next" },{ date: 7, type: "next" },{ date: 8, type: "next" },{ date: 9, type: "next" }]
  ];

  expect(actual).toEqual(expected);

  return sut
    .getDateMatrixWithMetadataAsync(may2018)
    .then(actual => expect(actual).toEqual(expected));
});
