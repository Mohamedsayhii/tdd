import sum from './sum';

test('SUM', () => {
	expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
	const data = { one: 1 };
	data['two'] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});
