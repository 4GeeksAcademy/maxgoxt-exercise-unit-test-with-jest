// importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test('Un dolar debe ser ++++ Yenes', () => {
    expect(fromDollarToYen(1)).toBe(106.58333333333334)
})

test('Un Yen debe ser ++++ Pounds', () => {
    expect(fromYenToPound(1)).toBe(0.006254886630179828)
})