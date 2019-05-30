const CalendarDates = require('../dist/calendardates.cjs')
// "sut" means "System Under Test".
const sut = new CalendarDates()

const april2018 = new Date(2018, 3)
const may2018 = new Date(2018, 4)
const december2018 = new Date(2018, 11)
const january2019 = new Date(2019, 0)

test("Previous year's December ISO month should be 12 not 0", () => {
	const expected = [
		{ date: 30, iso: '2018-12-30', type: 'previous' },
		{ date: 31, iso: '2018-12-31', type: 'previous' },
		{ date: 1, iso: '2019-01-01', type: 'current' },
		{ date: 2, iso: '2019-01-02', type: 'current' },
		{ date: 3, iso: '2019-01-03', type: 'current' },
		{ date: 4, iso: '2019-01-04', type: 'current' },
		{ date: 5, iso: '2019-01-05', type: 'current' },
		{ date: 6, iso: '2019-01-06', type: 'current' },
		{ date: 7, iso: '2019-01-07', type: 'current' },
		{ date: 8, iso: '2019-01-08', type: 'current' },
		{ date: 9, iso: '2019-01-09', type: 'current' },
		{ date: 10, iso: '2019-01-10', type: 'current' },
		{ date: 11, iso: '2019-01-11', type: 'current' },
		{ date: 12, iso: '2019-01-12', type: 'current' },
		{ date: 13, iso: '2019-01-13', type: 'current' },
		{ date: 14, iso: '2019-01-14', type: 'current' },
		{ date: 15, iso: '2019-01-15', type: 'current' },
		{ date: 16, iso: '2019-01-16', type: 'current' },
		{ date: 17, iso: '2019-01-17', type: 'current' },
		{ date: 18, iso: '2019-01-18', type: 'current' },
		{ date: 19, iso: '2019-01-19', type: 'current' },
		{ date: 20, iso: '2019-01-20', type: 'current' },
		{ date: 21, iso: '2019-01-21', type: 'current' },
		{ date: 22, iso: '2019-01-22', type: 'current' },
		{ date: 23, iso: '2019-01-23', type: 'current' },
		{ date: 24, iso: '2019-01-24', type: 'current' },
		{ date: 25, iso: '2019-01-25', type: 'current' },
		{ date: 26, iso: '2019-01-26', type: 'current' },
		{ date: 27, iso: '2019-01-27', type: 'current' },
		{ date: 28, iso: '2019-01-28', type: 'current' },
		{ date: 29, iso: '2019-01-29', type: 'current' },
		{ date: 30, iso: '2019-01-30', type: 'current' },
		{ date: 31, iso: '2019-01-31', type: 'current' },
		{ date: 1, iso: '2019-02-01', type: 'next' },
		{ date: 2, iso: '2019-02-02', type: 'next' },
		{ date: 3, iso: '2019-02-03', type: 'next' },
		{ date: 4, iso: '2019-02-04', type: 'next' },
		{ date: 5, iso: '2019-02-05', type: 'next' },
		{ date: 6, iso: '2019-02-06', type: 'next' },
		{ date: 7, iso: '2019-02-07', type: 'next' },
		{ date: 8, iso: '2019-02-08', type: 'next' },
		{ date: 9, iso: '2019-02-09', type: 'next' },
	]
	return sut
		.getDates(january2019)
		.then(actual => expect(actual).toEqual(expected))
})

