import Sum from './../src/components/commonUI/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(Sum.sum(1, 2)).toBe(3);
});