const { ILTEngine } = require("./engine");

sampleScheme = {
	vowels: [ 'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ऎ', 'ए', 'ऐ', 'ऒ', 'ओ', 'औ' ],
	maatraas: [ 'ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ',  'ॢ',  'ॣ',  'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ' ],
	miscmaatraas: [ 'ं', 'ः', 'ँ' ],
	viraama: [ '्' ],
	consonants: [ 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ' ],
	numbersAndPunctuation: [ '०', '१', '२', '३', '४', '५', '६', '७', '८', '९', 'ॐ', 'ऽ', '।', '॥' ],
	zwj: ['\u200D'],
	dummySeparatorConsonant: [ '' ],
	vedicAccents: ['\u0951', '\u0952'],
	combinedAccents: [ 'ः॑', 'ः॒', 'ं॑', 'ं॒' ],
	candra: [ 'ॅ' ],
	miscconsonants: [ 'क़', 'ख़', 'ग़', 'ज़', 'ड़', 'ढ़', 'फ़', 'य़', 'ऱ' ]
}

sampleScheme2 = {
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

var engine = new ILTEngine();
engine._loadScheme('devnag', sampleScheme);
engine._loadScheme('itrans', sampleScheme2, true)


var map = engine._createSchemeTrie('itrans', 'devnag')
//console.log(map);
console.log("Please ignore the haphazard devanagari, monospaced fonts don't fare will with Indic scripts.")
console.log('---------------\n')

var testData = 'astu bho etat samyak eva bhavati| praataraashaaya kiM khaaditavaan?';
console.log(testData + " -> " + engine._transliterateFromRoman(testData, map))


