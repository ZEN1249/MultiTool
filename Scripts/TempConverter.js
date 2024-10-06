document.getElementById("submitButton").onclick = function() {
    let tempInput = document.getElementById("temperatura").value;
    let celsiusButton = document.getElementById("cButton");
    let fahrenheitButton = document.getElementById("fButton");
    let templabel = document.getElementById("templabel");

    if (isNaN(tempInput) || tempInput === "") {
        templabel.innerHTML = "Enter a  number";
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
        templabel.innerHTML = `${tempCelsius.toFixed(2)} °C`;
    } else if (fahrenheitButton.checked) {
        let tempFahrenheit = toFahrenheit(Number(tempInput));
        templabel.innerHTML = `${tempFahrenheit.toFixed(2)} °F`;
    } else {
        templabel.innerHTML = "Select a unit";
    }
};
