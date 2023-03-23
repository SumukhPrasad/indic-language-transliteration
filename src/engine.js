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
		this.schemes = {};
		this.romanSchemes = {};
	}

	/**
	 * Loads a scheme.
	 * 
	 * @param {String} name Name of scheme
	 * @param {Object} scheme Scheme object
	 * @param {Boolean} roman Roman scheme tag
	 * @returns Boolean
	 */
	_loadScheme(name, schemeObj, isRoman=false) {
		this.schemes[name] = schemeObj;
		this.schemes[name].isRoman = isRoman;
		return true;
	}

	/**
	 * Creates a trie between 2 schemes.
	 * 
	 * @param {String} to Map to this scheme
	 * @param {String} from Map from this scheme
	 * @returns {Object}
	 */
	_createSchemeTrie(from, target) {
		const fromScheme = this.schemes[from];
		const targetScheme = this.schemes[target];
		const alternates = fromScheme["alternates"] || {};

		const letters = {};
		const consonants = {};
		const marks = {};
		const accents = {};


		for (const cluster in fromScheme) {
			const fromCluster = fromScheme[cluster];
			const targetCluster = targetScheme[cluster];
			if (targetCluster === undefined) {
				continue;
			}

			for (const [key, f] of Object.entries(fromCluster)) {
				let t = targetCluster[key];
				if (t === undefined) {
					continue;
				}
				if (t == "" && !["dummySeparatorConsonant", "zwj", "viraama"].includes(cluster)) {
					t = f;
				}
				const alts = alternates[f] || [];
				const numAlts = alts.length;
				let j = 0;

				if (cluster === 'maatraas' || cluster === 'viraama') {
					marks[f] = t;
					for (j = 0; j < numAlts; j++) {
						marks[alts[j]] = t;
					}
				} else {
					letters[f] = t;
					for (j = 0; j < numAlts; j++) {
						letters[alts[j]] = t;
					}
					if (cluster === 'consonants' || cluster === 'miscconsonants') {
						consonants[f] = t;
						for (j = 0; j < numAlts; j++) {
							consonants[alts[j]] = t;
						}
					}
				}
				if (cluster === "accents") {
					accents[f] = t;
					for (j = 0; j < numAlts; j++) {
						accents[alts[j]] = t;
					}
				}
				

			}

		}

		return {
			consonants,
			fromRoman: fromScheme.isRoman,
			targetRoman: targetScheme.isRoman,
			letters,
			marks,
			accents,
			consonants,
			from,
			target
		};
	}

	/**
	 * Transliterate from a Brahmic script.
	 * 
	 * @param {String} data data to transliterate
	 * @param {Object} map Map object from _makeMap
	 * @param {Object} _opts Options
	 */
	_transliterateFromBrahmic(data, map, _opts) {
		const consonants = map.consonants;
		const letters = map.letters;
		const marks = map.marks;
		const isToRoman = map.targetRoman;
		const targetScheme = this.schemes[map.target];
		const transliterationPauseMarker = '%';


		var hadRomanConsonant = false;
		var buf = [];
		var transliterationEnabled = true;
		let danglingPauseMarker = false;
		let temp;
		
		for (let i = 0, L; (L = data.charAt(i)); i++) {
			if (L === transliterationPauseMarker) {
				if (danglingPauseMarker) {
				    transliterationEnabled = !transliterationEnabled;
				    danglingPauseMarker = false;
				} else {
				    danglingPauseMarker = true;
				}
				if (hadRomanConsonant) {
					buf.push(targetScheme.vowels[0]);
					hadRomanConsonant = false;
				}
				continue;
			} else if (!transliterationEnabled) {
				buf.push(L);
				continue;
			}


			if ((temp = marks[L]) !== undefined) {
				buf.push(temp);
				hadRomanConsonant = false;
			} else {
				if (danglingPauseMarker) {
					buf.push(transliterationPauseMarker);
				}
				if (hadRomanConsonant) {
					buf.push(targetScheme.vowels[0]);
					hadRomanConsonant = false;
				}

				// Push the transliterated letter if possible. Otherwise, push the letter itself.
				if ((temp = letters[L])) {
					buf.push(temp);
					hadRomanConsonant = isToRoman && (L in consonants);
				} else {
					buf.push(L);
				}
			}
		}
		if (hadRomanConsonant) {
			buf.push(targetScheme.vowels[0]);
			hadRomanConsonant = false;
		}
		return buf.join('');
	}
	

}

module.exports = {ILTEngine}