test("Previous year's matrix December ISO month should be 12 not 0", () => {
	const expected = [
		[
			{ date: 30, iso: '2018-12-30', type: 'previous' },
			{ date: 31, iso: '2018-12-31', type: 'previous' },
			{ date: 1, iso: '2019-01-01', type: 'current' },
			{ date: 2, iso: '2019-01-02', type: 'current' },
			{ date: 3, iso: '2019-01-03', type: 'current' },
			{ date: 4, iso: '2019-01-04', type: 'current' },
			{ date: 5, iso: '2019-01-05', type: 'current' },
		],
		[
			{ date: 6, iso: '2019-01-06', type: 'current' },
			{ date: 7, iso: '2019-01-07', type: 'current' },
			{ date: 8, iso: '2019-01-08', type: 'current' },
			{ date: 9, iso: '2019-01-09', type: 'current' },
			{ date: 10, iso: '2019-01-10', type: 'current' },
			{ date: 11, iso: '2019-01-11', type: 'current' },
			{ date: 12, iso: '2019-01-12', type: 'current' },
		],
		[
			{ date: 13, iso: '2019-01-13', type: 'current' },
			{ date: 14, iso: '2019-01-14', type: 'current' },
			{ date: 15, iso: '2019-01-15', type: 'current' },
			{ date: 16, iso: '2019-01-16', type: 'current' },
			{ date: 17, iso: '2019-01-17', type: 'current' },
			{ date: 18, iso: '2019-01-18', type: 'current' },
			{ date: 19, iso: '2019-01-19', type: 'current' },
		],
		[
			{ date: 20, iso: '2019-01-20', type: 'current' },
			{ date: 21, iso: '2019-01-21', type: 'current' },
			{ date: 22, iso: '2019-01-22', type: 'current' },
			{ date: 23, iso: '2019-01-23', type: 'current' },
			{ date: 24, iso: '2019-01-24', type: 'current' },
			{ date: 25, iso: '2019-01-25', type: 'current' },
			{ date: 26, iso: '2019-01-26', type: 'current' },
		],
		[
			{ date: 27, iso: '2019-01-27', type: 'current' },
			{ date: 28, iso: '2019-01-28', type: 'current' },
			{ date: 29, iso: '2019-01-29', type: 'current' },
			{ date: 30, iso: '2019-01-30', type: 'current' },
			{ date: 31, iso: '2019-01-31', type: 'current' },
			{ date: 1, iso: '2019-02-01', type: 'next' },
			{ date: 2, iso: '2019-02-02', type: 'next' },
		],
		[
			{ date: 3, iso: '2019-02-03', type: 'next' },
			{ date: 4, iso: '2019-02-04', type: 'next' },
			{ date: 5, iso: '2019-02-05', type: 'next' },
			{ date: 6, iso: '2019-02-06', type: 'next' },
			{ date: 7, iso: '2019-02-07', type: 'next' },
			{ date: 8, iso: '2019-02-08', type: 'next' },
			{ date: 9, iso: '2019-02-09', type: 'next' },
		],
	]
	return sut
		.getMatrix(january2019)
		.then(actual => expect(actual).toEqual(expected))
})

test("Next year's January should be 1 not 13", () => {
	const expected = [
		{ date: 25, iso: '2018-11-25', type: 'previous' },
		{ date: 26, iso: '2018-11-26', type: 'previous' },
		{ date: 27, iso: '2018-11-27', type: 'previous' },
		{ date: 28, iso: '2018-11-28', type: 'previous' },
		{ date: 29, iso: '2018-11-29', type: 'previous' },
		{ date: 30, iso: '2018-11-30', type: 'previous' },
		{ date: 1, iso: '2018-12-01', type: 'current' },
		{ date: 2, iso: '2018-12-02', type: 'current' },
		{ date: 3, iso: '2018-12-03', type: 'current' },
		{ date: 4, iso: '2018-12-04', type: 'current' },
		{ date: 5, iso: '2018-12-05', type: 'current' },
		{ date: 6, iso: '2018-12-06', type: 'current' },
		{ date: 7, iso: '2018-12-07', type: 'current' },
		{ date: 8, iso: '2018-12-08', type: 'current' },
		{ date: 9, iso: '2018-12-09', type: 'current' },
		{ date: 10, iso: '2018-12-10', type: 'current' },
		{ date: 11, iso: '2018-12-11', type: 'current' },
		{ date: 12, iso: '2018-12-12', type: 'current' },
		{ date: 13, iso: '2018-12-13', type: 'current' },
		{ date: 14, iso: '2018-12-14', type: 'current' },
		{ date: 15, iso: '2018-12-15', type: 'current' },
		{ date: 16, iso: '2018-12-16', type: 'current' },
		{ date: 17, iso: '2018-12-17', type: 'current' },
		{ date: 18, iso: '2018-12-18', type: 'current' },
		{ date: 19, iso: '2018-12-19', type: 'current' },
		{ date: 20, iso: '2018-12-20', type: 'current' },
		{ date: 21, iso: '2018-12-21', type: 'current' },
		{ date: 22, iso: '2018-12-22', type: 'current' },
		{ date: 23, iso: '2018-12-23', type: 'current' },
		{ date: 24, iso: '2018-12-24', type: 'current' },
		{ date: 25, iso: '2018-12-25', type: 'current' },
		{ date: 26, iso: '2018-12-26', type: 'current' },
		{ date: 27, iso: '2018-12-27', type: 'current' },
		{ date: 28, iso: '2018-12-28', type: 'current' },
		{ date: 29, iso: '2018-12-29', type: 'current' },
		{ date: 30, iso: '2018-12-30', type: 'current' },
		{ date: 31, iso: '2018-12-31', type: 'current' },
		{ date: 1, iso: '2019-01-01', type: 'next' },
		{ date: 2, iso: '2019-01-02', type: 'next' },
		{ date: 3, iso: '2019-01-03', type: 'next' },
		{ date: 4, iso: '2019-01-04', type: 'next' },
		{ date: 5, iso: '2019-01-05', type: 'next' },
	]
	return sut
		.getDates(december2018)
		.then(actual => expect(actual).toEqual(expected))
})

