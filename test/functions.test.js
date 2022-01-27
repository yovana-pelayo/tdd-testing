// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, 
    divideThenMultiply, returnAsAnArray, returnAsAString, getRandomNumber,
    makeLuckyGreeting, getSecondItem, getLastItem } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const actual = addExclamationPoints('bunny rabbit');
    const expected = 'bunny rabbit!!!';

    const actual2 = addExclamationPoints('');
    const expected2 = '!!!';

    const actual3 = addExclamationPoints('$');
    const expected3 = '$!!!';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should pass', (expect) => {
    const actual = multiplyBySeven(4);
    const expected = 28;

    const actual2 = multiplyBySeven(1);
    const expected2 = 7;

    const actual3 = multiplyBySeven(0);
    const expected3 = 0;

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = multiplyBy12ThenHalve(4);
    const expected = 24;

    const actual2 = multiplyBy12ThenHalve(1);
    const expected2 = 6;

    const actual3 = multiplyBy12ThenHalve(0);
    const expected3 = 0;

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});
test('this test should pass', (expect) => {
    const actual = divideThenMultiply(8, 4, 5);
    const expected = 10;

    const actual2 = divideThenMultiply(10, 5, 10);
    const expected2 = 20;

    const actual3 = divideThenMultiply(3, 3, 0);
    const expected3 = 0;

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = returnAsAnArray(8, 4, 5);
    const expected = [8, 4, 5];

    const actual2 = returnAsAnArray(10, 5, 10);
    const expected2 = [10, 5, 10];

    const actual3 = returnAsAnArray(3, 3, 0);
    const expected3 = [3, 3, 0];

    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = returnAsAString(8, 4, 5);
    const expected = '845';

    const actual2 = returnAsAString(10, 5, 10);
    const expected2 = '10510';

    const actual3 = returnAsAString(3, 3, 0);
    const expected3 = '330';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = makeLuckyGreeting(8, 4);
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual2 = makeLuckyGreeting(10, 5);
    const expected2 = 'Hello! Your lucky number for the day is 15.';

    const actual3 = makeLuckyGreeting(3, 3);
    const expected3 = 'Hello! Your lucky number for the day is 6.';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = getSecondItem([1, 2, 3]);
    const expected = 2;

    const actual2 = getSecondItem(['bogus', 'input', 'string']);
    const expected2 = 'input';

    const actual3 = getSecondItem(['red', 'green', 'yellow', 'blue']);
    const expected3 = 'green';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

  
test('this test should pass', (expect) => {
    const actual = getLastItem([1, 2, 3]);
    const expected = 3;

    const actual2 = getLastItem(['bogus', 'input', 'string']);
    const expected2 = 'string';

    const actual3 = getLastItem(['red', 'green', 'yellow', 'blue']);
    const expected3 = 'blue';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('this test should pass', (expect) => {
    const actual = getRandomNumber();

    expect.ok(typeof(actual) === 'number');
    expect.ok((actual >= 0) && (actual <= 5)); 
});