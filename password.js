//Create a new file called password.js. Write a program that does the following:
// Create a variable called password and set it’s value to a string of your choice.
//Write a conditional statement that checks if the password meets the following constraints:
//     At least 10 characters long
//     Contains at least one letter and one number
// If the password meets the constraint, console log a success message.
// If the password fails the constraint, console log a failure message.
// Test out your conditional by changing the value of your password variable and running your file!

let password = "BrightPaths01"

let arraypassword = password.split('')
const letters = /[A-za-z]/g
console.log(arraypassword)


if (arraypassword.length >10){
    console.log('At least 10 characters long')  
} else {
    console.log('Password is not strong enough')
}




 function atLeastonecharacterandOneNumber(password) {
    // return /\d/.test(password) 
    // return /\./.test(password)
    return /^[0-9a-zA-Z]*$/.test(password);
 }  
 console.log('Password contains at least a letter and number:', atLeastonecharacterandOneNumber(password)); 

// function alphanumeric(password)
// {
//  var letterNumber = /^[0-9a-zA-Z]+$/;
//  if (password.value.match(letterNumber)) 
//   {
//     console.log("Password has at least a number and a character")
//    return true;
//   }
// else
//   { 
//    alert("Password failed"); 
//    return false; 

//   } 
//   }
    
  
 

// console.log('Your password is strong')
//  else {console.log('Your password is weak. Please make stronger.')}


