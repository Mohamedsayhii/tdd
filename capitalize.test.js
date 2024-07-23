import capitalize from './capitalize';

test('capitalize', () => {
	const input = 'hama';
	const actual = capitalize(input);
	const expected = input.replace(input[0], input[0].toUpperCase());
	expect(actual).toMatch(expected);
});
