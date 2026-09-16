# is-aws-queue [![CI](https://github.com/SimonJang/is-aws-queue/actions/workflows/ci.yml/badge.svg?branch=master&event=push)](https://github.com/SimonJang/is-aws-queue/actions/workflows/ci.yml?query=branch%3Amaster+event%3Apush)
Utility to check based on a queue name, that it is or could be an [AWS SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html) queue

## Install

```
$ npm install is-aws-queue
```

## Usage

```js
const isAwsQueue = require('is-aws-queue');

isAwsQueue('correct-queue_01'); // true
isAwsQueue('orders.fifo'); // true
isAwsQueue('#myqueue 01'); // false

```

## API

### isAwsQueue(name)

#### name

Type: `string`

Name of the queue that has to be validated.

Standard queue names may contain alphanumeric characters, hyphens, and underscores. FIFO queue names use the same characters followed by the required `.fifo` suffix. The complete name can be at most 80 characters.
