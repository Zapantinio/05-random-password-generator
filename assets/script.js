// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const userInput = {
  passwordLength: 1,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true
};

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    var isNumber = isNaN(passwordLength);

    !isNumber && console.log(passwordLength);
  }
  while (isNumber);

  if (passwordLength < 10) {
    alert("Password length must be at least 10 characters.");
    getPasswordOptions();
  } else if (passwordLength > 64) {
    alert("Password length must be equal or less than 64 characters.")
    getPasswordOptions();
  } else {
    userInput.passwordLength = passwordLength;
    userInput.lowercase = confirm("Would you like your password to contain lowercase characters?");
    userInput.uppercase = confirm("Would you like your password to contain uppercase characters?");
    userInput.numeric = confirm("Would you like your password to contain numeric characters?");
    userInput.specia = confirm("Would you like your password to contain special characters?");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);