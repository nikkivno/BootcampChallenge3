
var characterLength = 8
var choiceArr = [];

var generateBtn = document.querySelector("#generate");

var numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    characterLength = (prompt ("How many characters do you want in your password? (must be between 8-128)"));
    
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Password length must be between 8-128 characters long and expressed as a #. Please try again");
    return false;
    }
    ask();

    if (confirm ("Would you like numbers in your password?")) {    
    choiceArr = choiceArr.concat(numbers);
    }
    if (confirm ("Would you like uppercsase letter in your password?")) { 
    choiceArr = choiceArr.concat(upperCaseLetters);
    }
    if (confirm ("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseLetters);
    }
    if (confirm ("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacters);
    }
    return true;
  }

  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
