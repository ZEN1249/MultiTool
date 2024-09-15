
document.getElementById("submitButton").onclick = function() {
    let tempInput = document.getElementById("temperatura").value;
    let cButton = document.getElementById("cButton");
    let fButton = document.getElementById("fButton");
    let templabel = document.getElementById("templabel");

    if (isNaN(tempInput) || tempInput === "") {
        templabel.innerHTML = "Enter a  number";
        return;
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }
    
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    

    if (cButton.checked) {
        let tempCelsius = toCelsius(Number(tempInput));
        templabel.innerHTML = `${tempCelsius.toFixed(2)} °C`;
    } else if (fButton.checked) {
        let tempFahrenheit = toFahrenheit(Number(tempInput));
        templabel.innerHTML = `${tempFahrenheit.toFixed(2)} °F`;
    } else {
        templabel.innerHTML = "Select a unit";
    }
};
