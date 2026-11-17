
import test from 'node:test';
import assert from 'node:assert';
import { calculateScore, questions } from '../src/exam.js';

test('All answers correct', () => {
    const answers = [
        'JavaScript',
        'Git',
        'Jenkins'
    ];

    assert.strictEqual(
        calculateScore(questions, answers),
        3
    );
});

test('One answer incorrect', () => {
    const answers = [
        'Java',
        'Git',
        'Jenkins'
    ];

    assert.strictEqual(
        calculateScore(questions, answers),
        2
    );
});

test('All answers incorrect', () => {
    const answers = [
        'HTML',
        'CSS',
        'Java'
    ];

    assert.strictEqual(
        calculateScore(questions, answers),
        0
    );
});
