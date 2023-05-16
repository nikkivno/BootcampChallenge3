var generateBtn = document.querySelector("#generate");


var choiceArr = [];
var numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
    var characterLength = (prompt ("How many characters do you want in your password? (must be between 8-128)"));
    
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Password length must be between 8-128 characters long and expressed as a #. Please try again");
    return "";
    } else {
      if (characterLength >= 8 || characterLength <=128);
      // console.log(characterLength)
    }
    var numberPrompt = confirm("Would you like numbers in your password?")
    var uppercasePrompt = confirm("Would you like uppercsase letter in your password?")
    var lowercasePrompt = confirm("Would you like lowercase letters in your password?")
    var specialCharPrompt = confirm("Would you like special characters in your password?")

    if (!numberPrompt && !uppercasePrompt && !lowercasePrompt && !specialCharPrompt) {
      alert ("Error: Must have one selected option.");
      return "";
    }
    if (numberPrompt) {    
    choiceArr = choiceArr.concat(numbers);
    // console.log(choiceArr)
    }
    if (uppercasePrompt) { 
    choiceArr = choiceArr.concat(upperCaseLetters);
    // console.log(choiceArr)
    }
    if (lowercasePrompt) {
    choiceArr = choiceArr.concat(lowerCaseLetters);
    // console.log(choiceArr)
    }
    if (specialCharPrompt) {
    choiceArr = choiceArr.concat(specialCharacters);
    console.log(choiceArr);
    }
    var emptyString = '';
    for (var i=0; i<characterLength; i++) {
      var randomIndex = Math.floor(Math.random()*choiceArr.length);
      var randomChar = choiceArr[randomIndex];
      emptyString+=randomChar
    }
    return emptyString
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
