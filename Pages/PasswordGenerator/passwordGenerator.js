var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var speccharlen = 0;

window.addEventListener('DOMContentLoaded', (e) => {

    var generatePasswordButton = document.getElementById("generatePasswordButton");
    if (generatePasswordButton) { generatePasswordButton.addEventListener("click", generatePassword, false); }

    var allowNumbersCheckbox = document.getElementById("allownumberscheckbox");
    if (allowNumbersCheckbox) { allowNumbersCheckbox.addEventListener("click", setPossibleCombinations, false); }

    var allowCharactersCheckbox = document.getElementById("allowletterscheckbox");
    if (allowCharactersCheckbox) { allowCharactersCheckbox.addEventListener("click", setPossibleCombinations, false); }

    var allowSpecialCharactersCheckbox = document.getElementById("allowspecialcharacterscheckbox");
    if (allowSpecialCharactersCheckbox) { allowSpecialCharactersCheckbox.addEventListener("click", setPossibleCombinations, false); }
    if (allowSpecialCharactersCheckbox) { allowSpecialCharactersCheckbox.addEventListener("click", switchUseSpecialCharactersSetting, false); }

    var lengthLimitSpinner = document.getElementById("lengthlimit");
    if (lengthLimitSpinner) { lengthLimitSpinner.addEventListener("click", setPossibleCombinations, false); }

    var copyToClipboardButton = document.getElementById("copyToClipboardButton");
    if (copyToClipboardButton) { copyToClipboardButton.addEventListener("click", copyPassword, false); }

    var specialCharactersInput = document.getElementById("specchar");

    if (specialCharactersInput) { specialCharactersInput.addEventListener("change", setPossibleCombinations, false); }
    if (specialCharactersInput) { specialCharactersInput.addEventListener("input", setPossibleCombinations, false); }

    if (specialCharactersInput) { specialCharactersInput.addEventListener("keypress", checkSpecialCharacters, false); }
    if (specialCharactersInput) { specialCharactersInput.addEventListener("change", checkSpecialCharacters, false); }
    if (specialCharactersInput) { specialCharactersInput.addEventListener("input", checkSpecialCharacters, false); }

    var td2 = document.getElementById("specchar");
    var td1 = document.getElementById("speccharlength");
    td1.innerText = "(" + td2.value.length + "/" + td2.getAttribute('maxlength') + ")"
    sparcharlen = td2.value.length;
    setPossibleCombinations();    

})
function checkSpecialCharacters(event) {

    var td2 = document.getElementById("specchar");
    var speccharLabel = document.getElementById("speccharlength");

    specialCharacters = td2.value;

    var keynum = event.key;

    if (speccharlen == td2.getAttribute('maxlength') && keynum) {
        alert(keynum + ' prevented due to max length in special character list being reached already.');
        return;
    }
    
    speccharlen = specialCharacters.length;
        
    if (numbers.includes(keynum)) {
        event.preventDefault();
        alert(keynum + ' prevented due to being in number list.');
    }

    if (characters.includes(keynum)) {
        event.preventDefault();
        alert(keynum + ' prevented due to being in letter list.');
    }

    if (specialCharacters.includes(keynum)) {
        event.preventDefault();
        alert(keynum + ' prevented due to being in special character list already.');
    }

    speccharLabel.innerText = "(" + speccharlen + "/" + td2.getAttribute('maxlength') + ")"
}
function setPossibleCombinations() {

    var allowNumbersCheckbox = document.getElementById("allownumberscheckbox"); //Numbers
    var allowLettersCheckbox = document.getElementById("allowletterscheckbox"); //Characters
    var allowSpecialCharactersCheckbox = document.getElementById("allowspecialcharacterscheckbox"); //Special characters
    var specialCharactersInput = document.getElementById("specchar");
    var lengthLimitSpinner = document.getElementById("lengthlimit");

    var numbers = "0123456789"
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var specialCharacters = specialCharactersInput.value;
    var passwordLength = lengthLimitSpinner.value;

    var possible = '';
    var usedCharacters = ''

    if (allowNumbersCheckbox.checked) {
        usedCharacters += numbers
    }

    if (allowLettersCheckbox.checked) {
        usedCharacters += characters
    }

    if (allowSpecialCharactersCheckbox.checked) {
        usedCharacters += specialCharacters
    }

    possible = Math.pow(usedCharacters.length, passwordLength);

    if (possible <= 1000000000) {
        possible = possible.toLocaleString("en-US");
    }
    else {
        possible = possible.toExponential();
    }

    document.getElementById('PossibleCombinationsLabel').innerText = usedCharacters.length + '^' + passwordLength + ' (' + possible + ')';

    var result = '';
    while (usedCharacters.length > 0) {
        result += usedCharacters.substring(0, 24) + '\n';
        usedCharacters = usedCharacters.substring(24);
    }

    document.getElementById('PossibleCharactersLabel').innerText = result;

}

function switchUseSpecialCharactersSetting() {
    var allowSpecialCharacters = document.getElementById("allowspecialcharacterscheckbox");
    var specialCharacters = document.getElementById("specchar");//Special characters
    if (allowSpecialCharacters.checked) {

        specialCharacters.disabled = false;
    }

    else {

        
        specialCharacters.disabled = true;
    }
    setPossibleCombinations();

}

function copyPassword() {
    var generatedPasswordLabel = document.getElementById("generatedPassword");
    navigator.clipboard.writeText(generatedPasswordLabel.innerText).then(function (x) {
        alert("Password copied to clipboard: " + generatedPasswordLabel.innerText);
    });
}

function generatePassword() {
        
    var allowNumbersCheckbox = document.getElementById("allownumberscheckbox"); //Numbers
    var allowLettersCheckbox = document.getElementById("allowletterscheckbox"); //Characters
    var allowSpecialCharactersCheckbox = document.getElementById("allowspecialcharacterscheckbox"); //Special characters
    var specialCharactersInput = document.getElementById("specchar");
    var lengthLimitSpinner = document.getElementById("lengthlimit");

    var numbers = "0123456789"
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var specialCharacters = specialCharactersInput.value;
    var passwordLength = lengthLimitSpinner.value;

    var password = '';
    var usedCharacters = ''

    if (!allowNumbersCheckbox.checked && !allowLettersCheckbox.checked && !allowSpecialCharactersCheckbox.checked) {
        alert('Must have at least one character to generate password.');
        return;
    }
    if (allowNumbersCheckbox.checked) {
        usedCharacters += numbers
    }

    if (allowLettersCheckbox.checked) {
        usedCharacters += characters
    }

    if (allowSpecialCharactersCheckbox.checked) {
        usedCharacters += specialCharacters
    }

    for (var i = 0; i < passwordLength; i++) {
        var rnum = Math.floor(Math.random() * usedCharacters.length);
        password += usedCharacters.substring(rnum, rnum + 1);
    }

    document.getElementById('generatedPassword').innerText = password;
}