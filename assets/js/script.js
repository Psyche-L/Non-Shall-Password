// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt(
    "How many characters would you like to have? (Choose between 8 and 128)"

  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    var passwordLower = window.confirm("Would you like lowercase letters?");
    var passwordUpper = window.confirm("Would you like to uppercase letters?");
    var passwordNumeric = window.confirm("Would you like to add numbers?");
    var passwordSpecial = window.confirm("Would you like special characters?");
    var fries = window.confirm("Would you like fries with that?");


// Characters generater will use 
    var emptyString = "";
    var stringLower = "abcdefghijklmnopqrstuvwxyz";
    var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringNumeric = "0123456789"
    var stringSpecial = "+_)(*&^%$#@!~`<>?:{}|"



    
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);