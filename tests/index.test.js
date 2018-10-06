const CalendarDates = require("../dist/calendardates.cjs");
// "sut" means "System Under Test".
const sut = new CalendarDates();

const april2018 = new Date(2018, 3);
const may2018 = new Date(2018, 4);

test("Dates with Metadata for April of 2018", () => {
  const expected = [
    { date: 1, iso: "2018-04-01", type: "current" },
    { date: 2, iso: "2018-04-01", type: "current" },
    { date: 3, iso: "2018-04-01", type: "current" },
    { date: 4, iso: "2018-04-01", type: "current" },
    { date: 5, iso: "2018-04-01", type: "current" },
    { date: 6, iso: "2018-04-01", type: "current" },
    { date: 7, iso: "2018-04-01", type: "current" },
    { date: 8, iso: "2018-04-01", type: "current" },
    { date: 9, iso: "2018-04-01", type: "current" },
    { date: 10, iso: "2018-04-01", type: "current" },
    { date: 11, iso: "2018-04-01", type: "current" },
    { date: 12, iso: "2018-04-01", type: "current" },
    { date: 13, iso: "2018-04-01", type: "current" },
    { date: 14, iso: "2018-04-01", type: "current" },
    { date: 15, iso: "2018-04-01", type: "current" },
    { date: 16, iso: "2018-04-01", type: "current" },
    { date: 17, iso: "2018-04-01", type: "current" },
    { date: 18, iso: "2018-04-01", type: "current" },
    { date: 19, iso: "2018-04-01", type: "current" },
    { date: 20, iso: "2018-04-01", type: "current" },
    { date: 21, iso: "2018-04-01", type: "current" },
    { date: 22, iso: "2018-04-01", type: "current" },
    { date: 23, iso: "2018-04-01", type: "current" },
    { date: 24, iso: "2018-04-01", type: "current" },
    { date: 25, iso: "2018-04-01", type: "current" },
    { date: 26, iso: "2018-04-01", type: "current" },
    { date: 27, iso: "2018-04-01", type: "current" },
    { date: 28, iso: "2018-04-01", type: "current" },
    { date: 29, iso: "2018-04-01", type: "current" },
    { date: 30, iso: "2018-04-01", type: "current" },
    { date: 1, iso: "2018-04-01", type: "next" },
    { date: 2, iso: "2018-04-01", type: "next" },
    { date: 3, iso: "2018-04-01", type: "next" },
    { date: 4, iso: "2018-04-01", type: "next" },
    { date: 5, iso: "2018-04-01", type: "next" },
    { date: 6, iso: "2018-04-01", type: "next" },
    { date: 7, iso: "2018-04-01", type: "next" },
    { date: 8, iso: "2018-04-01", type: "next" },
    { date: 9, iso: "2018-04-01", type: "next" },
    { date: 10, iso: "2018-04-01", type: "next" },
    { date: 11, iso: "2018-04-01", type: "next" },
    { date: 12, iso: "2018-04-01", type: "next" }
  ];

  return sut
    .getDates(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Dates with Metadata for May of 2018", () => {
  const expected = [
    { date: 29, iso: "2018-05-01", type: "previous" },
    { date: 30, iso: "2018-05-01", type: "previous" },
    { date: 1, iso: "2018-05-01", type: "current" },
    { date: 2, iso: "2018-05-01", type: "current" },
    { date: 3, iso: "2018-05-01", type: "current" },
    { date: 4, iso: "2018-05-01", type: "current" },
    { date: 5, iso: "2018-05-01", type: "current" },
    { date: 6, iso: "2018-05-01", type: "current" },
    { date: 7, iso: "2018-05-01", type: "current" },
    { date: 8, iso: "2018-05-01", type: "current" },
    { date: 9, iso: "2018-05-01", type: "current" },
    { date: 10, iso: "2018-05-01", type: "current" },
    { date: 11, iso: "2018-05-01", type: "current" },
    { date: 12, iso: "2018-05-01", type: "current" },
    { date: 13, iso: "2018-05-01", type: "current" },
    { date: 14, iso: "2018-05-01", type: "current" },
    { date: 15, iso: "2018-05-01", type: "current" },
    { date: 16, iso: "2018-05-01", type: "current" },
    { date: 17, iso: "2018-05-01", type: "current" },
    { date: 18, iso: "2018-05-01", type: "current" },
    { date: 19, iso: "2018-05-01", type: "current" },
    { date: 20, iso: "2018-05-01", type: "current" },
    { date: 21, iso: "2018-05-01", type: "current" },
    { date: 22, iso: "2018-05-01", type: "current" },
    { date: 23, iso: "2018-05-01", type: "current" },
    { date: 24, iso: "2018-05-01", type: "current" },
    { date: 25, iso: "2018-05-01", type: "current" },
    { date: 26, iso: "2018-05-01", type: "current" },
    { date: 27, iso: "2018-05-01", type: "current" },
    { date: 28, iso: "2018-05-01", type: "current" },
    { date: 29, iso: "2018-05-01", type: "current" },
    { date: 30, iso: "2018-05-01", type: "current" },
    { date: 31, iso: "2018-05-01", type: "current" },
    { date: 1, iso: "2018-05-01", type: "next" },
    { date: 2, iso: "2018-05-01", type: "next" },
    { date: 3, iso: "2018-05-01", type: "next" },
    { date: 4, iso: "2018-05-01", type: "next" },
    { date: 5, iso: "2018-05-01", type: "next" },
    { date: 6, iso: "2018-05-01", type: "next" },
    { date: 7, iso: "2018-05-01", type: "next" },
    { date: 8, iso: "2018-05-01", type: "next" },
    { date: 9, iso: "2018-05-01", type: "next" }
  ];

  return sut.getDates(may2018).then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix with Metadata for April of 2018", () => {
  const expected = [
    [
      { date: 1, iso: "2018-04-01", type: "current" },
      { date: 2, iso: "2018-04-01", type: "current" },
      { date: 3, iso: "2018-04-01", type: "current" },
      { date: 4, iso: "2018-04-01", type: "current" },
      { date: 5, iso: "2018-04-01", type: "current" },
      { date: 6, iso: "2018-04-01", type: "current" },
      { date: 7, iso: "2018-04-01", type: "current" }
    ],
    [
      { date: 8, iso: "2018-04-01", type: "current" },
      { date: 9, iso: "2018-04-01", type: "current" },
      { date: 10, iso: "2018-04-01", type: "current" },
      { date: 11, iso: "2018-04-01", type: "current" },
      { date: 12, iso: "2018-04-01", type: "current" },
      { date: 13, iso: "2018-04-01", type: "current" },
      { date: 14, iso: "2018-04-01", type: "current" }
    ],
    [
      { date: 15, iso: "2018-04-01", type: "current" },
      { date: 16, iso: "2018-04-01", type: "current" },
      { date: 17, iso: "2018-04-01", type: "current" },
      { date: 18, iso: "2018-04-01", type: "current" },
      { date: 19, iso: "2018-04-01", type: "current" },
      { date: 20, iso: "2018-04-01", type: "current" },
      { date: 21, iso: "2018-04-01", type: "current" }
    ],
    [
      { date: 22, iso: "2018-04-01", type: "current" },
      { date: 23, iso: "2018-04-01", type: "current" },
      { date: 24, iso: "2018-04-01", type: "current" },
      { date: 25, iso: "2018-04-01", type: "current" },
      { date: 26, iso: "2018-04-01", type: "current" },
      { date: 27, iso: "2018-04-01", type: "current" },
      { date: 28, iso: "2018-04-01", type: "current" }
    ],
    [
      { date: 29, iso: "2018-04-01", type: "current" },
      { date: 30, iso: "2018-04-01", type: "current" },
      { date: 1, iso: "2018-04-01", type: "next" },
      { date: 2, iso: "2018-04-01", type: "next" },
      { date: 3, iso: "2018-04-01", type: "next" },
      { date: 4, iso: "2018-04-01", type: "next" },
      { date: 5, iso: "2018-04-01", type: "next" }
    ],
    [
      { date: 6, iso: "2018-04-01", type: "next" },
      { date: 7, iso: "2018-04-01", type: "next" },
      { date: 8, iso: "2018-04-01", type: "next" },
      { date: 9, iso: "2018-04-01", type: "next" },
      { date: 10, iso: "2018-04-01", type: "next" },
      { date: 11, iso: "2018-04-01", type: "next" },
      { date: 12, iso: "2018-04-01", type: "next" }
    ]
  ];

  return sut
    .getMatrix(april2018)
    .then(actual => expect(actual).toEqual(expected));
});

test("Date Matrix with Metadata for May of 2018", () => {
  const expected = [
    [
      { date: 29, iso: "2018-05-01", type: "previous" },
      { date: 30, iso: "2018-05-01", type: "previous" },
      { date: 1, iso: "2018-05-01", type: "current" },
      { date: 2, iso: "2018-05-01", type: "current" },
      { date: 3, iso: "2018-05-01", type: "current" },
      { date: 4, iso: "2018-05-01", type: "current" },
      { date: 5, iso: "2018-05-01", type: "current" }
    ],
    [
      { date: 6, iso: "2018-05-01", type: "current" },
      { date: 7, iso: "2018-05-01", type: "current" },
      { date: 8, iso: "2018-05-01", type: "current" },
      { date: 9, iso: "2018-05-01", type: "current" },
      { date: 10, iso: "2018-05-01", type: "current" },
      { date: 11, iso: "2018-05-01", type: "current" },
      { date: 12, iso: "2018-05-01", type: "current" }
    ],
    [
      { date: 13, iso: "2018-05-01", type: "current" },
      { date: 14, iso: "2018-05-01", type: "current" },
      { date: 15, iso: "2018-05-01", type: "current" },
      { date: 16, iso: "2018-05-01", type: "current" },
      { date: 17, iso: "2018-05-01", type: "current" },
      { date: 18, iso: "2018-05-01", type: "current" },
      { date: 19, iso: "2018-05-01", type: "current" }
    ],
    [
      { date: 20, iso: "2018-05-01", type: "current" },
      { date: 21, iso: "2018-05-01", type: "current" },
      { date: 22, iso: "2018-05-01", type: "current" },
      { date: 23, iso: "2018-05-01", type: "current" },
      { date: 24, iso: "2018-05-01", type: "current" },
      { date: 25, iso: "2018-05-01", type: "current" },
      { date: 26, iso: "2018-05-01", type: "current" }
    ],
    [
      { date: 27, iso: "2018-05-01", type: "current" },
      { date: 28, iso: "2018-05-01", type: "current" },
      { date: 29, iso: "2018-05-01", type: "current" },
      { date: 30, iso: "2018-05-01", type: "current" },
      { date: 31, iso: "2018-05-01", type: "current" },
      { date: 1, iso: "2018-05-01", type: "next" },
      { date: 2, iso: "2018-05-01", type: "next" }
    ],
    [
      { date: 3, iso: "2018-05-01", type: "next" },
      { date: 4, iso: "2018-05-01", type: "next" },
      { date: 5, iso: "2018-05-01", type: "next" },
      { date: 6, iso: "2018-05-01", type: "next" },
      { date: 7, iso: "2018-05-01", type: "next" },
      { date: 8, iso: "2018-05-01", type: "next" },
      { date: 9, iso: "2018-05-01", type: "next" }
    ]
  ];

  return sut
    .getMatrix(may2018)
    .then(actual => expect(actual).toEqual(expected));
});
