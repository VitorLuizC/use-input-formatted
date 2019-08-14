import { isNumberParseable } from '.';

test('isNumberParseable returns true for number parseable', () => {
  expect(isNumberParseable('-7.5')).toBe(true);
  expect(isNumberParseable(false)).toBe(true);
  expect(isNumberParseable(1892)).toBe(true);
});

test('isNumberParseable returns false for non number parseable', () => {
  expect(isNumberParseable('A8sa')).toBe(false);
  expect(isNumberParseable({})).toBe(false);
  expect(isNumberParseable(NaN)).toBe(false);
});
