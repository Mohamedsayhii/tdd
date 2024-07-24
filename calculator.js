const calculator = {
	add: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number')
			return 'not a number';
		return a + b;
	},

	subtract: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number')
			return 'not a number';
		return a - b;
	},

	multiply: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number')
			return 'not a number';
		return a * b;
	},

	divide: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number')
			return 'not a number';
		return a / b;
	},
};

export default calculator;