test("Next year's matrix January should be 1 not 13", () => {
	const expected = [
		[
			{ date: 25, iso: '2018-11-25', type: 'previous' },
			{ date: 26, iso: '2018-11-26', type: 'previous' },
			{ date: 27, iso: '2018-11-27', type: 'previous' },
			{ date: 28, iso: '2018-11-28', type: 'previous' },
			{ date: 29, iso: '2018-11-29', type: 'previous' },
			{ date: 30, iso: '2018-11-30', type: 'previous' },
			{ date: 1, iso: '2018-12-01', type: 'current' },
		],
		[
			{ date: 2, iso: '2018-12-02', type: 'current' },
			{ date: 3, iso: '2018-12-03', type: 'current' },
			{ date: 4, iso: '2018-12-04', type: 'current' },
			{ date: 5, iso: '2018-12-05', type: 'current' },
			{ date: 6, iso: '2018-12-06', type: 'current' },
			{ date: 7, iso: '2018-12-07', type: 'current' },
			{ date: 8, iso: '2018-12-08', type: 'current' },
		],
		[
			{ date: 9, iso: '2018-12-09', type: 'current' },
			{ date: 10, iso: '2018-12-10', type: 'current' },
			{ date: 11, iso: '2018-12-11', type: 'current' },
			{ date: 12, iso: '2018-12-12', type: 'current' },
			{ date: 13, iso: '2018-12-13', type: 'current' },
			{ date: 14, iso: '2018-12-14', type: 'current' },
			{ date: 15, iso: '2018-12-15', type: 'current' },
		],
		[
			{ date: 16, iso: '2018-12-16', type: 'current' },
			{ date: 17, iso: '2018-12-17', type: 'current' },
			{ date: 18, iso: '2018-12-18', type: 'current' },
			{ date: 19, iso: '2018-12-19', type: 'current' },
			{ date: 20, iso: '2018-12-20', type: 'current' },
			{ date: 21, iso: '2018-12-21', type: 'current' },
			{ date: 22, iso: '2018-12-22', type: 'current' },
		],
		[
			{ date: 23, iso: '2018-12-23', type: 'current' },
			{ date: 24, iso: '2018-12-24', type: 'current' },
			{ date: 25, iso: '2018-12-25', type: 'current' },
			{ date: 26, iso: '2018-12-26', type: 'current' },
			{ date: 27, iso: '2018-12-27', type: 'current' },
			{ date: 28, iso: '2018-12-28', type: 'current' },
			{ date: 29, iso: '2018-12-29', type: 'current' },
		],
		[
			{ date: 30, iso: '2018-12-30', type: 'current' },
			{ date: 31, iso: '2018-12-31', type: 'current' },
			{ date: 1, iso: '2019-01-01', type: 'next' },
			{ date: 2, iso: '2019-01-02', type: 'next' },
			{ date: 3, iso: '2019-01-03', type: 'next' },
			{ date: 4, iso: '2019-01-04', type: 'next' },
			{ date: 5, iso: '2019-01-05', type: 'next' },
		],
	]
	return sut
		.getMatrix(december2018)
		.then(actual => expect(actual).toEqual(expected))
})

