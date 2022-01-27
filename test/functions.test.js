// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve } from '../functions.js';

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