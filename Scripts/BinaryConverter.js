document.getElementById('binaryInput').addEventListener('input', function () {
    const binaryInput = this.value;
    if (!/^[01]*$/.test(binaryInput)) {
        alert('Please enter a valid binary number.');
        clearOutputs();
        return;
    }
    if (binaryInput) {
        const decimal = parseInt(binaryInput, 2);
        updateOutputs(decimal, 'binary');
    }
});

document.getElementById('decimalInput').addEventListener('input', function () {
    const decimalInput = this.value;
    if (!/^\d*$/.test(decimalInput)) {
        alert('Please enter a valid decimal number.');
        clearOutputs();
        return;
    }
    if (decimalInput) {
        const decimal = parseInt(decimalInput, 10);
        updateOutputs(decimal, 'decimal');
    }
});

document.getElementById('octalInput').addEventListener('input', function () {
    const octalInput = this.value;
    if (!/^[0-7]*$/.test(octalInput)) {
        alert('Please enter a valid octal number.');
        clearOutputs();
        return;
    }
    if (octalInput) {
        const decimal = parseInt(octalInput, 8);
        updateOutputs(decimal, 'octal');
    }
});

document.getElementById('hexInput').addEventListener('input', function () {
    const hexInput = this.value;
    if (!/^[0-9A-Fa-f]*$/.test(hexInput)) {
        alert('Please enter a valid hexadecimal number.');
        clearOutputs();
        return;
    }
    if (hexInput) {
        const decimal = parseInt(hexInput, 16);
        updateOutputs(decimal, 'hex');
    }
});

function updateOutputs(decimal, source) {
    if (source !== 'binary') {
        document.getElementById('binaryInput').value = decimal.toString(2);
    }
    if (source !== 'decimal') {
        document.getElementById('decimalInput').value = decimal.toString(10);
    }
    if (source !== 'octal') {
        document.getElementById('octalInput').value = decimal.toString(8);
    }
    if (source !== 'hex') {
        document.getElementById('hexInput').value = decimal.toString(16).toUpperCase();
    }
}

function clearOutputs() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('decimalInput').value = '';
    document.getElementById('octalInput').value = '';
    document.getElementById('hexInput').value = '';
}