
function toCelsius(fahrenheint){
    let celsius = 0;
    celsius = (fahrenheint - 32) * 5/9;
    return celsius.toFixed(1);
}

function toFahrenheit(celsius) {
    let fahrenheit = 0;
    fahrenheit = celsius * 1.8 + 32;
    return fahrenheit.toFixed(1);
}

export { toCelsius, toFahrenheit }