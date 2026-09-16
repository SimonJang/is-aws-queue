'use strict';

module.exports = name => {
	return typeof name === 'string' && /^(?:[a-zA-Z0-9_-]{1,80}|[a-zA-Z0-9_-]{1,75}\.fifo)$/.test(name);
};
