# is-aws-queue [![Build Status](https://travis-ci.org/SimonJang/is-aws-queue.svg?branch=master)](https://travis-ci.org/SimonJang/is-aws-queue)
Utility to check based on a queue name, that it is or could be an [AWS SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html) queue

## Install

```
$ npm install is-aws-queue
```

## Usage

```js
const isAwsQueue = require('is-aws-queue');

isAWSQueue('correct-queue_01'); // true
isAWSQueue('#myqueue 01') // false

```

## API

### isAwsQueue(name)

#### name

Type: `string`

Name of the queue that has to be validated.
