const caesarCipher = (text, key) => {
	let cipheredText;
	const punctuations = ['.', ',', '?', '!', ':', ';', `'`, `"`, '`', ' '];

	for (let i = 0; i < text.length; i++) {
		if (punctuations.includes(text[i])) {
			cipheredText += text[i];
			continue;
		}

		if (text[i].charCodeAt() <= 90 && text[i].charCodeAt() + key > 90) {
			const cipheredChar = String.fromCharCode(
				text[i].charCodeAt() - 26 + key
			);
			cipheredText += cipheredChar;
		} else if (
			text[i].charCodeAt() > 90 &&
			text[i].charCodeAt() + key > 122
		) {
			const cipheredChar = String.fromCharCode(
				text[i].charCodeAt() - 26 + key
			);
			cipheredText += cipheredChar;
		} else {
			const cipheredChar = String.fromCharCode(
				text[i].charCodeAt() + key
			);
			cipheredText += cipheredChar;
		}
	}

	return cipheredText;
};

export default caesarCipher;
