import { subarray_given_sum } from './index';

test('subarray of [1, 2, 3, 7, 5] to be equal [2, 3, 7]', () => {
  const input = [1, 2, 3, 7, 5];
  const output = [2, 3, 7];
  expect(subarray_given_sum(input, 12)).toEqual(output);
});

test(`subarray of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to be equal [1, 2, 3, 4, 5]`, () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const output = [1, 2, 3, 4, 5];
  expect(subarray_given_sum(input, 15)).toEqual(output);
});
