const CalendarDates = require("../dist/calendardates.cjs");
// "sut" means "System Under Test".
const sut = new CalendarDates();

const april2018 = new Date(2018, 3);
const may2018 = new Date(2018, 4);

test("Dates with Metadata for April of 2018", () => {
  const expected = [
    { date: 1, iso: "2018-04-01", type: "current" },
    { date: 2, iso: "2018-04-02", type: "current" },
    { date: 3, iso: "2018-04-03", type: "current" },
    { date: 4, iso: "2018-04-04", type: "current" },
    { date: 5, iso: "2018-04-05", type: "current" },
    { date: 6, iso: "2018-04-06", type: "current" },
    { date: 7, iso: "2018-04-07", type: "current" },
    { date: 8, iso: "2018-04-08", type: "current" },
    { date: 9, iso: "2018-04-09", type: "current" },
    { date: 10, iso: "2018-04-10", type: "current" },
    { date: 11, iso: "2018-04-11", type: "current" },
    { date: 12, iso: "2018-04-12", type: "current" },
    { date: 13, iso: "2018-04-13", type: "current" },
    { date: 14, iso: "2018-04-14", type: "current" },
    { date: 15, iso: "2018-04-15", type: "current" },
    { date: 16, iso: "2018-04-16", type: "current" },
    { date: 17, iso: "2018-04-17", type: "current" },
    { date: 18, iso: "2018-04-18", type: "current" },
    { date: 19, iso: "2018-04-19", type: "current" },
    { date: 20, iso: "2018-04-20", type: "current" },
    { date: 21, iso: "2018-04-21", type: "current" },
    { date: 22, iso: "2018-04-22", type: "current" },
    { date: 23, iso: "2018-04-23", type: "current" },
    { date: 24, iso: "2018-04-24", type: "current" },
    { date: 25, iso: "2018-04-25", type: "current" },
    { date: 26, iso: "2018-04-26", type: "current" },
    { date: 27, iso: "2018-04-27", type: "current" },
    { date: 28, iso: "2018-04-28", type: "current" },
    { date: 29, iso: "2018-04-29", type: "current" },
    { date: 30, iso: "2018-04-30", type: "current" },
    { date: 1, iso: "2018-05-01", type: "next" },
    { date: 2, iso: "2018-05-02", type: "next" },
    { date: 3, iso: "2018-05-03", type: "next" },
    { date: 4, iso: "2018-05-04", type: "next" },
    { date: 5, iso: "2018-05-05", type: "next" },
    { date: 6, iso: "2018-05-06", type: "next" },
    { date: 7, iso: "2018-05-07", type: "next" },
    { date: 8, iso: "2018-05-08", type: "next" },
    { date: 9, iso: "2018-05-09", type: "next" },
    { date: 10, iso: "2018-05-10", type: "next" },
    { date: 11, iso: "2018-05-11", type: "next" },
    { date: 12, iso: "2018-05-12", type: "next" }
  ];

  const actual = sut.getDates(april2018);
  expect(actual).toEqual(expected);
});

