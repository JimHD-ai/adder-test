import adder from '../adder/intex';

test('adds 2 numbers ', () => {
  expect(adder(1, 2)).toEqual(3);
});

// test('adds null ', () => {
//   expect(adder(null, 2)).toEqual(3);
// });
