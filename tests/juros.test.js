
const juros = require('./../src/juros');

test('Teste juros 1', () => {

    expect(juros(1000, 10, 1)).toBe(100);

});

test('Teste juros 2', () => {

    expect(juros(8000, 10, 12)).not.toBe(500);

});

test('Teste juros 3', () => {

    expect(juros(8000, 10, 12)).not.toBe(0);

});