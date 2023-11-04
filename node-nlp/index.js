const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const langenmin = require('@nlpjs/lang-en-min');

window.nlpjs = {...window.nlpjs, ...core};
window.nlpjs = {...window.nlpjs, ...nlp};
window.nlpjs = {...window.nlpjs, ...langenmin};