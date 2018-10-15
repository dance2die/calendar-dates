[![NPM](https://nodei.co/npm/calendar-dates.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/calendar-dates/)

## ❓ What is this?

Get a list of calendar dates.  
**without an External Dependency**

You can use this to create your own calendar controls

## 🗜️ Installation

```bash
npm i calendar-dates
# or
yarn add calendar-dates
```

## How to use it

Full [documentation](https://dance2die.github.io/calendar-dates/).

## Change Log

### 2.4.0  
Fixed [ISO8601 date](https://github.com/dance2die/calendar-dates/pull/21) return value to match current date.  
* Thank you again [ewolfe](https://github.com/ewolfe) 👊.

### 2.3.0
1. Returns [ISO8601 date](https://github.com/dance2die/calendar-dates/pull/19).  
    * Thank you [ewolfe](https://github.com/ewolfe) 🙌.
1. Removed `package-lock.json`, which was accidentally added by using `npm` instead of `yarn`.

### 2.0.0
Removed all methods except two methods, which return a promise.

1.  getDates(date)
1.  getMatrix(date)

Following methods are removed

1.  getDatesAsync
1.  getMatrixAsync
1.  getDatesWithMetadata
1.  getDatesWithMetadataAsync
1.  getMatrixWithMetadata
1.  getMatrixWithMetadataAsync

### 1.1.2  
Updated README to include `*WithMetadata` examples

### 1.1.1  
Fixed runtimeGenerator issue

### 1.1.0  
Added `*WithMetadata` methods

### 1.0.0
Added "\*Async" versions

## License

[MIT](https://github.com/dance2die/calendar-dates/blob/master/LICENSE)  
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdance2die%2Fcalendar-dates?ref=badge_large)