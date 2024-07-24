const analyzeArray = (array) => {
	const minimum = Math.min.apply(null, array);
	const maximum = Math.max.apply(null, array);
	const len = array.length;
	const avg = array.reduce((current, previous) => current + previous) / len;

	return {
		average: avg,
		min: minimum,
		max: maximum,
		length: len,
	};
};

export default analyzeArray;