test('Dates with Metadata for April of 2018', () => {
	const expected = [
		{ date: 1, iso: '2018-04-01', type: 'current' },
		{ date: 2, iso: '2018-04-02', type: 'current' },
		{ date: 3, iso: '2018-04-03', type: 'current' },
		{ date: 4, iso: '2018-04-04', type: 'current' },
		{ date: 5, iso: '2018-04-05', type: 'current' },
		{ date: 6, iso: '2018-04-06', type: 'current' },
		{ date: 7, iso: '2018-04-07', type: 'current' },
		{ date: 8, iso: '2018-04-08', type: 'current' },
		{ date: 9, iso: '2018-04-09', type: 'current' },
		{ date: 10, iso: '2018-04-10', type: 'current' },
		{ date: 11, iso: '2018-04-11', type: 'current' },
		{ date: 12, iso: '2018-04-12', type: 'current' },
		{ date: 13, iso: '2018-04-13', type: 'current' },
		{ date: 14, iso: '2018-04-14', type: 'current' },
		{ date: 15, iso: '2018-04-15', type: 'current' },
		{ date: 16, iso: '2018-04-16', type: 'current' },
		{ date: 17, iso: '2018-04-17', type: 'current' },
		{ date: 18, iso: '2018-04-18', type: 'current' },
		{ date: 19, iso: '2018-04-19', type: 'current' },
		{ date: 20, iso: '2018-04-20', type: 'current' },
		{ date: 21, iso: '2018-04-21', type: 'current' },
		{ date: 22, iso: '2018-04-22', type: 'current' },
		{ date: 23, iso: '2018-04-23', type: 'current' },
		{ date: 24, iso: '2018-04-24', type: 'current' },
		{ date: 25, iso: '2018-04-25', type: 'current' },
		{ date: 26, iso: '2018-04-26', type: 'current' },
		{ date: 27, iso: '2018-04-27', type: 'current' },
		{ date: 28, iso: '2018-04-28', type: 'current' },
		{ date: 29, iso: '2018-04-29', type: 'current' },
		{ date: 30, iso: '2018-04-30', type: 'current' },
		{ date: 1, iso: '2018-05-01', type: 'next' },
		{ date: 2, iso: '2018-05-02', type: 'next' },
		{ date: 3, iso: '2018-05-03', type: 'next' },
		{ date: 4, iso: '2018-05-04', type: 'next' },
		{ date: 5, iso: '2018-05-05', type: 'next' },
		{ date: 6, iso: '2018-05-06', type: 'next' },
		{ date: 7, iso: '2018-05-07', type: 'next' },
		{ date: 8, iso: '2018-05-08', type: 'next' },
		{ date: 9, iso: '2018-05-09', type: 'next' },
		{ date: 10, iso: '2018-05-10', type: 'next' },
		{ date: 11, iso: '2018-05-11', type: 'next' },
		{ date: 12, iso: '2018-05-12', type: 'next' },
	]

	return sut
		.getDates(april2018)
		.then(actual => expect(actual).toEqual(expected))
})

