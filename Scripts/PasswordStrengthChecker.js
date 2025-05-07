document.getElementById('passwordInput').addEventListener('input', function () {
    const password = this.value;
    const strengthBar = document.getElementById('strengthIndicator');
    const strengthMessage = document.getElementById('strengthMessage');

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = 'red';
            strengthMessage.textContent = '';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            strengthMessage.textContent = 'Very Weak' + `  ${strength}/5`;
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'orange';
            strengthMessage.textContent = 'Weak' + `  ${strength}/5`;
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = 'yellow';
            strengthMessage.textContent = 'Moderate' + `  ${strength}/5`;
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'lightgreen';
            strengthMessage.textContent = 'Strong' + `  ${strength}/5`;
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            strengthMessage.textContent = 'Very Strong' + `  ${strength}/5`;
            break;
    }
});