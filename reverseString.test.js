import reverseString from './reverseString';

test('reverse a string', () => {
	expect(reverseString('moha')).toMatch('ahom');
});

test('should reverse numbers only string', () => {
	expect(reverseString('123456789')).toMatch('987654321');
});

test('should reverse a multi worded string', () => {
	expect(reverseString('moha sayhi ya habibi ya habibi')).toMatch(
		'ibibah ay ibibah ay ihyas ahom'
	);
});

test('should reject non string input', () => {
	expect(reverseString(1234)).toMatch('Not a string');
});
