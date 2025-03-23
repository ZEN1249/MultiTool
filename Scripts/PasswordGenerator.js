function GeneratePassword() {
    const length = document.getElementById('Length').value;
    const includeUppercase = document.getElementById('Uppercase').checked;
    const includeLowercase = document.getElementById('Lowercase').checked;
    const includeNumbers = document.getElementById('Numbers').checked;
    const includeSpecial = document.getElementById('Special').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecial) allChars += specialChars;
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {document.getElementById('Password').value = 'Please select character type';return;}

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('Password').value = password;
}