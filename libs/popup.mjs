const generatePassword = (length, useUppercase, useNumbers, useSymbols) =>{
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{};:,.<>?';

    let chars = lower;
    if (useUppercase) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}

document.getElementById('copy').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
    navigator.clipboard.writeText(password)
        .then(() => {
            const result = document.getElementById('resultStatus');
            result.textContent = `Password copied`;
            result.classList.add('success');
        }).catch(err => {
            console.error('Failed to copy password: ', err);
            const result = document.getElementById('resultStatus');
            result.textContent = 'Failed to copy password.';
            result.classList.add('error');
        });
});

const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');

lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});
