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

// quiero de dolares a yenes
// De dolares a euros luego de euros a yenes
function fromDollarToYen(valorEnDolar) {
    let valorEnYen = deEuroAYen(valorEnDolar / 1.2);
    return valorEnYen;
}

// quiero de Yenes a Pounds
// De Yenes a euros luego de euros a Pound
function fromYenToPound(valorEnYenes) {
    let valorEnPound = deEuroAPound(valorEnYenes / 127.9);
    return valorEnPound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }

console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));