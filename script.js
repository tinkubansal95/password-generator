// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password != undefined){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    var passLength=  window.prompt("Please enter length of the password.\nLength of the password should be from 8 to 128 characters.");
    
    // check if user have entered length from 8 to 128 characters
    if(passLength<8 || passLength > 128)
    {
      window.alert("Please choose valid length and try again");
      return;
    }
    var LCaseChoice = window.confirm("Do you want lower case characters in your password?");
    var UCaseChoice = window.confirm("Do you want upper case characters in your password?");
    
    // check if user have selected atleast one from lower case and upper case letters
    if(! (LCaseChoice || UCaseChoice ))
    {
      window.alert("You need to choose atleast one of the characters.\nPlease try again.");
      return;
    }

    // check if user want numeric in the password
    var NumericChoice = window.confirm("Do you want numeric in your password?");

    // check if user want special characters in the password
    var SpecialCharChoice = window.confirm("Do you want special characters in your password?");

    var PassString = "";
    var FinalPassword = "";
    
    if(LCaseChoice){
      PassString = PassString.concat("abcdefghijklmnopqrstuvwxyz");
    }
    if(UCaseChoice){
      PassString = PassString.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if(NumericChoice)
    {
      PassString = PassString.concat("0123456789");
    }
    if(SpecialCharChoice)
    {
      PassString = PassString.concat("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
      PassString = PassString.concat('"');
    }

    //generate password
    for(var i=0;i<= passLength; i++){
        FinalPassword = FinalPassword.concat(PassString.charAt(Math.floor(Math.random() * Math.floor(PassString.length))));
    }
    return FinalPassword;
}
