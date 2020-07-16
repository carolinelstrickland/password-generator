In this exercise, I am creating a random password generator by employing HTML, CSS and JavaScript. I also borrowed from the Bootstrap CDN. 

To establish the JavaScript necessary to create the password: 
First, I must allow the user to select their password length from an approved list of characters (all upper and lowercase letters, all numbers and several special characters). The minimum length of a password can be 8 characters, and the maximum length is 128, per the guidelines. These options will be triggered by pressing the "Generate" button. 
Once the "Generate" button has been selected, my JavaScript code should iterate as many times as the value of the length of the password minus 1 by establishing a for loop.