test("Dates with Metadata for May of 2018", () => {
  const expected = [
    { date: 29, iso: "2018-04-29", type: "previous" },
    { date: 30, iso: "2018-04-30", type: "previous" },
    { date: 1, iso: "2018-05-01", type: "current" },
    { date: 2, iso: "2018-05-02", type: "current" },
    { date: 3, iso: "2018-05-03", type: "current" },
    { date: 4, iso: "2018-05-04", type: "current" },
    { date: 5, iso: "2018-05-05", type: "current" },
    { date: 6, iso: "2018-05-06", type: "current" },
    { date: 7, iso: "2018-05-07", type: "current" },
    { date: 8, iso: "2018-05-08", type: "current" },
    { date: 9, iso: "2018-05-09", type: "current" },
    { date: 10, iso: "2018-05-10", type: "current" },
    { date: 11, iso: "2018-05-11", type: "current" },
    { date: 12, iso: "2018-05-12", type: "current" },
    { date: 13, iso: "2018-05-13", type: "current" },
    { date: 14, iso: "2018-05-14", type: "current" },
    { date: 15, iso: "2018-05-15", type: "current" },
    { date: 16, iso: "2018-05-16", type: "current" },
    { date: 17, iso: "2018-05-17", type: "current" },
    { date: 18, iso: "2018-05-18", type: "current" },
    { date: 19, iso: "2018-05-19", type: "current" },
    { date: 20, iso: "2018-05-20", type: "current" },
    { date: 21, iso: "2018-05-21", type: "current" },
    { date: 22, iso: "2018-05-22", type: "current" },
    { date: 23, iso: "2018-05-23", type: "current" },
    { date: 24, iso: "2018-05-24", type: "current" },
    { date: 25, iso: "2018-05-25", type: "current" },
    { date: 26, iso: "2018-05-26", type: "current" },
    { date: 27, iso: "2018-05-27", type: "current" },
    { date: 28, iso: "2018-05-28", type: "current" },
    { date: 29, iso: "2018-05-29", type: "current" },
    { date: 30, iso: "2018-05-30", type: "current" },
    { date: 31, iso: "2018-05-31", type: "current" },
    { date: 1, iso: "2018-06-01", type: "next" },
    { date: 2, iso: "2018-06-02", type: "next" },
    { date: 3, iso: "2018-06-03", type: "next" },
    { date: 4, iso: "2018-06-04", type: "next" },
    { date: 5, iso: "2018-06-05", type: "next" },
    { date: 6, iso: "2018-06-06", type: "next" },
    { date: 7, iso: "2018-06-07", type: "next" },
    { date: 8, iso: "2018-06-08", type: "next" },
    { date: 9, iso: "2018-06-09", type: "next" }
  ];

  const actual = sut.getDates(may2018);
  expect(actual).toEqual(expected);
});

test("Date Matrix with Metadata for April of 2018", () => {
  const expected = [
    [
      { date: 1, iso: "2018-04-01", type: "current" },
      { date: 2, iso: "2018-04-02", type: "current" },
      { date: 3, iso: "2018-04-03", type: "current" },
      { date: 4, iso: "2018-04-04", type: "current" },
      { date: 5, iso: "2018-04-05", type: "current" },
      { date: 6, iso: "2018-04-06", type: "current" },
      { date: 7, iso: "2018-04-07", type: "current" }
    ],
    [
      { date: 8, iso: "2018-04-08", type: "current" },
      { date: 9, iso: "2018-04-09", type: "current" },
      { date: 10, iso: "2018-04-10", type: "current" },
      { date: 11, iso: "2018-04-11", type: "current" },
      { date: 12, iso: "2018-04-12", type: "current" },
      { date: 13, iso: "2018-04-13", type: "current" },
      { date: 14, iso: "2018-04-14", type: "current" }
    ],
    [
      { date: 15, iso: "2018-04-15", type: "current" },
      { date: 16, iso: "2018-04-16", type: "current" },
      { date: 17, iso: "2018-04-17", type: "current" },
      { date: 18, iso: "2018-04-18", type: "current" },
      { date: 19, iso: "2018-04-19", type: "current" },
      { date: 20, iso: "2018-04-20", type: "current" },
      { date: 21, iso: "2018-04-21", type: "current" }
    ],
    [
      { date: 22, iso: "2018-04-22", type: "current" },
      { date: 23, iso: "2018-04-23", type: "current" },
      { date: 24, iso: "2018-04-24", type: "current" },
      { date: 25, iso: "2018-04-25", type: "current" },
      { date: 26, iso: "2018-04-26", type: "current" },
      { date: 27, iso: "2018-04-27", type: "current" },
      { date: 28, iso: "2018-04-28", type: "current" }
    ],
    [
      { date: 29, iso: "2018-04-29", type: "current" },
      { date: 30, iso: "2018-04-30", type: "current" },
      { date: 1, iso: "2018-05-01", type: "next" },
      { date: 2, iso: "2018-05-02", type: "next" },
      { date: 3, iso: "2018-05-03", type: "next" },
      { date: 4, iso: "2018-05-04", type: "next" },
      { date: 5, iso: "2018-05-05", type: "next" }
    ],
    [
      { date: 6, iso: "2018-05-06", type: "next" },
      { date: 7, iso: "2018-05-07", type: "next" },
      { date: 8, iso: "2018-05-08", type: "next" },
      { date: 9, iso: "2018-05-09", type: "next" },
      { date: 10, iso: "2018-05-10", type: "next" },
      { date: 11, iso: "2018-05-11", type: "next" },
      { date: 12, iso: "2018-05-12", type: "next" }
    ]
  ];

  const actual = sut.getMatrix(april2018);
  expect(actual).toEqual(expected);
});

