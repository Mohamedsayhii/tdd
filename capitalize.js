const capitalize = (str) => {
	const isNotLetter = /^[0-9\W]+$/.test(str);
	if (typeof str === 'number' || isNotLetter)
		return `Can capitalize letters only`;

	return [str[0].toUpperCase(), str.slice(1)].join('');
};

export default capitalize;
