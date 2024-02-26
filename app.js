// Objeto con las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // 1 euro = 156.5 yen
    "USD": 1.07,   // 1 euro = 1.07 dollars
    "GBP": 0.87    // 1 euro = 0.87 pounds
};

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}



function fromDollarToYen(amountInDollar) {
    // Calcular el monto en yenes utilizando la tasa de conversión correcta
    let yenAmount = amountInDollar * oneEuroIs["JPY"];
    return yenAmount;
}

// Función para convertir de yenes a libras esterlinas
function fromYenToPound(amount) {
    // Calcular el monto en libras esterlinas
    let poundAmount = amount / oneEuroIs["JPY"] * oneEuroIs["GBP"];
    return poundAmount;
}

// Exportamos las funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};