function displayResult(result, unit) {
    document.getElementById("templabel").innerHTML = `${result.toFixed(2)} ${unit}`;
}

document.getElementById("submitButton").onclick = function () {
    let tempInput = document.getElementById("temperatura").value;
    let celsiusButton = document.getElementById("cButton");
    let fahrenheitButton = document.getElementById("fButton");
    let templabel = document.getElementById("templabel");

    if (!validateInput(tempInput)) {
        templabel.innerHTML = "Enter a number";
        return;
    }

    const FAHRENHEIT_OFFSET = 32;
    const TO_CELSIUS_CONVERSION_FACTOR = 5 / 9;
    const TO_FAHRENHEIT_CONVERSION_FACTOR = 9 / 5;

    function toCelsius(fahrenheit) {
        return (fahrenheit - FAHRENHEIT_OFFSET) * TO_CELSIUS_CONVERSION_FACTOR;
    }

    function toFahrenheit(celsius) {
        return (celsius * TO_FAHRENHEIT_CONVERSION_FACTOR) + FAHRENHEIT_OFFSET;
    }

    if (celsiusButton.checked) {
        let tempCelsius = toCelsius(Number(tempInput));
        displayResult(tempCelsius, "°C");
    } else if (fahrenheitButton.checked) {
        let tempFahrenheit = toFahrenheit(Number(tempInput));
        displayResult(tempFahrenheit, "°F");
    } else {
        templabel.innerHTML = "Select a unit";
    }
};
