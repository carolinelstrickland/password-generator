var confirmLowerRandom = confirm("Include lowercase letters in password?");
var confirmUpperRandom = confirm("Include uppercase letters?");
var confirmNumbers = confirm("Include numbers?");
var confirmSpecialCharacters = confirm("Include special characters?");

if (!confirmLowerRandom && !confirmUpperRandom && !confirmNumbers && !confirmSpecialCharacters); { 
    alert("You must select at least one character type.")
   
}

