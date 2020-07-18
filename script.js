let button = document.querySelector
var generateBtn = document.querySelector("generate");

function passwordOptions() {
    var charAmount = prompt("How many characters would you like to include, between 8-126?")
    var confirmLowerRandom = confirm("Include lowercase letters in password?");
    var confirmUpperRandom = confirm("Include uppercase letters?");
    var confirmNumbers = confirm("Include numbers?");
    var confirmSpecialCharacters = confirm("Include special characters?");
    console.log(charAmount, confirmLowerRandom, confirmNumbers, confirmSpecialCharacters, confirmUpperRandom);

    if (!confirmLowerRandom && !confirmUpperRandom && !confirmNumbers && !confirmSpecialCharacters); {
        alert("You must select at least one character type.")
    }
    let options = {
        lengthOfChars: charAmount,
        lowersOfChars: confirmLowerRandom,
        uppersOfChars: confirmUpperRandom,
        specialOfChars: confirmSpecialCharacters,
        numsOfChars: confirmNumbers,
    }
    return options;
}

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?', '/', '<', '>']

function generatePassword() {
    let guaranteedChars = []
    let options = passwordOptions()
    console.log(options);
    let allChars = []
    let finalPassword = []
    if (options.lowersOfChars) {
        allChars=allChars.concat(lowerCase);
        guaranteedChars.push(pickRandom(lowerCase));
    }
    if (options.uppersOfChars) {
        allChars=allChars.concat(upperCase);
        guaranteedChars.push(pickRandom(upperCase));

    }
    if (options.specialOfChars) {
        allChars=allChars.concat(specialCharacters);
        guaranteedChars.push(pickRandom(specialCharacters));

    }
    if (options.numsOfChars) {
        allChars=allChars.concat(numbers);
        guaranteedChars.push(pickRandom(numbers));

    }
    for (let index = 0; index < options.lengthOfChars; index++) {
    finalPassword.push(pickRandom(allChars))  
    }
    for (let index = 0; index < guaranteedChars.length; index++) {
    finalPassword[index]=guaranteedChars[index];
    }
    console.log(allChars);
    console.log(finalPassword);
    console.log(guaranteedChars);
    return finalPassword.join("");
}

function pickRandom(array) {
    let randomIndex= Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function writePassword() {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}
document.getElementById("generate").addEventListener("click", function(){
    writePassword()
})



