test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


const { fromDollarToYen } = require('./app.js');

test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(1);
    const expectedYen = 1 * 156.5;
    expect(yen).toBe(expectedYen);
});

const { fromYenToPound } = require('./app.js');

test("One yen should be 0.00556 pound", function() {
    const pound = fromYenToPound(1);
    const expectedPound = 1 / (156.5) * (0.87);
    expect(pound).toBe(expectedPound);
});
