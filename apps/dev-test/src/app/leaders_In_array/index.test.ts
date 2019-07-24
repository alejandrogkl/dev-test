import { leaders_in_array } from './index';

test('leaders in [16, 17, 4, 3, 5, 2] to be equal [17, 5, 2]', () => {
  const input = [16, 17, 4, 3, 5, 2];
  const output = [17, 5, 2];
  expect(leaders_in_array(input)).toEqual(output);
});

test('leaders in [1, 2, 3, 4, 0] to be equal [4, 0]', () => {
  const input = [1, 2, 3, 4, 0];
  const output = [4, 0];
  expect(leaders_in_array(input)).toEqual(output);
});

test('leaders in [7, 4, 5, 7, 3] to be equal [7, 7, 3]', () => {
  const input = [7, 4, 5, 7, 3];
  const output = [7, 7, 3];
  expect(leaders_in_array(input)).toEqual(output);
});
