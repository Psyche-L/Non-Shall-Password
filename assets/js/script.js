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
    //var fries = window.confirm("Would you like fries with that?");


// Characters generator will use 
    var emptyString = "";
    var stringLower = "abcdefghijklmnopqrstuvwxyz";
    var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringNumeric = "0123456789"
    var stringSpecial = "+_)(*&^%$#@!~`<>?:{}|"

//Characters denied response window  
    if (passwordUpper === true) {
      emptyString += stringUpper;
    }else {
      window.alert ("You have denied uppercase letters.")
    }


    if (passwordLower === true) {
      emptyString += stringLower;
    } else {
      window.alert ("You have denied lowercase letters.")
    }


    if (passwordNumeric === true) {
      emptyString += stringNumeric;
    }else {
      window.alert ("You denied numeric characters.")
    }


    if (passwordSpecial === true) {
      emptyString += stringSpecial;
    } else {
      window.alert ("You have denied special characters.")
    }
    


    /*if (fries === true) {
      emptyString += fries;
    } else {
      window.alert ("I guess you don't like fries :(")
    }*/
    
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += emptyString.charAt(
      Math.floor(Math.random() * emptyString.length)
    );
  }
  console.log(password)
  passwordText.textContent = password;
  return password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);