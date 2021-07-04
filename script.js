// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
function generatePassword() {
    var passwordString = ""
    var confirmNumber;
    var confirmCharacter;
    var confirmUppercase;
    var confirmLowercase;
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var number = "0123456789"
    var specialCharacter = "]/;.'=)*^%$#@!"

    var size = prompt("What length would you like your password? It must be between 8 and 128 characters.")

    size = parseInt(size)

    if (size >= 8 && size <= 128) {
        confirmLowercase = confirm("do you want lowercase")
        confirmUppercase = confirm("do you want uppercase")
        confirmNumber = confirm("do you want numbers")
        confirmCharacter = confirm("do you want special characters")

        if (confirmLowercase || confirmUppercase || confirmNumber || confirmCharacter) {
            var i = 0
            while (i < size) {
                if (confirmLowercase && i < size) {
                    var index = Math.floor(Math.random() * lowercase.length)
                    passwordString = passwordString + lowercase.charAt(index)
                    i++
                }
                if (confirmUppercase && i < size) {
                    var index = Math.floor(Math.random() * uppercase.length)
                    passwordString = passwordString + uppercase.charAt(index)
                    i++
                }
                if (confirmNumber && i < size) {
                    var index = Math.floor(Math.random() * number.length)
                    passwordString = passwordString + number.charAt(index)
                    i++
                }
                if (confirmCharacter && i < size) {
                    var index = Math.floor(Math.random() * specialCharacter.length)
                    passwordString = passwordString + specialCharacter.charAt(index)
                    i++
                }
            }
        } else {
            alert("At least one charcter type must be chosen, no password generated")
        }
    } else {
        alert("Incorrect size, no password generated")
    }
    return passwordString
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
