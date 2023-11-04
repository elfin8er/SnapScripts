const core = require('@nlpjs/core');
window.nlpjs = {...window.nlpjs, ...core};
module.exports = window.nlpjs;