
// Assignment code here
// Assigns a value to a variable
// Gets the first element in the document with id="generate"
var generateBtn = document.querySelector("#generate");

// Special characters for the function created
const specialCharacters = " ~`@#$%^&*()_-+={[}]|\;:'<,>.?/ ";

// Function to write password to the id = "password" input  (Writes pw to #password input)
function writePassword() {
  var password = generatePassword();
  // Gets the first element in the document with id = "passport"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// Should start whole process if all goes correctly
generateBtn.addEventListener("click", writePassword);

//Prompts that should come up when user presses the 'generate password' button 
function generatePassword () {
  var passwordLength = prompt("Howdy! How many characters do you want to include in your password? Pick a number between 8 and 128.");
//From here on it's yes or no answers so use 'confirm'
  var numbers = confirm("Do you want to include at least one number in your password?");

  var lowerCases = confirm("Do you want to include at least one lowercase character?");

  var upperCases = confirm("Do you want to include at least one uppercase character?");

  var special = confirm("Do you want to include at least one special character?");
};

// Minimum count for user input
var minumumCount = 0;

// Empty minumum for user input
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

//Generator functions
var functionArray = [
  function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  function getLowerCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  function getUpperCases() {
    return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  function getSpecialCharacters() {
    return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
  }

];

// Makes sure user selected OK and fulfilled empty minimums

if (numbers === true) {
  minimumNumbers = functionArray[0];
  minimumCount++;
}

if (lowerCases === true) {
  minumumLowerCases = functionArray[1];
}

if (upperCases === true) {
  minimumUpperCases = functionArray[2];
}

if (special === true) {
  minimumSpecialCases = functionArray[3];
  minimumCount++;
}

// Empty string variable for the for loop
var randomPasswordGenerated = "";

// For loop for getting all the random characters
for (let i = 0; i < parseInt(passwordLength) - minimumCount); i++ {
  var randomNumberPicked = Math.floor(Math.random () * 4);

  randomPasswordGenerated += functionArray[randomNumberPicked] ();
}

// ensure characters added to pw
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minumumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;