test('Dates with Metadata for May of 2018', () => {
	const expected = [
		{ date: 29, iso: '2018-04-29', type: 'previous' },
		{ date: 30, iso: '2018-04-30', type: 'previous' },
		{ date: 1, iso: '2018-05-01', type: 'current' },
		{ date: 2, iso: '2018-05-02', type: 'current' },
		{ date: 3, iso: '2018-05-03', type: 'current' },
		{ date: 4, iso: '2018-05-04', type: 'current' },
		{ date: 5, iso: '2018-05-05', type: 'current' },
		{ date: 6, iso: '2018-05-06', type: 'current' },
		{ date: 7, iso: '2018-05-07', type: 'current' },
		{ date: 8, iso: '2018-05-08', type: 'current' },
		{ date: 9, iso: '2018-05-09', type: 'current' },
		{ date: 10, iso: '2018-05-10', type: 'current' },
		{ date: 11, iso: '2018-05-11', type: 'current' },
		{ date: 12, iso: '2018-05-12', type: 'current' },
		{ date: 13, iso: '2018-05-13', type: 'current' },
		{ date: 14, iso: '2018-05-14', type: 'current' },
		{ date: 15, iso: '2018-05-15', type: 'current' },
		{ date: 16, iso: '2018-05-16', type: 'current' },
		{ date: 17, iso: '2018-05-17', type: 'current' },
		{ date: 18, iso: '2018-05-18', type: 'current' },
		{ date: 19, iso: '2018-05-19', type: 'current' },
		{ date: 20, iso: '2018-05-20', type: 'current' },
		{ date: 21, iso: '2018-05-21', type: 'current' },
		{ date: 22, iso: '2018-05-22', type: 'current' },
		{ date: 23, iso: '2018-05-23', type: 'current' },
		{ date: 24, iso: '2018-05-24', type: 'current' },
		{ date: 25, iso: '2018-05-25', type: 'current' },
		{ date: 26, iso: '2018-05-26', type: 'current' },
		{ date: 27, iso: '2018-05-27', type: 'current' },
		{ date: 28, iso: '2018-05-28', type: 'current' },
		{ date: 29, iso: '2018-05-29', type: 'current' },
		{ date: 30, iso: '2018-05-30', type: 'current' },
		{ date: 31, iso: '2018-05-31', type: 'current' },
		{ date: 1, iso: '2018-06-01', type: 'next' },
		{ date: 2, iso: '2018-06-02', type: 'next' },
		{ date: 3, iso: '2018-06-03', type: 'next' },
		{ date: 4, iso: '2018-06-04', type: 'next' },
		{ date: 5, iso: '2018-06-05', type: 'next' },
		{ date: 6, iso: '2018-06-06', type: 'next' },
		{ date: 7, iso: '2018-06-07', type: 'next' },
		{ date: 8, iso: '2018-06-08', type: 'next' },
		{ date: 9, iso: '2018-06-09', type: 'next' },
	]

	return sut
		.getDates(may2018)
		.then(actual => expect(actual).toEqual(expected))
})

