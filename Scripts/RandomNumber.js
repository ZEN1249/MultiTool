function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        document.getElementById('randomNumberOutput').textContent = 'Please enter valid numbers.';
        return;
    }

    if (minValue > maxValue) {
        document.getElementById('randomNumberOutput').textContent = 'Min value cannot be greater than Max value.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('randomNumberOutput').textContent = `Random Number: ${randomNumber}`;
}