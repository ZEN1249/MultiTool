const h = 6.626e-34;
const c = 3e8;

function calculatePhotonEnergy() {
    const frequency = parseFloat(document.getElementById('frequency').value);
    if (isNaN(frequency) || frequency <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid frequency.';
        return;
    }
    const energy = h * frequency;
    document.getElementById('result').textContent = `Photon Energy: ${energy.toExponential(3)} J`;
}

function calculateWavelength() {
    const frequency = parseFloat(document.getElementById('frequency').value);
    if (isNaN(frequency) || frequency <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid frequency.';
        return;
    }
    const wavelength = c / frequency;
    document.getElementById('result').textContent = `Wavelength: ${wavelength.toExponential(3)} m`;
}

function calculateFrequency() {
    const wavelength = parseFloat(document.getElementById('wavelength').value);
    if (isNaN(wavelength) || wavelength <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid wavelength.';
        return;
    }
    const frequency = c / wavelength;
    document.getElementById('result').textContent = `Frequency: ${frequency.toExponential(3)} Hz`;
}