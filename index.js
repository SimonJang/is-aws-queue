'use strict';

module.exports = name => {
	return /^[a-zA-Z0-9_-]{1,80}$/.test(name);
};
