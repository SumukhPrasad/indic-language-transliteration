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

var engine = new ILTEngine();

console.log(engine._loadScheme("sample", sampleScheme))
