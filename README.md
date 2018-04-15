### What is this?

Get a list of calendar dates.  
This is to be used mainly for Calendar control developers.

This library is not yet tested.  
Very Alpha-ish release.  
I will be adding some tests while learning Jest later on.

### Installation

```bash
npm i calendar-dates
# or
yarn add calendar-dates
```

### How to use

#### CommonJS

```bash
const CalendarDates = require("calendar-dates");
const calendarDates = new CalendarDates();

const l = console.log;

l(`April, 2018 = ${calendarDates.getDates(new Date(2018, 3)).join(",")}`);
l(calendarDates.getDateMatrix(new Date(2018, 3)));

l(`May, 2018 = ${calendarDates.getDates(new Date(2018, 4)).join(",")}`);
l(calendarDates.getDateMatrix(new Date(2018, 4)));
```

##### Result

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
