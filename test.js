'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const isAwsQueue = require('./');

test('accepts valid standard queue names', () => {
	assert.equal(isAwsQueue('correctName'), true);
	assert.equal(isAwsQueue('correct_Name-01'), true);
	assert.equal(isAwsQueue('_correct-Name-000-0001'), true);
	assert.equal(isAwsQueue('1'), true);
	assert.equal(isAwsQueue('a'.repeat(80)), true);
});

test('rejects invalid standard queue names', () => {
	assert.equal(isAwsQueue(''), false);
	assert.equal(isAwsQueue('foo bar'), false);
	assert.equal(isAwsQueue('queue$01'), false);
	assert.equal(isAwsQueue('#queue'), false);
	assert.equal(isAwsQueue('a'.repeat(81)), false);
});

test('accepts valid FIFO queue names within the shared limit', () => {
	assert.equal(isAwsQueue('orders.fifo'), true);
	assert.equal(isAwsQueue('orders_eu-west-1.fifo'), true);
	assert.equal(isAwsQueue('a'.repeat(75) + '.fifo'), true);
});

test('rejects malformed or oversized FIFO queue names', () => {
	assert.equal(isAwsQueue('.fifo'), false);
	assert.equal(isAwsQueue('orders..fifo'), false);
	assert.equal(isAwsQueue('orders.FIFO'), false);
	assert.equal(isAwsQueue('orders.fifo.extra'), false);
	assert.equal(isAwsQueue('a'.repeat(76) + '.fifo'), false);
});

test('rejects values that are not primitive strings', () => {
	for (const value of [null, undefined, true, false, 1, {}, ['queue'], new String('queue')]) {
		assert.equal(isAwsQueue(value), false);
	}
});