test('Date Matrix with Metadata for April of 2018', () => {
	const expected = [
		[
			{ date: 1, iso: '2018-04-01', type: 'current' },
			{ date: 2, iso: '2018-04-02', type: 'current' },
			{ date: 3, iso: '2018-04-03', type: 'current' },
			{ date: 4, iso: '2018-04-04', type: 'current' },
			{ date: 5, iso: '2018-04-05', type: 'current' },
			{ date: 6, iso: '2018-04-06', type: 'current' },
			{ date: 7, iso: '2018-04-07', type: 'current' },
		],
		[
			{ date: 8, iso: '2018-04-08', type: 'current' },
			{ date: 9, iso: '2018-04-09', type: 'current' },
			{ date: 10, iso: '2018-04-10', type: 'current' },
			{ date: 11, iso: '2018-04-11', type: 'current' },
			{ date: 12, iso: '2018-04-12', type: 'current' },
			{ date: 13, iso: '2018-04-13', type: 'current' },
			{ date: 14, iso: '2018-04-14', type: 'current' },
		],
		[
			{ date: 15, iso: '2018-04-15', type: 'current' },
			{ date: 16, iso: '2018-04-16', type: 'current' },
			{ date: 17, iso: '2018-04-17', type: 'current' },
			{ date: 18, iso: '2018-04-18', type: 'current' },
			{ date: 19, iso: '2018-04-19', type: 'current' },
			{ date: 20, iso: '2018-04-20', type: 'current' },
			{ date: 21, iso: '2018-04-21', type: 'current' },
		],
		[
			{ date: 22, iso: '2018-04-22', type: 'current' },
			{ date: 23, iso: '2018-04-23', type: 'current' },
			{ date: 24, iso: '2018-04-24', type: 'current' },
			{ date: 25, iso: '2018-04-25', type: 'current' },
			{ date: 26, iso: '2018-04-26', type: 'current' },
			{ date: 27, iso: '2018-04-27', type: 'current' },
			{ date: 28, iso: '2018-04-28', type: 'current' },
		],
		[
			{ date: 29, iso: '2018-04-29', type: 'current' },
			{ date: 30, iso: '2018-04-30', type: 'current' },
			{ date: 1, iso: '2018-05-01', type: 'next' },
			{ date: 2, iso: '2018-05-02', type: 'next' },
			{ date: 3, iso: '2018-05-03', type: 'next' },
			{ date: 4, iso: '2018-05-04', type: 'next' },
			{ date: 5, iso: '2018-05-05', type: 'next' },
		],
		[
			{ date: 6, iso: '2018-05-06', type: 'next' },
			{ date: 7, iso: '2018-05-07', type: 'next' },
			{ date: 8, iso: '2018-05-08', type: 'next' },
			{ date: 9, iso: '2018-05-09', type: 'next' },
			{ date: 10, iso: '2018-05-10', type: 'next' },
			{ date: 11, iso: '2018-05-11', type: 'next' },
			{ date: 12, iso: '2018-05-12', type: 'next' },
		],
	]

	return sut
		.getMatrix(april2018)
		.then(actual => expect(actual).toEqual(expected))
})

test('Date Matrix with Metadata for May of 2018', () => {
	const expected = [
		[
			{ date: 29, iso: '2018-04-29', type: 'previous' },
			{ date: 30, iso: '2018-04-30', type: 'previous' },
			{ date: 1, iso: '2018-05-01', type: 'current' },
			{ date: 2, iso: '2018-05-02', type: 'current' },
			{ date: 3, iso: '2018-05-03', type: 'current' },
			{ date: 4, iso: '2018-05-04', type: 'current' },
			{ date: 5, iso: '2018-05-05', type: 'current' },
		],
		[
			{ date: 6, iso: '2018-05-06', type: 'current' },
			{ date: 7, iso: '2018-05-07', type: 'current' },
			{ date: 8, iso: '2018-05-08', type: 'current' },
			{ date: 9, iso: '2018-05-09', type: 'current' },
			{ date: 10, iso: '2018-05-10', type: 'current' },
			{ date: 11, iso: '2018-05-11', type: 'current' },
			{ date: 12, iso: '2018-05-12', type: 'current' },
		],
		[
			{ date: 13, iso: '2018-05-13', type: 'current' },
			{ date: 14, iso: '2018-05-14', type: 'current' },
			{ date: 15, iso: '2018-05-15', type: 'current' },
			{ date: 16, iso: '2018-05-16', type: 'current' },
			{ date: 17, iso: '2018-05-17', type: 'current' },
			{ date: 18, iso: '2018-05-18', type: 'current' },
			{ date: 19, iso: '2018-05-19', type: 'current' },
		],
		[
			{ date: 20, iso: '2018-05-20', type: 'current' },
			{ date: 21, iso: '2018-05-21', type: 'current' },
			{ date: 22, iso: '2018-05-22', type: 'current' },
			{ date: 23, iso: '2018-05-23', type: 'current' },
			{ date: 24, iso: '2018-05-24', type: 'current' },
			{ date: 25, iso: '2018-05-25', type: 'current' },
			{ date: 26, iso: '2018-05-26', type: 'current' },
		],
		[
			{ date: 27, iso: '2018-05-27', type: 'current' },
			{ date: 28, iso: '2018-05-28', type: 'current' },
			{ date: 29, iso: '2018-05-29', type: 'current' },
			{ date: 30, iso: '2018-05-30', type: 'current' },
			{ date: 31, iso: '2018-05-31', type: 'current' },
			{ date: 1, iso: '2018-06-01', type: 'next' },
			{ date: 2, iso: '2018-06-02', type: 'next' },
		],
		[
			{ date: 3, iso: '2018-06-03', type: 'next' },
			{ date: 4, iso: '2018-06-04', type: 'next' },
			{ date: 5, iso: '2018-06-05', type: 'next' },
			{ date: 6, iso: '2018-06-06', type: 'next' },
			{ date: 7, iso: '2018-06-07', type: 'next' },
			{ date: 8, iso: '2018-06-08', type: 'next' },
			{ date: 9, iso: '2018-06-09', type: 'next' },
		],
	]

	return sut
		.getMatrix(may2018)
		.then(actual => expect(actual).toEqual(expected))
})

