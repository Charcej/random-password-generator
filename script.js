// ask for character length
var characterLength = Number(prompt("Enter a character length: between 8 and 128"));

//ask for character types to include
var characterType = prompt("Enter one character type to use: lowercase, uppercase, numeric or special)");

//generate pw
function generatePassword() {
  // eval character type
  var charSet = "";
  var characterTypeLower = characterType.toLowerCase();
  if (characterTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwyz";
  } else if( characterTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( characterTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( characterTypeLower === "special ") {
    charSet = " !@#$%^&*()_-+={[}]|\:;'<,>.?/~`";
  }
  //return
  var returnValue = "";
  for (var i = 0; i < characterLength; i++) {
    // picks a character from charSet at index of random number
    returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return returnValue;
}
console.log(generatePassword());
  


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
