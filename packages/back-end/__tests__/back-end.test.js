'use strict';

const backEnd = require('..');
const assert = require('assert').strict;

assert.strictEqual(backEnd(), 'Hello from backEnd');
console.info('backEnd tests passed');
