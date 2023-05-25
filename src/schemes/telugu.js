isRoman = false;
scheme = {
	vowels: [
	  'అ', 'ఆ', 'ఇ', 'ఈ',
	  'ఉ', 'ఊ', 'ఋ', 'ౠ',
	  'ఌ', 'ౡ', 'ఎ', 'ఏ',
	  'ఐ', 'ఒ', 'ఓ', 'ఔ'
	],
	maatraas: [
	  'ా',  'ి', 'ీ', 'ు', 'ూ', 'ృ',
	  'ౄ', 'ౢ', 'ౣ', 'ె',  'ే',  'ై',
	  'ొ',  'ో', 'ౌ'
	],
	miscmaatraas: [ 'ం', 'ః', 'ఁ' ],
	viraama: [ '్' ],
	consonants: [
	  'క',  'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ',
	  'జ',  'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ',
	  'ణ',  'త', 'థ', 'ద', 'ధ', 'న', 'ప',
	  'ఫ',  'బ', 'భ', 'మ', 'య', 'ర', 'ల',
	  'వ',  'శ', 'ష', 'స', 'హ', 'ళ', 'క్ష',
	  'జ్ఞ'
	],
	numbersAndPunctuation: [
	  '౦', '౧', '౨',  '౩',
	  '౪', '౫', '౬',  '౭',
	  '౮', '౯', 'ఓం', 'ఽ',
	  '।', '॥'
	],
	miscconsonants: [
	  '', '', '', '',  '',
	  '', '', '', 'ఱ'
	]
}

module.exports = {scheme, isRoman};