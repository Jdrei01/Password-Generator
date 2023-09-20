// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// input and validate
function generatePasswordChoices() {
  var passwordChars = '';

  var length = prompt('enter length at least 8 characters and no more than 128 characters')
  // if length is less than 8 or more than 128 thru an error.
  if (length < 8 || length > 128) {
    alert('Please choose a appropriate password length 8-128')
    return null
  }


  console.log(length)
  var lowercase = confirm('Do you want a lower case or no?')
  console.log(lowercase)

  var uppercase = confirm('Do you want a upper case or no?')
  console.log(uppercase)

  var numeric = confirm('Do you want a numeric or no?')
  console.log(numeric)

  var special = confirm('Do you want a special characters?')
  console.log(special)

  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert('must include at least one character type')
    return null
  }
  var passwordChoices = {
    length: length,
    uppercaseChoice: uppercase,
    lowercaseChoice: lowercase,
    numericChoice: numeric,
    specialChoice: special,
  }
  return passwordChoices
}
function generatePassword() {
  var choices = generatePasswordChoices();
  console.log(choices)

  var result = [];
  var passwordChars = [];
  var randomChars = [];
  console.log(choices.uppercaseChoices)

  // group selected characters
  if (choices.uppercaseChoice) {
    passwordChars = passwordChars.concat(uppercaseCharacters)
    randomChars.push(generateRandom(uppercaseCharacters))
  }

  if (choices.lowercaseChoice) {
    passwordChars = passwordChars.concat(lowercaseCharacters)
    randomChars.push(generateRandom(lowercaseCharacters))
  }

  if (choices.numericChoice) {
    passwordChars = passwordChars.concat(numericCharacters)
    randomChars.push(generateRandom(numericCharacters))
  }

  if (choices.specialChoice) {
    passwordChars = passwordChars.concat(specialCharacters)
    randomChars.push(generateRandom(specialCharacters))
  }

  // pick random cards out of new pool for length of password
  for (var i = 0; i < choices.length; i++) {
    console.log(randomChars)
    var randomCharacter = generateRandom(randomChars);
    console.log(randomCharacter)
  }
  for (var i = 0; i < choices.length; i++) {
    result[i] = passwordChars[Math.floor(Math.random() * passwordChars.length)]
    console.log(result)
    console.log(passwordChars)
    console.log(randomChars)


  }
  return result.join('')
}

function generateRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr);
  var randomElement = arr[randomIndex]
  return randomElement;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
