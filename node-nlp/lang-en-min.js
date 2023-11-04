const langenmin = require('@nlpjs/lang-en-min');
window.nlpjs = {...window.nlpjs, ...langenmin};
module.exports = window.nlpjs;