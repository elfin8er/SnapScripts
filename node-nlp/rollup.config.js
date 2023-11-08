import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './node_modules/@nlpjs/core/src/index.js', // Entry point of lang-en-min
    output: {
      file: './dist/core.bundle.min.js', // Output file for lang-en-min bundle
      format: 'iife', // Output format for the browser
      name: 'nlpjs.Core', // Name to export to the browser window
      exports: 'named',
    },
    plugins: [
      resolve(), // Locate and bundle dependencies from node_modules
      commonjs(), // Convert CommonJS modules to ES6
      terser(), // Minify the output bundle
    ],
  },
  {
    input: './node_modules/@nlpjs/nlp/src/index.js', // Entry point of lang-en-min
    output: {
      file: './dist/nlp.bundle.min.js', // Output file for lang-en-min bundle
      format: 'iife', // Output format for the browser
      name: 'nlpjs.Nlp', // Name to export to the browser window
      exports: 'named',
    },
    plugins: [
      resolve(), // Locate and bundle dependencies from node_modules
      commonjs(), // Convert CommonJS modules to ES6
      json(),
      terser(), // Minify the output bundle
    ],
  },
  {
    input: './node_modules/@nlpjs/lang-en-min/src/index.js', // Entry point of lang-en-min
    output: {
      file: './dist/lang-en-min.bundle.min.js', // Output file for lang-en-min bundle
      format: 'iife', // Output format for the browser
      name: 'nlpjs.LangEnMin', // Name to export to the browser window
      exports: 'named',
    },
    plugins: [
      resolve(), // Locate and bundle dependencies from node_modules
      commonjs(), // Convert CommonJS modules to ES6
      terser(), // Minify the output bundle
    ],
  },
  {
    input: './node_modules/@nlpjs/basic/src/index.js', // Entry point of lang-en-min
    output: {
      file: './dist/basic.bundle.min.js', // Output file for lang-en-min bundle
      format: 'iife', // Output format for the browser
      name: 'nlpjs.Basic', // Name to export to the browser window
      exports: 'named',
    },
    plugins: [
      resolve(), // Locate and bundle dependencies from node_modules
      commonjs(), // Convert CommonJS modules to ES6
      json(),
      terser(), // Minify the output bundle
    ],
  },
  {
    input: './node_modules/@nlpjs/evaluator/src/index.js', // Entry point of lang-en-min
    output: {
      file: './dist/evaluator.bundle.min.js', // Output file for lang-en-min bundle
      format: 'iife', // Output format for the browser
      name: 'nlpjs.Evaluator', // Name to export to the browser window
      exports: 'named',
    },
    plugins: [
      resolve(), // Locate and bundle dependencies from node_modules
      commonjs(), // Convert CommonJS modules to ES6
      json(),
      terser(), // Minify the output bundle
    ],
  }
];