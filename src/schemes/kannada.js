isRoman = false;
scheme = {
	vowels: [
	  'ಅ', 'ಆ', 'ಇ', 'ಈ',
	  'ಉ', 'ಊ', 'ಋ', 'ೠ',
	  'ಌ', 'ೡ', 'ಎ', 'ಏ',
	  'ಐ', 'ಒ', 'ಓ', 'ಔ'
	],
	maatraas: [
	  'ಾ', 'ಿ',  'ೀ', 'ು', 'ೂ',
	  'ೃ', 'ೄ', 'ೢ',  'ೣ',  'ೆ',
	  'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ'
	],
	miscmaatraas: [ 'ಂ', 'ಃ', 'ँ' ],
	viraama: [ '್' ],
	consonants: [
	  'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ',
	  'ಜ', 'ಝ', 'ಞ', 'ಟ', 'ಠ', 'ಡ', 'ಢ',
	  'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ', 'ಪ',
	  'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ',
	  'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ'
	],
	numbersAndPunctuation: [
	  '೦', '೧', '೨',  '೩',
	  '೪', '೫', '೬',  '೭',
	  '೮', '೯', 'ಓಂ', 'ಽ',
	  '।', '॥'
	],
	miscconsonants: [
	  '',  '', '',  '',
	  '',  '', 'ಫ', '',
	  'ಱ'
	]
}

module.exports = {scheme, isRoman};

