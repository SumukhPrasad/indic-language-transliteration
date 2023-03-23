const { ILTEngine } = require("./engine");
const kannada = require('./schemes/kannada.js').scheme;
const devanagari = require('./schemes/devanagari.js').scheme;




var engine = new ILTEngine();

engine._loadScheme('kannada', kannada, false)
engine._loadScheme('devanagari', devanagari, false)

var testData = "अस्तु भो एतत् सम्यक् एव भवति| प्रातराशाय किं खादितवान्?"

var x = engine.autoTransliterate(testData, 'devanagari', 'kannada')

console.log(testData + ' -> ' + x)