// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmNum
var confirmCharacter
var confirmUppercase
var confirmLowercase

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword(){


let passwordInput = prompt ("Length?")

if(passwordInput < 8 || passwordInput > 128) {


prompt ("More than 8, Less than 128") 

} else {
  confirmNum =       confirm("Numbers");
  confirmCharacter = confirm("Characters");
  confirmUppercase = confirm("Uppercase");
  confirmLowercase = confirm("Lowercase");
};


//unsure of how to loop back to confirmation
if (!confirmNum && !confirmCharacter && !confirmUppercase && !confirmLowercase){

        alert ("One character type must be selcted")
}


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


