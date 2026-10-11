import { fizzbuzz } from './fizzbuzz.js';
import assert from 'node:assert';
assert.deepStrictEqual(fizzbuzz(5), ['1', '2', 'Fizz', '4', 'Buzz']);
assert.strictEqual(fizzbuzz(15)[14], 'FizzBuzz');
console.log('ok');
