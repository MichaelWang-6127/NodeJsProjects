/*
*	author: Michael Wang
*	date created:07-25-2018
*	date lasted edited: 07-25-2018
*/

// # npm install readline-sync

function printMenu(){
	console.log("This is a 4 function calculator app");
	console.log("This program takes 2 integers and an operator and performs the entered operation.");
}

function calculate(param1, param2, param3){
	switch(param2){
		case "+":
			return (param1 + param3);
			break;
		case "-":
			return (param1 - param3);
			break;
		case "*":
			return (param1 * param3);
			break;
		case "/":
			return (param1 / param3);
			break;
		default:
			console.log("Error with operator input.");
			return ("Error");
	}
}

printMenu();

var readline = require('readline-sync');
do{
	var num1 = readline.question("What is your first integer?");
} while (!(/^\d+$/.test(num1)))

do{
	var op1 = readline.question("What is your operation?");
} while ((op1 != "+")&&(op1 != "-")&&(op1 != "*")&&(op1 != "/"))

do{
	var num2 = readline.question("What is your second integer?");
} while (!(/^\d+$/.test(num2)))

var result1 = calculate(parseInt(num1), op1, parseInt(num2));

console.log(num1 + op1 + num2 + "=" + result1);