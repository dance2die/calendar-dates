const CalendarDates = require("../dist/calendardates.cjs");
// "sut" means "System Under Test".
const sut = new CalendarDates();

const april2018 = new Date(2018, 3);
const may2018 = new Date(2018, 4);

test("Dates with Metadata for April of 2018", () => {
  // prettier-ignore
  const expected = [
    {date: 1, type: 'current'}, {date: 2, type: 'current'}, {date: 3, type: 'current'}, {date: 4, type: 'current'}, {date: 5, type: 'current'}, {date: 6, type: 'current'}, {date: 7, type: 'current'}, 
    {date: 8, type: 'current'}, {date: 9, type: 'current'}, {date: 10, type: 'current'}, {date: 11, type: 'current'}, {date: 12, type: 'current'}, {date: 13, type: 'current'}, {date: 14, type: 'current'}, 
    {date: 15, type: 'current'}, {date: 16, type: 'current'}, {date: 17, type: 'current'}, {date: 18, type: 'current'}, {date: 19, type: 'current'}, {date: 20, type: 'current'}, {date: 21, type: 'current'}, 
    {date: 22, type: 'current'}, {date: 23, type: 'current'}, {date: 24, type: 'current'}, {date: 25, type: 'current'}, {date: 26, type: 'current'}, {date: 27, type: 'current'}, {date: 28, type: 'current'}, 
    {date: 29, type: 'current'}, {date: 30, type: 'current'}, {date: 1, type: 'next'}, {date: 2, type: 'next'}, {date: 3, type: 'next'}, {date: 4, type: 'next'}, {date: 5, type: 'next'}, 
    {date: 6, type: 'next'}, {date: 7, type: 'next'}, {date: 8, type: 'next'}, {date: 9, type: 'next'}, {date: 10, type: 'next'}, {date: 11, type: 'next'}, {date: 12, type: 'next'}];

  return sut
    .getDates(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Dates with Metadata for May of 2018", () => {
  // prettier-ignore
  const expected = [
    { date: 29, type: "previous" },{ date: 30, type: "previous" },{ date: 1, type: "current" },{ date: 2, type: "current" },{ date: 3, type: "current" },{ date: 4, type: "current" },{ date: 5, type: "current" },
    { date: 6, type: "current" },{ date: 7, type: "current" },{ date: 8, type: "current" },{ date: 9, type: "current" },{ date: 10, type: "current" },{ date: 11, type: "current" },{ date: 12, type: "current" },
    { date: 13, type: "current" },{ date: 14, type: "current" },{ date: 15, type: "current" },{ date: 16, type: "current" },{ date: 17, type: "current" },{ date: 18, type: "current" },{ date: 19, type: "current" },
    { date: 20, type: "current" },{ date: 21, type: "current" },{ date: 22, type: "current" },{ date: 23, type: "current" },{ date: 24, type: "current" },{ date: 25, type: "current" },{ date: 26, type: "current" },
    { date: 27, type: "current" },{ date: 28, type: "current" },{ date: 29, type: "current" },{ date: 30, type: "current" },{ date: 31, type: "current" },{ date: 1, type: "next" },{ date: 2, type: "next" },
    { date: 3, type: "next" },{ date: 4, type: "next" },{ date: 5, type: "next" },{ date: 6, type: "next" },{ date: 7, type: "next" },{ date: 8, type: "next" },{ date: 9, type: "next" }
  ];

  return sut.getDates(may2018).then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix with Metadata for April of 2018", () => {
  // prettier-ignore
  const expected = [
    [{date: 1, type: 'current'}, {date: 2, type: 'current'}, {date: 3, type: 'current'}, {date: 4, type: 'current'}, {date: 5, type: 'current'}, {date: 6, type: 'current'}, {date: 7, type: 'current'}], 
    [{date: 8, type: 'current'}, {date: 9, type: 'current'}, {date: 10, type: 'current'}, {date: 11, type: 'current'}, {date: 12, type: 'current'}, {date: 13, type: 'current'}, {date: 14, type: 'current'}], 
    [{date: 15, type: 'current'}, {date: 16, type: 'current'}, {date: 17, type: 'current'}, {date: 18, type: 'current'}, {date: 19, type: 'current'}, {date: 20, type: 'current'}, {date: 21, type: 'current'}], 
    [{date: 22, type: 'current'}, {date: 23, type: 'current'}, {date: 24, type: 'current'}, {date: 25, type: 'current'}, {date: 26, type: 'current'}, {date: 27, type: 'current'}, {date: 28, type: 'current'}], 
    [{date: 29, type: 'current'}, {date: 30, type: 'current'}, {date: 1, type: 'next'}, {date: 2, type: 'next'}, {date: 3, type: 'next'}, {date: 4, type: 'next'}, {date: 5, type: 'next'}], 
    [{date: 6, type: 'next'}, {date: 7, type: 'next'}, {date: 8, type: 'next'}, {date: 9, type: 'next'}, {date: 10, type: 'next'}, {date: 11, type: 'next'}, {date: 12, type: 'next'}]
  ];

  return sut
    .getMatrix(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix with Metadata for May of 2018", () => {
  // prettier-ignore
  const expected = [
    [{ date: 29, type: "previous" },{ date: 30, type: "previous" },{ date: 1, type: "current" },{ date: 2, type: "current" },{ date: 3, type: "current" },{ date: 4, type: "current" },{ date: 5, type: "current" }],
    [{ date: 6, type: "current" },{ date: 7, type: "current" },{ date: 8, type: "current" },{ date: 9, type: "current" },{ date: 10, type: "current" },{ date: 11, type: "current" },{ date: 12, type: "current" }],
    [{ date: 13, type: "current" },{ date: 14, type: "current" },{ date: 15, type: "current" },{ date: 16, type: "current" },{ date: 17, type: "current" },{ date: 18, type: "current" },{ date: 19, type: "current" }],
    [{ date: 20, type: "current" },{ date: 21, type: "current" },{ date: 22, type: "current" },{ date: 23, type: "current" },{ date: 24, type: "current" },{ date: 25, type: "current" },{ date: 26, type: "current" }],
    [{ date: 27, type: "current" },{ date: 28, type: "current" },{ date: 29, type: "current" },{ date: 30, type: "current" },{ date: 31, type: "current" },{ date: 1, type: "next" },{ date: 2, type: "next" }],
    [{ date: 3, type: "next" },{ date: 4, type: "next" },{ date: 5, type: "next" },{ date: 6, type: "next" },{ date: 7, type: "next" },{ date: 8, type: "next" },{ date: 9, type: "next" }]
  ];

  return sut
    .getMatrix(may2018)
    .then(actual => expect(actual).toEqual(expected));
});
