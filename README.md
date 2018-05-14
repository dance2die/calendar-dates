### What is this?

Get a list of calendar dates.  
**without an External Dependency**

You can use this to create your own calendar controls

### Installation

```bash
npm i calendar-dates
# or
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates?ref=badge_shield)

yarn add calendar-dates
```

### How to use

#### CommonJS

```bash
const CalendarDates = require("calendar-dates");
const calendarDates = new CalendarDates();

const l = console.log;
const april2018 = new Date(2018, 3);
const may2018 = new Date(2018, 4);

// Synchronous version
l(`April, 2018 = ${calendarDates.getDates(april2018).join(",")}`);
l(calendarDates.getDateMatrix(april2018));

l(`May, 2018 = ${calendarDates.getDates(may2018).join(",")}`);
l(calendarDates.getDateMatrix(new Date(2018, 4)));


// Asynchronous version
calendarDates.getDatesAsync(april2018).then(dates =>
  l(`April, 2018 = ${dates.join(",")});
);
calendarDates.getDateMatrix(april2018).then(matrix => l(matrix));

calendarDates.getDatesAsync(may2018).then(dates =>
  l(`May, 2018 = ${dates.join(",")});
);
calendarDates.getDateMatrix(may2018).then(matrix => l(matrix));
```

##### Result (for both sync/async versions)

```bash
dance2die@CC c:\misc\sources\throwaway\calendartest
> node index.js
April, 2018 = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12
[ [ 1, 2, 3, 4, 5, 6, 7 ],
  [ 8, 9, 10, 11, 12, 13, 14 ],
  [ 15, 16, 17, 18, 19, 20, 21 ],
  [ 22, 23, 24, 25, 26, 27, 28 ],
  [ 29, 30, 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10, 11, 12 ] ]
May, 2018 = 29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9
[ [ 29, 30, 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10, 11, 12 ],
  [ 13, 14, 15, 16, 17, 18, 19 ],
  [ 20, 21, 22, 23, 24, 25, 26 ],
  [ 27, 28, 29, 30, 31, 1, 2 ],
  [ 3, 4, 5, 6, 7, 8, 9 ] ]
```

#### ES6 Module

`index.html`

```html
<html>

<head>
    <title>Testing Calendar-Dates</title>
</head>

<body>
    <h1>Testing calendar-dates</h1>
    <script src="app.js"></script>
</body>

</html>
```

`app.js`

```javascript
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

const l = console.log;

l(`April, 2018 = ${calendarDates.getDates(new Date(2018, 3)).join(",")}`);
l(calendarDates.getDateMatrix(new Date(2018, 3)));

l(`May, 2018 = ${calendarDates.getDates(new Date(2018, 4)).join(",")}`);
l(calendarDates.getDateMatrix(new Date(2018, 4)));
```

#### Result

In a browser.

```bash
April, 2018 = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12
f5e330e6f0c6cbbb077bf2a2385cc536.js:87:1
[…]
​
0: Array [ 1, 2, 3, … ]
​1: Array [ 8, 9, 10, … ]
​2: Array [ 15, 16, 17, … ]
​3: Array [ 22, 23, 24, … ]
​4: Array [ 29, 30, 1, … ]
​5: Array [ 6, 7, 8, … ]
​length: 6
​__proto__: Array []
f5e330e6f0c6cbbb077bf2a2385cc536.js:88:1

May, 2018 = 29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9
f5e330e6f0c6cbbb077bf2a2385cc536.js:90:1
[…]
​
0: Array [ 29, 30, 1, … ]
1: Array [ 6, 7, 8, … ]
2: Array [ 13, 14, 15, … ]
3: Array [ 20, 21, 22, … ]
4: Array [ 27, 28, 29, … ]
5: Array [ 3, 4, 5, … ]
length: 6
__proto__: Array []
```

### Changelog

1.0.0

* Added "\*Async" versions


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates?ref=badge_large)