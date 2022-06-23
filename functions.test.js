const functions = require('./functions');

test('Capitalize word test', () => {
  expect(functions.Capitalize('test')).toBe('Test');
});

it('Capitalize word dog',() =>{
    expect(functions.Capitalize('dog')).toBe('Dog');
});

test('Word House should be same ', () => {
    expect(functions.Capitalize('House')).toBe('House');
  });

test('Lowering word "CAT" to "Cat" ', () => {
    expect(functions.Capitalize('CAT')).toBe('Cat');
  });


