export const hslToRgb = (h, s, l) => {
	s /= 100;
	l /= 100;
	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	let m = l - c / 2;

	let r, g, b;
	if (h >= 0 && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (h >= 60 && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (h >= 120 && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (h >= 180 && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (h >= 240 && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else {
		r = c;
		g = 0;
		b = x;
	}

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];
};

export const rgbToHex = (r, g, b) => {
	return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

export const hslToHex = (h, s, l) => {
	const [r, g, b] = hslToRgb(h, s, l);
	return rgbToHex(r, g, b);
};

export const stringToBrightColor = (str) => {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	return hslToHex(Math.abs(hash * 141) % 360, 90, 75);
};
