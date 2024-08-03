// Regular expressions for validation
const zipCodeRegex = /^(?:\d{5}(-\d{4})?|\d{5} \d{4}|\d{9})$/;
const creditCardRegex = /^(?:\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}|\d{16})$/;
const phoneNumberRegex = /^(?:\(\d{3}\)\s?\d{3}-\d{4}|\d{3}[.-]\d{3}[.-]\d{4}|\d{10}|\d{3} \d{3} \d{4})$/;

// Function to test Zip Code
function testZipCode() {
    const zipCode = document.getElementById('zipCodeInput').value;
    const result = zipCodeRegex.test(zipCode) ? 'Valid Zip Code' : 'Invalid Zip Code';
    document.getElementById('zipCodeResult').innerText = result;
}

// Function to test Credit Card Number
function testCreditCard() {
    const creditCard = document.getElementById('creditCardInput').value;
    const result = creditCardRegex.test(creditCard) ? 'Valid Credit Card Number' : 'Invalid Credit Card Number';
    document.getElementById('creditCardResult').innerText = result;
}

// Function to test Phone Number
function testPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    const result = phoneNumberRegex.test(phoneNumber) ? 'Valid Phone Number' : 'Invalid Phone Number';
    document.getElementById('phoneNumberResult').innerText = result;
}
