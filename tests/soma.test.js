const soma = require('./../src/soma')

test('Teste 1', () => {

    expect(soma(1, 2)).toBe(3);

});


test('Teste 2', () => {

    expect(soma(1, 2)).not.toBe(4);

});