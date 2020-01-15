# is-aws-queue [![Build Status](https://travis-ci.com/SimonJang/is-aws-queue.svg?branch=master)](https://travis-ci.com/SimonJang/is-aws-queue)

> Utility function to check if a queue name is a valid AWS SQS name


## Install

```
$ npm install is-aws-queue
```


## Usage

```js
const isAwsQueue = require('is-aws-queue');

isAwsQueue('unicorns');
//=> 'unicorns & rainbows'
```


## API

### isAwsQueue(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.
