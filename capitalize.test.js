import capitalize from './capitalize';

test('capitalize first character', () => {
	expect(capitalize('hama')).toMatch('Hama');
});

test('capitalize first character', () => {
	expect(capitalize('moha sayhi')).toMatch('Moha sayhi');
});

test('should reject an input of type number', () => {
	expect(capitalize(1234)).toBe(`Can capitalize letters only`);
});

test('should reject a numbers only string', () => {
	expect(capitalize('1234')).toBe(`Can capitalize letters only`);
});

test('should reject a symbols only string', () => {
	expect(capitalize('!!!@@##$%^&*^')).toBe(`Can capitalize letters only`);
});

test('should reject symbols and numbers string', () => {
	expect(capitalize('!!!@@##12345^')).toBe(`Can capitalize letters only`);
});
