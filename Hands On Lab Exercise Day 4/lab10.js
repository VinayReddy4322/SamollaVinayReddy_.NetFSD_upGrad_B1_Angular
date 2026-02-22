const readline = require("readline-sync");
let correctUsername="Admin";
let CorrectPassword="1234";
let attempts=0;

while(attempts<3){
    let username=readline.question("Enter USername:");
    let password=readline.question("Enter Password:");

if(username===correctUsername && password===CorrectPassword){
    console.log("Login Successfull!!!!");
    break;
}
else{
    console.log("InValid Credentials");
    attempts++;
}
}