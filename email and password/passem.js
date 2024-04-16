// პრომპტის გამოყენება
const prompt = require('prompt-sync')();
// სწორი ემაილი და პაროლი
let email = "giorgi@gmail.com";
let kode = "adc123";
// მომხმარებლის მიერ შეყვანილი ემაილი და პაროლი
let Name = prompt("your email ");
let password = prompt("What is the password? ");
if(password == kode && Name == email){
  console.log("Welcome!");
}else{
  console.log("Email or password is incorrect, try again");
}