// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSelections
var passwordLength
var confirmNum
var confirmChar
var confirmUppercase
var confirmLowercase

//Number, symbols, chars

var passwordChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Creating an Array to return lowercase letters by generating keycodes 
var charCodes = Array.from(Array(26)).map( (_, i) => i + 97);

//Converting keycodes to string
var lowercaseLetters = charCodes.map(code => String.fromCharCode(code));

// Uppercase Letter Conversion
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword(passwordLength, confirmNum, confirmCharacter, confirmUppercase, confirmLowercase){


  // using parseInt function to ensure user input is passed through as an interger
 
     passwordLength = parseInt(prompt("Length of your password?"));

  
     // Checking Conditions for password length

     while (passwordLength < 8 || passwordLength > 128){

      passwordLength = parseInt(prompt("Password length must be between 8 & 128 characters."));

    } 
    
    
    //Start Prompts for Character Choice


    confirmNum =  confirm("Numbers");
    confirmChar = confirm("Characters");
    confirmUppercase = confirm("Uppercase");
    confirmLowercase = confirm("Lowercase");
 
     //switched promt to alert
     //If time allows, create loop for character choice to include condition check 

 if (!confirmNum && !confirmCharacter && !confirmUppercase && !confirmLowercase){

  passwordLength = parseInt(alert("At leat one criteria must be chosen"));
  

  }
      
  

// I researched a neater way of storing and iterating through the available characters
// Found the below process using ternary operators
//Adding variable to store array of all usable characters and conditionally adding properties to array
//Each property uses spread operator
//If selction is true then access corresponding array, if false create an empty array
//This is in lieu of writing separate if statements, for each combination of character selections, that concatinate the variables storing the arrays of characters that will makeup the password 



 var availChar  = [

  ...(confirmNum ? passwordNum : []),
  ...(confirmChar ? passwordChar : []),
  ...(confirmUppercase ? uppercaseLetters : []),
  ...(confirmLowercase ? lowercaseLetters : []),

 ];


 // Declared variable to return password as a string

var password = "";

//starting random number generator
 
 for (var i = 0; i < passwordLength; i++) {
  var passwordInput = Math.floor(Math.random() * availChar.length);
  password += availChar[passwordInput];
 

}

return password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


