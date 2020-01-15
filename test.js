import test from 'ava';
import isAwsQueue from '.';

test('should validate queue name', t => {
	t.true(isAwsQueue('correctName'));
	t.true(isAwsQueue('correct_Name-01'));
	t.true(isAwsQueue('_correct-Name-000-0001'));
	t.true(isAwsQueue('1'));
	t.true(
		isAwsQueue(
			'verylong01verylong01verylong01verylong01verylong01verylong01verylong01verylong01'
		)
	);

	t.false(isAwsQueue(''));
	t.false(isAwsQueue('foo bar'));
	t.false(isAwsQueue('queue$01'));
	t.false(isAwsQueue('#queue'));
	t.false(
		isAwsQueue(
			'verylong01verylong01verylong01verylong01verylong01verylong01verylong01verylong011'
		)
	);
});
