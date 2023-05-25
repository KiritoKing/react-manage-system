'use strict';

const frontEnd = require('..');
const assert = require('assert').strict;

assert.strictEqual(frontEnd(), 'Hello from frontEnd');
console.info('frontEnd tests passed');
