isRoman = true;
scheme = {
	vowels: [
	  'a',   'aa',  'i',  'ii',
	  'u',   'uu',  '.r', '.rr',
	  '.li', '.ll', '',   'e',
	  'ai',  '',    'o',  'au'
	],
	maatraas: [
	  'aa',  'i',  'ii',  'u',
	  'uu',  '.r', '.rr', '.li',
	  '.ll', '',   'e',   'ai',
	  '',    'o',  'au'
	],
	miscmaatraas: [ '.m', '.h', '' ],
	viraama: [ '' ],
	consonants: [
	  'k',  'kh',  'g',  'gh',  '"n',
	  'c',  'ch',  'j',  'jh',  '~n',
	  '.t', '.th', '.d', '.dh', '.n',
	  't',  'th',  'd',  'dh',  'n',
	  'p',  'ph',  'b',  'bh',  'm',
	  'y',  'r',   'l',  'v',   '"s',
	  '.s', 's',   'h',  '"d'
	],
	numbersAndPunctuation: [
	  '0', '1',  '2',  '3',
	  '4', '5',  '6',  '7',
	  '8', '9',  '.o', ".a",
	  '|', '||'
	]
   }

module.exports = {scheme, isRoman};