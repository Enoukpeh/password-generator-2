// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNuber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "012345678"
var specialCharacter = "]/;.'=)*^%$#@!"

// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
   var passwordString =""

   var size = prompt ("what is the length of your password length must be at least 8 to 128 characters")
    
console.log (size)

  size = parseInt (size)

  if (size >=8  && size <=128 ){
     confirmLowercase = confirm("do you want lowercase")
     confirmUppercase = confirm("do you want uppercase")
     confirmNuber = confirm("do you want numbers")
     confirmCharacter = confirm("do you want special characters")

     if(confirmLowercase){
        var index =  Math.floor(Math.random()*lowercase.length)
        passwordString = passwordString + lowercase.charAt(index)
     }
     if(confirmUppercase){
      var index =  Math.floor(Math.random()*uppercase.length)
      passwordString = passwordString + uppercase.charAt(index)
     }
     if(confirmNuber){
      var index =  Math.floor(Math.random()*number.length)
      passwordString = passwordString + number.charAt(index)
     }
     if(confirmCharacter){
      var index =  Math.floor(Math.random()*character.length)
      passwordString = passwordString + character.charAt(index)
     }
  }

   return passwordString
   
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
