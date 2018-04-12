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

### How to use this

```bash
const CalendarDates = require("calendar-dates");
const calendarDates = new CalendarDates();

const l = console.log;

// const dates = calendarDates.getDates(new Date());
l(calendarDates.getDates(new Date()).join(","));
l(calendarDates.getDates(new Date(2018, 2)).join(","));
```

##### Result

```bash
dance2die@CC c:\misc\sources\throwaway\calendartest
> node index.js
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12
25,26,27,28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7
```
