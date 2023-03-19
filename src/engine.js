/**
 * Indic Language Transliteration Engine
 * 
 * Capable of transliterating to and from all Indian Classical languages. 
 */

class ILTEngine {
	constructor() {
		this._prefs = {
			"viraamaOmission": false
		}
		this.schemes = {}
	}

	_loadScheme(name, schemeObj) {
		if ( !schemeObj.vowels ||
			!schemeObj.maatraas ||
			!schemeObj.miscmaatraas ||
			!schemeObj.viraama ||
			!schemeObj.consonants ||
			!schemeObj.numbersAndPunctuation ||
			!schemeObj.zwj ||
			!schemeObj.dummySeparatorConsonant ||
			!schemeObj.vedicAccents ||
			!schemeObj.combinedAccents ||
			!schemeObj.candra ||
			!schemeObj.miscconsonants) {
			throw new Error("Scheme object is not complete.");
		}
		this.schemes[name] = schemeObj;
		return true;
	}

}

module.exports = {ILTEngine}