let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

function deEuroAYen(valorEnEuro) {
    let valorEnYen = valorEnEuro * 127.9 ;
    return valorEnYen;
}

function deEuroAPound(valorEnEuro) {
    let valorEnPound = valorEnEuro * 0.8;
    return valorEnPound;
}

// Quiero de dolares a yenes?
// Hago de dolares a euros luego de euros a yenes
function fromDollarToYen(valorEnDolar) {
    let valorEnYen = deEuroAYen(valorEnDolar / 1.2);
    return valorEnYen;
}

// Quiero de Yenes a Pounds?
// Hago de Yenes a euros luego de euros a Pound
//                 USANDO oneEuroIs ////
function fromYenToPound(valorEnYenes) {
    let valorEnPound = valorEnYenes / 127.9 * oneEuroIs.GBP;
    return valorEnPound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }

console.log(fromDollarToYen(1));
console.log(fromYenToPound(12));
