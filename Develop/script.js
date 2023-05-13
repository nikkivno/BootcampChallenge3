// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters= [];
    for (var i = 8; i <= 128; i++) {
       characters.push(i);
    }
var numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

console.log(characters)
console.log(upperCaseLetters)
console.log(lowerCaseLetters)
console.log(numbers)
console.log(specialCharacters)


function generatePassword() {
  console.log("You clicked the 'Generate Password' Button!");
  return "Your Password will be displayed here!"
  }

  

// - open website 

// - click 'Generate Password' button 

// - Prompt user to tell code how many characters they want in their password

// - User writes in a number between 8-128 

// - Prompt user to select what kinds of special characters they want in their code (Uppercase, lowercase, number, symbol)
    //Do all of these options have to be in different boxes?

// - Make sure info correlates to parameters set

// - Generate password

// - Password is generated in the display box


// prompts 

writePassword = prompt ("How many characters do you want in your password? (must be between 8-128)")

writePassword = prompt ("Do you want numbers in your password?")

writePassword = prompt ("Do you want special characters in your program? (ie. !, &, %, $)")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
