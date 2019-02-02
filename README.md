[![NPM](https://nodei.co/npm/calendar-dates.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/calendar-dates/)

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
![Minzipped Size](https://img.shields.io/bundlephobia/minzip/calendar-dates.svg?style=flat)
![Minified Size](https://img.shields.io/bundlephobia/min/calendar-dates.svg?style=flat)  
[![Maintainability](https://api.codeclimate.com/v1/badges/1e673aa4287e0e938a90/maintainability)](https://codeclimate.com/github/dance2die/calendar-dates/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1e673aa4287e0e938a90/test_coverage)](https://codeclimate.com/github/dance2die/calendar-dates/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/dance2die/calendar-dates/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dance2die/calendar-dates?targetFile=package.json)

## calendar-dates

📆 Get a list of calendar dates with **no external dependencies**.

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

### 2.5.1
Fix data for December and January dates #33 by [ewolfe](https://github.com/ewolfe).
Decided to bump up the minor as it was a significant bug fix.

Decision based on [React team's decision](https://reactjs.org/blog/2018/12/19/react-v-16-7.html#why-is-this-bugfix-a-minor-instead-of-a-patch) (even though this is not a React component) on releasing v16.7 not including Hooks.

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/8465237?v=4" width="100px;" alt="Sung Kim"/><br /><sub><b>Sung Kim</b></sub>](https://twitter.com/dance2die)<br />[💻](https://github.com/dance2die/calendar-dates/commits?author=dance2die "Code") [🎨](#design-dance2die "Design") [⚠️](https://github.com/dance2die/calendar-dates/commits?author=dance2die "Tests") | [<img src="https://avatars2.githubusercontent.com/u/32533397?v=4" width="100px;" alt="ewolfe"/><br /><sub><b>ewolfe</b></sub>](https://medium.com/@ewolfe)<br />[💻](https://github.com/dance2die/calendar-dates/commits?author=ewolfe "Code") [⚠️](https://github.com/dance2die/calendar-dates/commits?author=ewolfe "Tests") | [<img src="https://avatars0.githubusercontent.com/u/6683520?v=4" width="100px;" alt="Dave Follett"/><br /><sub><b>Dave Follett</b></sub>](https://davefollett.io)<br />[📖](https://github.com/dance2die/calendar-dates/commits?author=davefollett "Documentation") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
