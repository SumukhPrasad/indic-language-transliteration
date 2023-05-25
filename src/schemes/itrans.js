isRoman = true;
scheme = {
	vowels: [ "a", "A", "i", "I", "u", "U", "RRi", "RRI", "LLi", "LLI", "", "e", "ai", "", "o", "au" ],
	maatraas: [ "A", "i", "I", "u", "U", "RRi", "RRI", "LLi", "LLI", "", "e", "ai", "", "o", "au" ],
	miscmaatraas: ['M', 'H', '.N'],
	viraama: [ '' ],
	consonants: [ "k", "kh", "g", "gh", "~N", "ch", "Ch", "j", "jh", "~n", "T", "Th", "D", "Dh", "N", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "v", "sh", "Sh", "s", "h", "L" ],
	numbersAndPunctuation: [ '०', '१', '२', '३', '४', '५', '६', '७', '८', '९', 'ॐ', 'ऽ', '।', '॥' ],
	zwj: ['{}'],
	dummySeparatorConsonant: [ '_' ],
	vedicAccents: ["\\'", "\\_"],
	combinedAccents: [ '\\\'H', '\\_H', '\\\'M', '\\_M' ],
     candra: ['.c'],
	miscconsonants: [ "q", "K", "G", "z", ".D", ".Dh", "f", "Y", "R" ],
	alternates: {
		A: ['aa'],
		I: ['ii', 'ee'],
		U: ['uu', 'oo'],
		RRi: ['R^i'],
		RRI: ['R^I'],
		LLi: ['L^i'],
		LLI: ['L^I'],
		M: ['.m', '.n'],
		'~N': ['N^'],
		ch: ['c'],
		Ch: ['C', 'chh'],
		'~n': ['JN'],
		v: ['w'],
		Sh: ['S', 'shh'],
		kSh: ['kS', 'x'],
		'j~n': ['GY', 'dny'],
		OM: ['AUM'],
		"\\_": ["\\`"],
		"\\_H": ["\\`H"],
		"\\'M": ["\\'.m", "\\'.n"],
		"\\_M": "\\_.m \\_.n \\`M \\`.m \\`.n".split(' '),
		".a": ['~'],
		'|': ['.'],
		'||': ['..'],
		z: ['J']
	 }
}

module.exports = {scheme, isRoman};