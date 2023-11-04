const nlp = require('@nlpjs/nlp');
window.nlps = {...window.nlps, ...nlp};
module.exports = window.nlps;