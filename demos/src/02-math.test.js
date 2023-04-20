const {sum, multiply, divide} = require('./02-math');

test('add 1 + 3 should be 4', () => {
    const respuesta = sum (1, 3);
    expect(respuesta).toBe(4);
});

test('should be 4', () => {
    const respuesta = multiply(1, 4);
    expect(respuesta).toBe(4);
});

test('should divide', () => {
    const respuesta = divide(6, 3);
    expect(respuesta).toBe(2);
    const respuesta2 = divide(5, 2);
    expect(respuesta2).toBe(2.5);
});