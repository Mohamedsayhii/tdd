import caesarCipher from './caesarCipher';

test('should cipher a text', () => {
	expect(caesarCipher('abcd', 2)).toMatch('cdef');
});

test('should consider letter wrapping', () => {
	expect(caesarCipher('xyz', 3)).toMatch('abc');
});

test('should consider uppercase letter wrapping', () => {
	expect(caesarCipher('XYZ', 3)).toMatch('ABC');
});

test('should consider uppercase and lowers letters wrapping', () => {
	expect(caesarCipher('XyZ', 3)).toMatch('AbC');
});

test('should cipher a text that contains uppercase and lowercase letters', () => {
	expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
});

test('should ignore punctuations', () => {
	expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});
