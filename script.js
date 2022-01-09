var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment code here, assigns a value to a variable, gets the first element in the document with id="generate"
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button, should start whole process if all goes correctly
generateBtn.addEventListener("click", writePassword);

// Function to write password to the id = "password" input  
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";

  }

  function generatePassword() {
    // generatePassword based on prompts
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
  }

  // Get character length and turn it into a number instad of a string
  function getPrompts(){
    choiceArr = [];
    characterLength = parseInt(prompt("How many characters long do you want your password to be? Pick a number between 8 and 128."));

  // Makes sure it's a number and that it's over 8 and under 128
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number between 8 and 128. Please try again.");
      return false;
    }

  // Don't have to worry about checking next four because they're true or false
    if (confirm("Would you like lowercase letters?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like uppercase letters?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like special characters?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    return true;
  }
}