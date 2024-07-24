import calculator from './calculator';

test('should add two numbers', () => {
	expect(calculator.add(3, 9)).toBe(12);
});

test('should subtract two numbers', () => {
	expect(calculator.subtract(3, 9)).toBe(-6);
});

test('should multiply two numbers', () => {
	expect(calculator.multiply(3, 9)).toBe(27);
});

test('should divide two numbers', () => {
	expect(calculator.divide(63, 9)).toBe(7);
});

test('should return NaN for 0/0', () => {
	expect(calculator.divide(0, 0)).toBe(NaN);
});

test('should return infinity for any number divided by 0', () => {
	expect(calculator.divide(1, 0)).toBe(Infinity);
});

test('should reject arguments that are not a number', () => {
	expect(calculator.add('1', 5)).toMatch('not a number');
});