test('IST Timezone - Date Matrix with Metadata for May of 2019', () => {
	const expected = [
		[
			{ date: 28, iso: '2019-04-28', type: 'previous' },
			{ date: 29, iso: '2019-04-29', type: 'previous' },
			{ date: 30, iso: '2019-04-30', type: 'previous' },
			{ date: 1, iso: '2019-05-01', type: 'current' },
			{ date: 2, iso: '2019-05-02', type: 'current' },
			{ date: 3, iso: '2019-05-03', type: 'current' },
			{ date: 4, iso: '2019-05-04', type: 'current' },
		],
		[
			{ date: 5, iso: '2019-05-05', type: 'current' },
			{ date: 6, iso: '2019-05-06', type: 'current' },
			{ date: 7, iso: '2019-05-07', type: 'current' },
			{ date: 8, iso: '2019-05-08', type: 'current' },
			{ date: 9, iso: '2019-05-09', type: 'current' },
			{ date: 10, iso: '2019-05-10', type: 'current' },
			{ date: 11, iso: '2019-05-11', type: 'current' },
		],
		[
			{ date: 12, iso: '2019-05-12', type: 'current' },
			{ date: 13, iso: '2019-05-13', type: 'current' },
			{ date: 14, iso: '2019-05-14', type: 'current' },
			{ date: 15, iso: '2019-05-15', type: 'current' },
			{ date: 16, iso: '2019-05-16', type: 'current' },
			{ date: 17, iso: '2019-05-17', type: 'current' },
			{ date: 18, iso: '2019-05-18', type: 'current' },
		],
		[
			{ date: 19, iso: '2019-05-19', type: 'current' },
			{ date: 20, iso: '2019-05-20', type: 'current' },
			{ date: 21, iso: '2019-05-21', type: 'current' },
			{ date: 22, iso: '2019-05-22', type: 'current' },
			{ date: 23, iso: '2019-05-23', type: 'current' },
			{ date: 24, iso: '2019-05-24', type: 'current' },
			{ date: 25, iso: '2019-05-25', type: 'current' },
		],
		[
			{ date: 26, iso: '2019-05-26', type: 'current' },
			{ date: 27, iso: '2019-05-27', type: 'current' },
			{ date: 28, iso: '2019-05-28', type: 'current' },
			{ date: 29, iso: '2019-05-29', type: 'current' },
			{ date: 30, iso: '2019-05-30', type: 'current' },
			{ date: 31, iso: '2019-05-31', type: 'current' },
			{ date: 1, iso: '2019-06-01', type: 'next' },
		],
		[
			{ date: 2, iso: '2019-06-02', type: 'next' },
			{ date: 3, iso: '2019-06-03', type: 'next' },
			{ date: 4, iso: '2019-06-04', type: 'next' },
			{ date: 5, iso: '2019-06-05', type: 'next' },
			{ date: 6, iso: '2019-06-06', type: 'next' },
			{ date: 7, iso: '2019-06-07', type: 'next' },
			{ date: 8, iso: '2019-06-08', type: 'next' },
		],
	]

	const may2019 = new Date(2019, 4)
	return sut
		.getMatrix(may2019)
		.then(actual => expect(actual).toEqual(expected))
})
