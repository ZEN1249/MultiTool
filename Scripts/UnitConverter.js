const conversionRates = {
    meters: {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        feet: 3.28084,
        inches: 39.3701
    },
    kilometers: {
        meters: 1000,
        kilometers: 1,
        miles: 0.621371,
        feet: 3280.84,
        inches: 39370.1
    },
    miles: {
        meters: 1609.34,
        kilometers: 1.60934,
        miles: 1,
        feet: 5280,
        inches: 63360
    },
    feet: {
        meters: 0.3048,
        kilometers: 0.0003048,
        miles: 0.000189394,
        feet: 1,
        inches: 12
    },
    inches: {
        meters: 0.0254,
        kilometers: 0.0000254,
        miles: 0.000015783,
        feet: 0.0833333,
        inches: 1
    }
};

function convertUnits() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').textContent = 'Please enter a valid number.';
        return;
    }

    const conversionRate = conversionRates[inputUnit][outputUnit];
    const outputValue = inputValue * conversionRate;

    document.getElementById('outputValue').textContent = `${inputValue} ${inputUnit} = ${outputValue.toFixed(2)} ${outputUnit}`;
}