test("Date Matrix with Metadata for May of 2018", () => {
  const expected = [
    [
      { date: 29, iso: "2018-04-29", type: "previous" },
      { date: 30, iso: "2018-04-30", type: "previous" },
      { date: 1, iso: "2018-05-01", type: "current" },
      { date: 2, iso: "2018-05-02", type: "current" },
      { date: 3, iso: "2018-05-03", type: "current" },
      { date: 4, iso: "2018-05-04", type: "current" },
      { date: 5, iso: "2018-05-05", type: "current" }
    ],
    [
      { date: 6, iso: "2018-05-06", type: "current" },
      { date: 7, iso: "2018-05-07", type: "current" },
      { date: 8, iso: "2018-05-08", type: "current" },
      { date: 9, iso: "2018-05-09", type: "current" },
      { date: 10, iso: "2018-05-10", type: "current" },
      { date: 11, iso: "2018-05-11", type: "current" },
      { date: 12, iso: "2018-05-12", type: "current" }
    ],
    [
      { date: 13, iso: "2018-05-13", type: "current" },
      { date: 14, iso: "2018-05-14", type: "current" },
      { date: 15, iso: "2018-05-15", type: "current" },
      { date: 16, iso: "2018-05-16", type: "current" },
      { date: 17, iso: "2018-05-17", type: "current" },
      { date: 18, iso: "2018-05-18", type: "current" },
      { date: 19, iso: "2018-05-19", type: "current" }
    ],
    [
      { date: 20, iso: "2018-05-20", type: "current" },
      { date: 21, iso: "2018-05-21", type: "current" },
      { date: 22, iso: "2018-05-22", type: "current" },
      { date: 23, iso: "2018-05-23", type: "current" },
      { date: 24, iso: "2018-05-24", type: "current" },
      { date: 25, iso: "2018-05-25", type: "current" },
      { date: 26, iso: "2018-05-26", type: "current" }
    ],
    [
      { date: 27, iso: "2018-05-27", type: "current" },
      { date: 28, iso: "2018-05-28", type: "current" },
      { date: 29, iso: "2018-05-29", type: "current" },
      { date: 30, iso: "2018-05-30", type: "current" },
      { date: 31, iso: "2018-05-31", type: "current" },
      { date: 1, iso: "2018-06-01", type: "next" },
      { date: 2, iso: "2018-06-02", type: "next" }
    ],
    [
      { date: 3, iso: "2018-06-03", type: "next" },
      { date: 4, iso: "2018-06-04", type: "next" },
      { date: 5, iso: "2018-06-05", type: "next" },
      { date: 6, iso: "2018-06-06", type: "next" },
      { date: 7, iso: "2018-06-07", type: "next" },
      { date: 8, iso: "2018-06-08", type: "next" },
      { date: 9, iso: "2018-06-09", type: "next" }
    ]
  ];

  const actual = sut.getMatrix(may2018);
  expect(actual).toEqual(expected);
});
